import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import { LinkExternalCustom } from 'toolkitUI'

export interface TxHashProps {
  txHash: string
}

const TxHashWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
  width: auto;
  text-align: right;

  ${({ theme }) => theme.mediaQueries.sm} {
    text-align: left;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 14px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    svg {
      margin-left: 7px;
    }
  }
`

const StyledLinkExternal = styled(LinkExternalCustom)`
  font-weight: 400;
`

const TxHash: React.FunctionComponent<TxHashProps> = ({ txHash }) => {
  const displayTxHash = txHash ? abbreviateAddress(txHash.toLowerCase()) : '-'
  const TranslateString = useI18n()
  const esc = `https://etherscan.io/tx/${txHash}`

  function abbreviateAddress(address = "", lengthStart = 6, lengthEnd = 4) {
   return `${address.substring(0, lengthStart)}...${address.substring(
      address.length - lengthEnd,
      address.length
   )}`;
}

  return (
    <Container>
      {/* <TxHashWrapper>{displayTxHash}</TxHashWrapper> */}
      <StyledLinkExternal href={esc}>{displayTxHash}</StyledLinkExternal>
      {/* <Tooltip
        content={
          <div>
            {TranslateString(999, 'A unique identifier that is generated whenever a transaction is performed')}
          </div>
        }
      >
        <HelpIcon color="textSubtle" />
      </Tooltip> */}
    </Container>
  )
}

export default TxHash
