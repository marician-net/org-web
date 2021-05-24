import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { useHarvest } from 'hooks/useHarvest'
import { getBalanceNumber } from 'utils/formatBalance'
import { useWeb3React } from '@web3-react/core'
import { Button, Flex, Heading } from 'toolkitUI'

interface FarmCardActionsProps {
  isConnected?: boolean
}

const CardAction: React.FC<FarmCardActionsProps> = ({ isConnected }) => {
  const { account } = useWeb3React()
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  // const { onReward } = useHarvest(pid)

  // const rawEarningsBalance = account ? getBalanceNumber(earnings): 0 //
  // const displayBalance = rawEarningsBalance.toLocaleString()

  return (
    <Flex mt="8px" justifyContent="space-between" alignItems="center">
      {isConnected ?
      <Button
        width= "100%"
        onClick={() => {
          console.log('Purchase')
        }}
      >
        {TranslateString(562, 'Purchase')}
      </Button> :
      <Button
        variant="bubblegum"
        width= "100%"
        onClick={() => {
          console.log('openWalletModal')
        }}
      >
        {TranslateString(562, 'Unlock Wallet')}
      </Button>}
    </Flex>
  )
}

export default CardAction
