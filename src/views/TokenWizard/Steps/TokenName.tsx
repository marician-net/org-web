import React, { useContext } from 'react'
import { Card, CardBody, Heading, CheckmarkIcon, ErrorIcon, Dropdown } from 'toolkitUI'
import styled from 'styled-components'
import Checkbox from 'toolkitUI/components/Checkbox/Checkbox'
import NextStepButton from '../components/NextStepButton'
import { tokenName } from '../constants/constants'
import { TokenWizardContext } from '../contexts/TokenWizardProvider'

const StyledCard = styled(Card)`
  padding: 0px;
  margin-bottom: 40px;
`

const StyledCardBody = styled(CardBody)`
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 45px;
  padding-bottom: 30px;
`

const ButtonsCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const Title = styled(Heading)`
  font-size: 40px;
  margin-bottom: 24px;
`
const SubText = styled(Heading)`
  font-size: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 24px;
    margin-left: 32px;
    line-height: normal;
  }
`
const CheckText = styled(Heading)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bolder;
  margin-left: 12px;
  padding: 5px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
  }
`

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 48px;
  ${Checkbox} {
    width: 32px;
    margin-right: 10px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 24px;
  }
`

const Box = styled.div`
  width: 32px;
  height: 32px;
`

const InputWrapper = styled.div<{ error?: boolean; success?: boolean }>`
  display: flex;
  padding: 10px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.input};
  border: ${({ error, success }) => (error ? '3px' : success ? '3px' : '1px')} solid
    ${({ error, theme, success }) =>
      error ? theme.colors.failure : success ? theme.colors.success : theme.colors.textDisabled};
  margin-bottom: 48px;
  width: 100%;
  padding-left: 24px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 50%;
    margin-left: 24px;
  }
`

const Input = styled.input<{ error?: boolean; success?: boolean }>`
  font-size: 1.25rem;
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  background-color: transparent;
  transition: color 300ms 'step-start';
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  width: 100%;
  ::placeholder {
    color: ${({ theme }) => theme.colors.textDisabled};
  }
  padding: 0px;
  -webkit-appearance: textfield;
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.textDisabled};
  }
`

const Next = styled(NextStepButton)`
  background: ${({ disabled, theme }) => (disabled ? null : theme.colors.gradients.buttongum)};
`
const DDWrap = styled(InputWrapper)`
  & div div {
    width: 200px;
  }
`

const DropButton = styled.button`
  width: 100%;
  font-size: 20px;
  text-align: left;
  &:hover,
  :focus {
    text-decoration: underline;
    cursor: pointer;
  }
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.nav.background};
  border: none;
`

const TokenName: React.FC = () => {
  const context = useContext(TokenWizardContext)
  const dropRef = React.useRef()
  const ddInfo = [
    { title: 'Tadhana', address: '0x9d24FF767a74B1Cccc47F2395eC419500453F23247' },
    { title: 'Tadhana', address: '0x9d23FF767a74B1Ceee47F2395eC562135ce45d4758' },
    { title: 'Tadhana', address: '0x9d25FF767a74B1Cece47edc4585452FF000450045d' },
  ]
  // const ddInfo = [
  // ]

  const check = (value: string) => (e) => {
    const { checked } = e.target
    context.tokenWizardActions.handleCheckBox(value, checked)
  }

  const changed = (key: string, value: string) => (e) => {
    const newVal = e.target.value.trim()
    const empty = newVal.length <= 0
    context.tokenWizardActions.handleChange(key, value, empty, newVal)
  }

  const deployedContract = () => (e) => {
    // @ts-ignore: Object is possibly 'null'
    dropRef.current.value = e.target.value
    if (e.target.value === 'New Contract') {
      context.tokenWizardActions.setValue('contractStep', 0)
      context.tokenWizardActions.setValue('previousContract', '')
    } else {
      context.tokenWizardActions.setValue('contractStep', 1)
      context.tokenWizardActions.setValue('previousContract', e.target.value)
    }
  }

  return (
    <>
      <StyledCard>
        <StyledCardBody>
          <Title as="h3" mb="24px" color="primaryDark">
            {tokenName[0]}
          </Title>
          <SubText as="h4" mb="24px" color="text">
            {tokenName[1]}
          </SubText>
          <InputWrapper
            error={!context.tokenNameEmpty && !context.uniqueName}
            success={!context.tokenNameEmpty && context.uniqueName}
          >
            <Input
              onChange={changed('tokenName', 'tokenNameEmpty')}
              error={!context.tokenNameEmpty && !context.uniqueName}
              success={!context.tokenNameEmpty && context.uniqueName}
              type="text"
              maxLength={32}
              defaultValue={context.tokenName}
              placeholder="Token Name *"
            />
            {!context.tokenNameEmpty && context.uniqueName ? <CheckmarkIcon color="success" /> : null}
            {!context.tokenNameEmpty && !context.uniqueName ? <ErrorIcon color="failure" /> : null}
          </InputWrapper>

          <Title as="h3" mb="24px" color="primaryDark">
            {tokenName[2]}
          </Title>
          <SubText as="h4" mb="24px" color="text">
            {tokenName[3]}
          </SubText>
          <InputWrapper
            error={!context.tokenSymbolEmpty && !context.uniqueSymbol}
            success={!context.tokenSymbolEmpty && context.uniqueSymbol}
          >
            <Input
              onChange={changed('tokenSymbol', 'tokenSymbolEmpty')}
              error={!context.tokenSymbolEmpty && !context.uniqueSymbol}
              success={!context.tokenSymbolEmpty && context.uniqueSymbol}
              type="text"
              maxLength={6}
              style={{ textTransform: 'uppercase' }}
              defaultValue={context.tokenSymbol}
              placeholder="Token Symbol *"
            />
            {!context.tokenSymbolEmpty && context.uniqueSymbol ? <CheckmarkIcon color="success" /> : null}
            {!context.tokenSymbolEmpty && !context.uniqueSymbol ? <ErrorIcon color="failure" /> : null}
          </InputWrapper>

          <CheckWrapper>
            <Box>
              <Checkbox onClick={check('noChange')} defaultChecked={context.noChange} />
            </Box>
            <CheckText as="h3" color="primaryDark">
              {tokenName[4]}
            </CheckText>
          </CheckWrapper>
          <Title as="h3" mb="24px" color="primaryDark">
            {tokenName[5]}
          </Title>
          <SubText as="h4" mb="24px" color="text">
            {tokenName[6]}
          </SubText>
          <DDWrap>
            <Dropdown
              position="top"
              target={
                <Input
                  ref={dropRef}
                  type="text"
                  readOnly
                  value={context.previousContract.length > 0 ? context.previousContract : ''}
                  placeholder={ddInfo.length === 0 ? 'No Contracts Deployed' : 'Choose a Contract'}
                  disabled
                />
              }
            >
              <DropButton onClick={deployedContract()} value="New Contract" key="newContract" type="button">
                New Contract
              </DropButton>
              {ddInfo.map((item) => {
                const sliced = item.address.slice(item.address.length - 6, item.address.length - 1)
                return (
                  <DropButton onClick={deployedContract()} value={item.address} key={item.address} type="button">
                    {`${item.title} ...${sliced}`}
                  </DropButton>
                )
              })}
            </Dropdown>
            {/* {context.previousContract.length === 0 ? <ChevronUpIcon color = "grey" /> : null } */}
          </DDWrap>
        </StyledCardBody>
      </StyledCard>
      <ButtonsCont>
        <Next
          disabled={context.tokenNameEmpty || context.tokenSymbolEmpty || !context.noChange}
          onClick={() => context.tokenWizardActions.handleNext()}
        >
          Next Step
        </Next>
      </ButtonsCont>
    </>
  )
}

export default TokenName
