import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import { LinkExternal, LinkExternalCustom, Text } from 'toolkitUI'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { communityFarms } from 'config/constants'
import { CommunityTag, CoreTag, DualTag } from 'components/Tags'
import { Transaction } from '../../../../../state/types'
import TxHash, { TxHashProps } from '../TxHash'
import Timestamp, { TimestampProps } from '../Timestamp'
import Block, { BlockProps } from '../Block'
import { ActionContainer, ActionTitles, ActionContent, Earned, Title, Subtle } from './styles'

export interface ActionPanelProps {
  txHash: TxHashProps
  timestamp: TimestampProps
  block: BlockProps
  details: Transaction
  farm
  status
}

const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  padding: 24px;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    padding: 16px 32px;
  }
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const StyledLinkExternalCustom = styled(LinkExternalCustom)`
  font-weight: 400;
`

const StakeContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
  }
`

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 16px;
  }

  > div {
    height: 24px;
    padding: 0 6px;
    font-size: 14px;
    margin-right: 4px;

    svg {
      width: 14px;
    }
  }
`

// const ActionContainer = styled.div`
//   display: flex;
//   flex-direction: column;

//   ${({ theme }) => theme.mediaQueries.sm} {
//     flex-direction: row;
//     align-items: center;
//     flex-grow: 1;
//     flex-basis: 0;
//   }
// `

const InfoContainer = styled.div`
  min-width: 200px;
  align-items: center;
  justify-content: center;
  display: flex;
`

const ValueContainer = styled.div`
  display: block;

  // ${({ theme }) => theme.mediaQueries.lg} {
  //   display: none;
  // }
`

const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0px;
`

const ActionPanel: React.FunctionComponent<ActionPanelProps> = ({ details, txHash, timestamp, block }) => {
  const transaction = details
  const TranslateString = useI18n()
  // const isActive = transaction.timestamp !== '0X'
  // const { quoteToken, token, dual } = transaction
  // const lpLabel = transaction.lpSymbol && transaction.lpSymbol.toUpperCase().replace('PANCAKE', '')
  // const liquidityUrlPathParts = getLiquidityUrlPathParts({
  //   quoteTokenAddress: quoteToken.address,
  //   tokenAddress: token.address,
  // })
  // const lpAddress = transaction.lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const esc = `https://etherscan.io/tx/${txHash.txHash}`
  // const info = `https://pancakeswap.info/pair/${lpAddress}`
  const escBlock = `https://etherscan.io/block/${block.block}`
  // const isCommunityFarm = communityFarms.includes(token.symbol)
  const escFrom = `https://etherscan.io/tx/${transaction.from.toLowerCase()}`

  const escTo = `https://etherscan.io/tx/${transaction.to.toLowerCase()}`

  
  function abbreviateAddress(address = "", lengthStart = 6, lengthEnd = 4) {
    return `${address.substring(0, lengthStart)}...${address.substring(
      address.length - lengthEnd,
      address.length
    )}`;
  }

  return (
    <Container>
      <InfoContainer>
        {/* {isActive && (
          <StakeContainer>
            <StyledLinkExternal href={`https://exchange.pancakeswap.finance/#/add/${liquidityUrlPathParts}`}>
              {TranslateString(999, `Get ${lpLabel}`)}
            </StyledLinkExternal>
          </StakeContainer>
        )} */}
        <ValueContainer>
          <StyledLinkExternal href={esc}>{TranslateString(999, 'View Transaction Hash')}</StyledLinkExternal>
          <StyledLinkExternal href={escBlock}>{TranslateString(999, 'View Block')}</StyledLinkExternal>
        </ValueContainer>
        {/* <TagsContainer>
          {isCommunityFarm ? <CommunityTag /> : <CoreTag />}
          {dual ? <DualTag /> : null}
        </TagsContainer> */}
      </InfoContainer>
      {/* <ValueContainer>
        <ValueWrapper>
          <Text>{TranslateString(736, 'Tx Hash')}</Text>
          <TxHash {...txHash} />
        </ValueWrapper>
        <ValueWrapper>
          <Text>{TranslateString(999, 'Timestamp')}</Text>
          <Timestamp {...timestamp} />
        </ValueWrapper>
        <ValueWrapper>
          <Text>{TranslateString(999, 'Block')}</Text>
          <Block {...block} />
        </ValueWrapper>
      </ValueContainer> */}
      <ActionContainer>
        {/* <HarvestAction {...transaction} />
        <StakedAction {...transaction} /> */}
        <ActionTitles>
          <Subtle>{TranslateString(999, 'From:')}</Subtle>
          <StyledLinkExternalCustom href={escFrom}>{abbreviateAddress(transaction.from.toLowerCase())}</StyledLinkExternalCustom>
          <Subtle>{TranslateString(999, 'Transaction Fee:')}</Subtle>
          <Text>{`${transaction.transactionFee} ether`}</Text>
          <Subtle>{TranslateString(999, 'Token Transfer:')}</Subtle>
          <Text>{`${transaction.tokenTransfer} ZAP`}</Text>
        </ActionTitles>
        <ActionTitles>
          <Subtle>{TranslateString(999, 'To:')}</Subtle>
          <StyledLinkExternalCustom href={escTo}>{abbreviateAddress(transaction.to.toLowerCase())}</StyledLinkExternalCustom>
          <Subtle>{TranslateString(999, 'Gas Info:')}</Subtle>
          <Text>{transaction.gasInfo}</Text>
        </ActionTitles>
        <ActionContent>
          {/* <UnlockButton width="100%" /> */}
        </ActionContent>
      </ActionContainer>
    </Container>
  )
}

export default ActionPanel
