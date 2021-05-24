import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import styled, { keyframes } from 'styled-components'
import { Heading } from 'toolkitUI/components/Heading'
import { Flex } from 'toolkitUI/components/Box'
import { GiRapidshareArrow } from 'react-icons/gi'
import { IconButton, Button } from 'toolkitUI/components/Button'
import { ButtonMenu, ButtonMenuItem } from 'toolkitUI/components/ButtonMenu'
import { AiOutlineArrowDown, AiOutlineSwap } from 'react-icons/ai'
import CurrencyInputPanel from 'components/CurrencyInputPanel'
import ZapLabToken from 'entities/zapLabToken'
import useWeb3 from 'hooks/useWeb3'
import {
  getBondageContract,
  getCurrentCostContract,
  getZapToken,
  getErc20,
  getTokenDotFactoryContract,
} from 'utils/contractHelpers'
import { getBondageAddress } from 'utils/addressHelpers'
import { Text } from 'toolkitUI/components/Text'
import ConfirmDialog from 'views/Bond/components/ConfirmDialog/ConfirmDialog'
import Overlay from 'toolkitUI/components/Overlay/Overlay'
import Balance from 'components/Balance'

const BUICard = styled.div`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  border-radius: 32px;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  width: 100%;
  gap: 20px;
`

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices.modal - 1};
`

interface BondUICardProps {
  baseTokenSymbol?: string
  handleFlip?: () => void
  token: ZapLabToken
  refresh?: () => void
}

/**
 * Enum of what calls can be done
 */
const action = {
  BOND: 'Bond',
  UNBOND: 'Unbond',
}

/**
 * Enum of possible error messages
 */
const errorMsg = {
  BLANK: 'Enter an Amount',
  BALANCE: 'Insuffecient Balance',
  LIMIT: 'Insufficient Supply',
  APPROVE: `Approve ZAP`,
  BROKER: 'Approve Broker for ZAP',
  TOKEN: 'Aprove Broker for ',
}

/**
 * Enum of state the contract call could be in
 */
export const tsxStatus = {
  STANDBY: 'Standby',
  SENT: 'Processing',
  CONFIRMED: 'Confirmed',
  ERROR: 'Error',
}

const BondUICard: React.FC<BondUICardProps> = ({
  token,
  handleFlip,
  baseTokenSymbol = 'ZAP',
  refresh = () => {
    return null
  },
}) => {
  const { name: title, symbol, brokerAddress } = token
  const [mode, setMode] = useState(action.BOND)
  const [tsxVals, setVals] = useState({ zap: '', dots: '' })
  const [error, setError] = useState({ zap: false, dots: false, msg: '' })
  const [allowed, setAllowed] = useState({ bondage: false, broker: false, token: false })
  const [perDot, setPerDot] = useState(true)
  const [tsxState, setTsxState] = useState(tsxStatus.STANDBY)
  const [tsxHash, setTsxHash] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [zapBal, setZapBal] = useState('0')

  const web3 = useWeb3()
  const chainId = parseInt(((web3.currentProvider as unknown) as { [key: string]: string }).chainId, 16)
  const bondage = getBondageContract(web3, chainId)
  const currentCost = getCurrentCostContract(web3, chainId)
  const zapToken = getZapToken(web3, chainId)
  const bytesName = Web3.utils.asciiToHex(token.name)

  /**
   * Checks if the entered amount is <= the implicit market cap
   *
   * @param dots entered value from field
   * @returns boolean
   */
  const checkWithinMktCap = (dots: string) => {
    if (dots === '') {
      return true
    }
    const limit = Web3.utils.toBN(token.dotLimit)
    const nDots = Web3.utils.toBN(dots)
    const totalBound = Web3.utils.toBN(token.totalBound)
    const newTotal = nDots.add(totalBound)
    return limit.gte(newTotal)
  }

  /**
   * Checks if the entered amount is <= the user's balance
   *
   * @param dots entered value from field
   * @returns boolean
   */
  const checkWithinUserBondedDots = (dots: string) => {
    if (dots === '') {
      return true
    }
    const limit = Web3.utils.toBN(token.userBound)
    const nDots = Web3.utils.toBN(dots)
    return limit.gte(nDots)
  }

  /**
   * Checks if the entered amount is <= the total amount distributed / bonded
   *
   * @param dots entered value from field
   * @returns boolean
   */
  const checkWithinBondedDots = (dots: string) => {
    if (dots === '') {
      return true
    }
    const limit = Web3.utils.toBN(token.totalBound)
    const nDots = Web3.utils.toBN(dots)
    return limit.gte(nDots)
  }

  /**
   * Checks if the token has a broker
   *
   * @returns boolean
   */
  const checkHasBroker = (): boolean => {
    return !/^0x0+$/.test(token.brokerAddress) && Web3.utils.isAddress(token.brokerAddress)
  }

  /**
   * Cehcks if the user needs to approve Zap or the token
   *
   * @returns boolean
   */
  const checkNeedApprove = () => {
    return (mode === action.BOND && (!allowed.bondage || !allowed.broker)) || (!allowed.token && mode === action.UNBOND)
  }

  let tdf
  if (checkHasBroker()) {
    tdf = getTokenDotFactoryContract(token.brokerAddress, web3)
  }

  let erc20
  if (token.isToken) {
    erc20 = getErc20(token.tokenAddress, web3)
  }

  /**
   * Calls on the appropriate contracts to see if the bondage or broker is allowed to
   * spend the user's ZAP
   */
  const checkAllowance = async () => {
    try {
      const wallet = (await web3.eth.getAccounts())[0]
      const bondageAdd = getBondageAddress(chainId)
      const bondageAllowance = await zapToken.methods.allowance(wallet, bondageAdd).call()
      let brokerAllowance = '1'
      if (checkHasBroker()) {
        brokerAllowance = await zapToken.methods.allowance(wallet, brokerAddress).call()
      }
      let brokerToken = '1'
      if (token.isToken) {
        brokerToken = await erc20.methods.allowance(wallet, brokerAddress).call()
      }
      setAllowed({ bondage: bondageAllowance !== '0', broker: brokerAllowance !== '0', token: brokerToken !== '0' })
    } catch (e) {
      console.log('Issue getting allowance')
      console.error(e)
    }
  }

  const checkZapBalance = async () => {
    try {
      const wallet = (await web3.eth.getAccounts())[0]
      let bal = Web3.utils.fromWei(await zapToken.methods.balanceOf(wallet).call())
      bal = parseFloat(bal).toFixed(4)
      setZapBal(bal)
    } catch (e) {
      console.log("Issue connecting to Zap token and getting the user's Balance")
      console.error(e)
    }
  }

  /**
   * Calls the cost contract for the current cost to bond N dots/tokens
   *
   * @param dots entered value from field
   * @returns cost in ZAP to bond
   */
  const getMultiBondCost = async (dots: string): Promise<string> => {
    try {
      const start = Web3.utils.toBN(parseFloat(token.totalBound) + 1).toString()
      const nDots = Web3.utils.toBN(parseFloat(dots) - 1).toString()
      const cost = await currentCost.methods._costOfNDots(token.providerAddress, bytesName, start, nDots).call()
      return cost
    } catch (e) {
      console.log('Issue connecting to currentcost contract')
      console.error(e)
    }
    return ''
  }

  /**
   * Calls the cost contract for the current price to bond N dots/tokens
   *
   * @param dots entered value from field
   * @returns gain in ZAP from unbond
   */
  const getMultiUnbondGain = async (dots: string): Promise<string> => {
    try {
      const gain = await currentCost.methods
        ._costOfNDots(
          token.providerAddress,
          bytesName,
          parseFloat(token.totalBound) + 1 - parseFloat(dots),
          parseFloat(dots) - 1,
        )
        .call()
      return gain
    } catch (e) {
      console.log('Issue connecting to currentcost contract')
      console.error(e)
    }
    return ''
  }

  /**
   * Calculates the gain or cost depending on the action the user wants to take
   *
   * @param dots entered value from field
   * @returns gain/cost in ZAP
   */
  const getCost = async (dots: string): Promise<string> => {
    if (mode === action.BOND) {
      return Web3.utils.fromWei(await getMultiBondCost(dots))
    }
    return Web3.utils.fromWei(await getMultiUnbondGain(dots))
  }

  /**
   * Calculates the remaining number of non-bonded dots/tokens
   *
   * @returns maximum amount of dots/tokens the user can bond to
   */
  const getMaxDotsStillBondable = (): string => {
    const limit = Web3.utils.toBN(token.dotLimit)
    const totalBound = Web3.utils.toBN(token.totalBound)
    return limit.sub(totalBound).toString()
  }

  /**
   * Event handler to set what action the user wants to do
   *
   * @param newIndex index of the mode
   */
  const handleChangeMode = (newIndex: number) => {
    const actions = Object.values(action)
    const toSet = actions[newIndex]
    setMode(toSet)
  }

  /**
   * Event handler to change the mode to the other mode
   */
  const handleArrowChangeMode = () => {
    if (mode === action.BOND) {
      setMode(action.UNBOND)
    } else {
      setMode(action.BOND)
    }
  }

  /**
   * Event handler to set how the user wants to see the average cost/gain
   */
  const handleAvgChange = () => {
    setPerDot(!perDot)
  }

  /**
   * Event handler to set how many dots/tokens the user wants to bond/unbond
   *
   * @param value entered value from field
   * @param key field edited
   */
  const handleChangeVal = async (value: string, key: string) => {
    checkAllowance()
    const current = tsxVals[key]
    if (key === 'zap') {
      return
    }
    // Comment the following out if decimals are allowed
    if (value.charAt(value.length - 1) === '.') {
      return
    }
    let toSet = value
    if (current === '0' && value !== '0.') {
      toSet = toSet.replace('0', '')
    }
    // Unomment the following out if decimals are allowed
    // else if (value === '.') {
    //   toSet = '0.'
    // }
    const underLimit = mode === action.UNBOND ? true : checkWithinMktCap(toSet)
    const withinBonded = mode === action.BOND ? true : checkWithinUserBondedDots(toSet)
    const zero = Web3.utils.toBN(toSet).isZero()
    const validDots = underLimit && withinBonded && !zero
    let cost: string
    if (!validDots) {
      cost = tsxVals.zap
      if (!underLimit) {
        cost = await getCost(getMaxDotsStillBondable())
      } else if (!withinBonded) {
        const withinTotalBonded = checkWithinBondedDots(toSet)
        cost = withinTotalBonded ? await getCost(toSet) : await getCost(token.totalBound)
      }
    } else if (value === '' || value === '0') {
      cost = ''
    } else {
      cost = await getCost(toSet)
    }
    setVals({
      dots: toSet,
      zap: cost,
    })
    if (!validDots) {
      const msg = zero ? errorMsg.BLANK : !underLimit ? errorMsg.LIMIT : errorMsg.BALANCE
      setError({ zap: false, dots: true, msg })
    } else {
      setError({ zap: false, dots: false, msg: '' })
    }
  }

  /**
   * Event handler to close the confirmation modal
   */
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  /**
   * Event handler to open the confirmation modal
   */
  const handleOpenModal = () => {
    setOpenModal(true)
  }

  /**
   * Call the approve function so that the bondage contract or broker can spend the user's tokens
   */
  const callApprove = async () => {
    try {
      const wallet = (await web3.eth.getAccounts())[0]
      const defaultAmt = Web3.utils.toWei('1000000000', 'ether')
      let tsx
      if (!allowed.bondage) {
        const bondageAdd = getBondageAddress()
        tsx = zapToken.methods.approve(bondageAdd, defaultAmt).send({ from: wallet })
      } else if (!allowed.broker) {
        tsx = zapToken.methods.approve(token.brokerAddress, defaultAmt).send({ from: wallet })
      } else {
        tsx = erc20.methods.approve(token.brokerAddress, defaultAmt).send({ from: wallet })
      }
      tsx
        .on('transactionHash', (hash) => {
          setTsxHash(hash)
        })
        .on('error', (e) => {
          setTsxState(tsxStatus.ERROR)
          console.error('APPROVE ERROR', e)
        })
        .then((r) => {
          setTsxState(tsxStatus.CONFIRMED)
        })
        .catch((e) => {
          setTsxState(tsxStatus.ERROR)
          console.error('APPROVE ERROR', e)
        })
    } catch (e) {
      console.log('Issue with approving')
      console.error(e)
    }
  }

  /**
   * Call the bondage contract so that the use can bond to the specified amount
   */
  const callBond = async () => {
    try {
      const wallet = (await web3.eth.getAccounts())[0]
      const name = Web3.utils.fromAscii(token.name)
      let tsx
      if (!checkHasBroker()) {
        tsx = bondage.methods.bond(token.providerAddress, name, tsxVals.dots).send({ from: wallet })
      } else {
        tsx = tdf.methods.bond(name, tsxVals.dots).send({ from: wallet })
      }
      tsx
        .on('transactionHash', (hash) => {
          setTsxHash(hash)
        })
        .on('error', (e) => {
          setTsxState(tsxStatus.ERROR)
          console.error('BOND ERROR', e)
        })
        .then((r) => {
          setTsxState(tsxStatus.CONFIRMED)
        })
        .catch((e) => {
          setTsxState(tsxStatus.ERROR)
          console.error('BOND ERROR', e)
        })
    } catch (e) {
      console.log('Issue with bonding')
      console.error(e)
    }
  }

  /**
   * Call the bondage contract so that the use can unbond to the specified amount
   */
  const callUnbond = async () => {
    try {
      const wallet = (await web3.eth.getAccounts())[0]
      const name = Web3.utils.fromAscii(token.name)
      let tsx
      if (!checkHasBroker()) {
        tsx = bondage.methods.unbond(token.providerAddress, name, tsxVals.dots).send({ from: wallet })
      } else {
        tsx = tdf.methods.unbond(name, tsxVals.dots).send({ from: wallet })
      }
      tsx
        .on('transactionHash', (hash) => {
          setTsxHash(hash)
        })
        .on('error', (e) => {
          setTsxState(tsxStatus.ERROR)
          console.error('UNBOND ERROR', e)
        })
        .then((r) => {
          setTsxState(tsxStatus.CONFIRMED)
        })
        .catch((e) => {
          setTsxState(tsxStatus.ERROR)
          console.error('UNBOND ERROR', e)
        })
    } catch (e) {
      console.log('Issue with unbonding')
      console.error(e)
    }
  }

  /**
   * Calls the appropriate contract call be it approve, bond, or unbond
   */
  const callContract = () => {
    setTsxState(tsxStatus.SENT)
    if (checkNeedApprove()) {
      callApprove()
    } else if (mode === action.BOND) {
      callBond()
    } else {
      callUnbond()
    }
  }

  useEffect(() => {
    handleChangeVal(tsxVals.dots, 'dots')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode])

  useEffect(() => {
    checkAllowance()
    checkZapBalance()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    checkAllowance()
    checkZapBalance()
    if (refresh) {
      refresh()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tsxState])

  const bondError = checkNeedApprove() ? false : error.zap || error.dots

  /**
   * Depending on the state of the component, changes the text the button will show
   *
   * @returns the text for the button
   */
  const getBtnMsg = () => {
    if (tsxState === tsxStatus.STANDBY) {
      if (checkNeedApprove()) {
        if (!allowed.bondage) {
          return errorMsg.APPROVE
        }
        if (!allowed.broker) {
          return errorMsg.BROKER
        }
        return errorMsg.TOKEN + token.symbol
      }
      if (bondError) {
        return error.msg
      }
      return mode
    }
    return tsxState
  }

  const btnText = getBtnMsg()

  const zap = parseFloat(tsxVals.zap)
  const dots = parseFloat(tsxVals.dots)
  const avgCost = `${Number.isNaN(zap) || Number.isNaN(dots) ? '0.0' : (perDot ? zap / dots : dots / zap).toFixed(4)} ${
    perDot ? `ZAP/${token.symbol ? token.symbol : 'DOT'}` : `${token.symbol ? token.symbol : 'DOT'}/ZAP`
  }`

  const btnFunc = checkNeedApprove() ? callContract : handleOpenModal

  const toModalVal = mode === action.BOND ? `${tsxVals.dots} ${token.symbol}` : `${tsxVals.zap} ZAP`
  const fromModalVal = mode === action.UNBOND ? `${tsxVals.dots} ${token.symbol}` : `${tsxVals.zap} ZAP`

  useEffect(
    // eslint-disable-next-line
    () => {},
    [mode, tsxVals, perDot, tsxHash, tsxState],
  )

  useEffect(() => {
    if (!openModal && (tsxState === tsxStatus.CONFIRMED || tsxState === tsxStatus.ERROR)) {
      setTsxState(tsxStatus.STANDBY)
    }
  }, [tsxState, openModal])

  const disableBtn = bondError || tsxState !== tsxStatus.STANDBY

  return (
    <>
      <BUICard>
        <Flex justifyContent="space-between">
          <span>
            <Heading size="xl">{title}</Heading>
          </span>
          <span>
            <IconButton onClick={handleFlip} variant="text">
              <GiRapidshareArrow
                size={24}
                style={{
                  transform: `rotate(290deg)`,
                }}
              />
            </IconButton>
          </span>
        </Flex>
        <Center>
          <ButtonMenu activeIndex={mode === action.BOND ? 0 : 1} onItemClick={handleChangeMode} scale="sm">
            <ButtonMenuItem>Bond</ButtonMenuItem>
            <ButtonMenuItem>Unbond</ButtonMenuItem>
          </ButtonMenu>
        </Center>
        <CurrencyInputPanel
          label="From"
          value={tsxVals.zap}
          showMaxButton={false}
          currency={null}
          onUserInput={(s) => handleChangeVal(s, 'zap')}
          otherCurrency={null}
          id="swap-currency-input-from"
          presetTkn
          tknSymbol="ZAP"
          isWarning={error.zap}
          balance={zapBal}
        />
        <Center>
          <IconButton scale="sm" variant="primary" onClick={handleArrowChangeMode}>
            <AiOutlineArrowDown size={18} />
          </IconButton>
        </Center>
        <CurrencyInputPanel
          label="To"
          value={tsxVals.dots}
          showMaxButton={false}
          currency={null}
          onUserInput={(s) => handleChangeVal(s, 'dots')}
          otherCurrency={null}
          id="swap-currency-input-to"
          presetTkn
          tknSymbol={token.symbol}
          isWarning={error.dots}
          balance={token.userBound}
        />
        <Text textAlign="right">
          {avgCost}
          <IconButton scale="sm" variant="text" onClick={handleAvgChange}>
            <AiOutlineSwap size={14} />
          </IconButton>
        </Text>
        <Button disabled={disableBtn} onClick={btnFunc} variant={disableBtn ? 'subtle' : 'buttongum'}>
          {btnText}
        </Button>
      </BUICard>
      {openModal && (
        <ModalWrapper>
          <Overlay show onClick={handleCloseModal} />
          <ConfirmDialog
            to={toModalVal}
            from={fromModalVal}
            average={avgCost}
            tsxHash={tsxHash}
            tsxState={tsxState}
            handleSendTsx={callContract}
            handleAverageChange={handleAvgChange}
            handleClose={handleCloseModal}
            chainId={chainId}
          />
        </ModalWrapper>
      )}
    </>
  )
}

export default BondUICard
