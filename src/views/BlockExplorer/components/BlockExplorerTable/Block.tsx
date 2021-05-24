import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import { HelpIcon, Text, LinkExternalCustom } from 'toolkitUI'

export interface BlockProps {
  block: number
}

const BlockWrapper = styled.div`
  // min-width: 110px;
  width: auto;
  font-weight: 600;
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

const Block: React.FunctionComponent<BlockProps> = ({ block }) => {
  const displayBlock = block
    ? `${Number(block)}`
    : '-'
  const TranslateString = useI18n()
  const escBlock = `https://etherscan.io/block/${block}`

  return (
    <Container>
      <BlockWrapper>
        {/* <Text>{displayBlock}</Text> */}
        <StyledLinkExternal href={escBlock}>{displayBlock}</StyledLinkExternal>
      </BlockWrapper>
      {/* <Tooltip content={TranslateString(999, 'batches of transactions with a hash of the previous block in the chain')}>
        <HelpIcon color="textSubtle" />
      </Tooltip> */}
    </Container>
  )
}

export default Block
