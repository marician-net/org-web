import React, { useContext } from 'react'
import styled from 'styled-components'
import { Heading, Text } from 'toolkitUI'
import useI18n from 'hooks/useI18n'

const Wrapper = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 24px;
  padding-bottom: 24px;
`

const steps = [
  { translationId: 776, label: 'Get Starter Collectible' },
  { translationId: 778, label: 'Set Profile Picture' },
  { translationId: 780, label: 'Join Team' },
  { translationId: 782, label: 'Set Name' },
]

const Header: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Wrapper>
      <Heading as="h1" size="xxl" color="primary" mb="8px" style={{textAlign: 'center'}}>
        {TranslateString(770, 'Provider Registration')}
      </Heading>
    </Wrapper>
  )
}

export default Header