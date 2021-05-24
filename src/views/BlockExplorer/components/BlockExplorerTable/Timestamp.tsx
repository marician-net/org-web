import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import { HelpIcon } from 'toolkitUI'

export interface TimestampProps {
  timestamp: string
}

const TimestampWrapper = styled.div`
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

const Timestamp: React.FunctionComponent<TimestampProps> = ({ timestamp }) => {
  const displayTimestamp = timestamp ? timestamp.toLowerCase() : '-'
  const TranslateString = useI18n()

  return (
    <Container>
      <TimestampWrapper>{displayTimestamp}</TimestampWrapper>
      {/* <Tooltip
        content={
          <div>
            {TranslateString(999, 'The date and time at which a transaction is mined ')}
          </div>
        }
      >
        <HelpIcon color="textSubtle" />
      </Tooltip> */}
    </Container>
  )
}

export default Timestamp
