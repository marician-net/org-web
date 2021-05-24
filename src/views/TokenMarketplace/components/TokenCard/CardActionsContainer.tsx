import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { provider as ProviderType } from 'web3-core'
import { getAddress } from 'utils/addressHelpers'
import { getBep20Contract } from 'utils/contractHelpers'
import { Button, Flex, Text, Heading } from 'toolkitUI'
import { Farm, RaiseToken } from 'state/types'
import { useFarmFromSymbol, useFarmUser } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import useWeb3 from 'hooks/useWeb3'
import { useApprove } from 'hooks/useApprove'
import UnlockButton from 'components/UnlockButton'
import { getBalanceNumber } from 'utils/formatBalance'
import StakeAction from './StakeAction'
import BondAction from './BondAction'

const Action = styled.div`
  padding-top: 16px;
`
export interface RaiseTokenBonded extends RaiseToken {
  owned?: number
}

interface TokenCardActionsProps {
  //  farm?: FarmWithStakedValue
  token?: RaiseTokenBonded
  provider?: ProviderType
  account?: string
  addLiquidityUrl?: string
}

const CardActions: React.FC<TokenCardActionsProps> = ({token, account, addLiquidityUrl }) => {
  const TranslateString = useI18n()
  const [requestedApproval, setRequestedApproval] = useState(false)
  /* const { pid, lpAddresses } = useFarmFromSymbol(farm.lpSymbol)
  const { allowance, tokenBalance, stakedBalance, earnings } = useFarmUser(pid)
  const lpAddress = getAddress(lpAddresses)
  const lpName = farm.lpSymbol.toUpperCase() */
  const isApproved = false /* account && allowance && allowance.isGreaterThan(0) */
  const web3 = useWeb3()

  // const lpContract = getBep20Contract(lpAddress, web3)

  // const { onApprove } = useApprove(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      /* await onApprove() */
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [/* onApprove */])

  // const rawEarningsBalance = account ? getBalanceNumber() : 0 //
  // const displayBalance = rawEarningsBalance.toLocaleString()

  /* const renderApprovalOrStakeButton = () => {
    return isApproved ? (
      <StakeAction
        stakedBalance={stakedBalance}
        tokenBalance={tokenBalance}
        tokenName={lpName}
        pid={pid}
        addLiquidityUrl={addLiquidityUrl}
      />
    ) : (
      <Button mt="8px" width="100%" disabled={requestedApproval} onClick={handleApprove}>
        {TranslateString(758, 'Approve Contract')}
      </Button>
    )
  } */

  return (
    <Action>
      <Flex>
        <Text textTransform="uppercase" color="primary" fontSize="15px" pr="3px">
          {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
          Spot
        </Text>
        <Text textTransform="uppercase" color="primaryDark" fontSize="15px">
          {TranslateString(318, 'Price')}
        </Text>
      </Flex>
      <Flex justifyContent="flex-end" alignItems="flex-start">
        <Text bold color="primaryDark" fontSize="24px">{token.price} ZAP</Text>
      </Flex>
      <Flex>
        <Text textTransform="uppercase" color="primary" fontSize="15px" pr="3px">
          {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
          Bonded
        </Text>
        <Text textTransform="uppercase" color="primaryDark" fontSize="15px">
          {TranslateString(1072, 'Supply')}
        </Text>
      </Flex>
      <Flex justifyContent="flex-end" alignItems="flex-start">
        <Text bold color="primaryDark" fontSize="24px">{token.bondedSupply} {token.symbol}</Text>
      </Flex>
      <Flex>
        <Text textTransform="uppercase" color="primary" fontSize="15px" pr="3px">
          {token.symbol}
        </Text>
        <Text textTransform="uppercase" color="primaryDark" fontSize="15px">
          {TranslateString(1074, 'Owned')}
        </Text>
      </Flex>
      <Flex justifyContent="flex-end" alignItems="flex-start">
        <Text bold color="primaryDark" fontSize="24px">{token.owned ? token.owned: '0'} {token.symbol}</Text>
      </Flex>
      {/* {!account ? <UnlockButton mt="8px" width="100%" /> : renderApprovalOrStakeButton()} */}
    </Action>
  )
}

export default CardActions
