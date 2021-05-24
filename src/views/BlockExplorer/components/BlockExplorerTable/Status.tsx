import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import { HelpIcon } from 'toolkitUI'

export interface StatusProps {
  status: string
}

const StatusWrapper = styled.div`
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

const Status: React.FunctionComponent<StatusProps> = ({ status }) => {
  const displayStatus = status ? abbreviateAddress(status.toLowerCase()) : '-'
  const TranslateString = useI18n()

  function abbreviateAddress(address = "", lengthStart = 6, lengthEnd = 4) {
   return `${status}`;
}

  return (
    <Container>
      <StatusWrapper>{displayStatus}</StatusWrapper>
      {/* <Tooltip
        content={
          <div>
            {TranslateString(999, 'A unique identifier that is generated whenever a transaction is performed')}
            <br />
            <br />
            {TranslateString(
              999,
              'For example, if a 1x farm was getting 1 CAKE per block, a 40x farm would be getting 40 CAKE per block.',
            )}
          </div>
        }
      >
        <HelpIcon color="textSubtle" />
      </Tooltip> */}
    </Container>
  )
}

export default Status
