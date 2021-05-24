import React, {useContext} from 'react'
import styled from 'styled-components'
import { Breadcrumbs, Heading, Text, Button as UIButton} from 'toolkitUI'
import useI18n from 'hooks/useI18n'
import {TokenWizardContext} from './contexts/TokenWizardProvider'

const Wrapper = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 40px;
  padding-bottom: 40px;
`

const Button = styled(UIButton)`
  background: none;
  border: none;
  box-shadow: none;
  & :hover{
    text-decoration: underline;
  };
  & ${Text} {
    font-size: 20px;
  };

`

const steps = [
  { translationId: 776, label: 'Token Name' },
  { translationId: 778, label: 'Curve Creation' },
  { translationId: 780, label: 'Confirm Token' },
  { translationId: 782, label: 'List Token' },
]

const Header: React.FC = () => {
  const TranslateString = useI18n()
  const context = useContext(TokenWizardContext)

  return (
    <Wrapper>
      <Heading as="h1" size="xxl" color="primary" mb="8px" style={{textAlign: 'center', fontSize: 60}}>
        {TranslateString(770, 'Create a New Token')}
      </Heading>
      <Breadcrumbs>
        {steps.map(({ translationId, label }, index) => {
          return (
            <Button onClick={()=>index + 1 <= context.totalSteps ?context.tokenWizardActions.jumpStep(index + 1): false}>
              <Text key={label} color={index + 1 <= context.totalSteps ? 'text' : 'textDisabled'} >
                {TranslateString(translationId, label)}
              </Text>
            </Button>
          )
        })}
      </Breadcrumbs>
    </Wrapper>
  )
}

export default Header