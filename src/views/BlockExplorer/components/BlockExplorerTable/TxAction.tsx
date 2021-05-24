import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import { HelpIcon, Text, ArrowDownIcon, ArrowUpIcon, ArrowForwardIcon, useMatchBreakpoints } from 'toolkitUI'

export interface TxActionProps {
  txAction: string
}

const TxActionWrapper = styled.div`
  // min-width: 110px;
  width: auto;
  min-width: 100px;
  font-weight: 600;
  text-align: right;
  display: flex;
  text-transform: capitalize;

  ${({ theme }) => theme.mediaQueries.xs} {
    text-align: center;
    display: block;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    text-align: center;
    display: flex;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 14px;
    margin-right: 14px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    svg {
      margin-left: 7px;
      margin-right: 7px;
    }
  }
`

const TxAction: React.FunctionComponent<TxActionProps> = ({ txAction }) => {
  // let displayTxAction = txAction
  //   ? `${txAction}`
  //   : '-'
  const splitTxAction = txAction.split("to") || ["",""]
  const TranslateString = useI18n()
  const { isXl, isSm, isXs } = useMatchBreakpoints()
  const isMobile = isSm || isXs
  if (isMobile) {
    splitTxAction[0] = splitTxAction[0].slice(5)
    splitTxAction[1] = splitTxAction[1].slice(5)
  } 
  return (
    <Container>
      <TxActionWrapper>
        <Text>{splitTxAction[0]}</Text>
        {!isMobile ? <ArrowForwardIcon color="primary" width="16px" />
        : <ArrowDownIcon color="primary" width="16px" />}
        <Text>{splitTxAction[1]}</Text>
      </TxActionWrapper>
      {/* <Tooltip content={TranslateString(999, 'Summary of the transaction')}>
        <HelpIcon color="textSubtle" />
      </Tooltip> */}
    </Container>
  )
}

export default TxAction
