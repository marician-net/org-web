import React, { useContext } from 'react'
import { Card, CardBody, Heading } from 'toolkitUI'
import styled from 'styled-components'
import ProviderCurveWizard from 'components/ProviderCurveWizard/ProviderCurveEditable'
import NextStepButton from '../components/NextStepButton'
import PrevStepButton from '../components/PrevStepButton'
import {curveCreation} from '../constants/constants'
import {TokenWizardContext} from '../contexts/TokenWizardProvider'
import {useDebouncedEffect} from '../hooks/debounceEffect'

const ButtonsCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

`

const SupplyInput = styled.input<{ error?: boolean }>`
  font-size: 1.25rem;
  outline: none;
  border: 1px solid ${({theme}) => theme.colors.text};
  border-radius: 20px;
  margin-left: 16px;
  text-align: center;
  width: 95%;
  ${({ theme }) => theme.mediaQueries.sm}{
    width: 25%;
  };
  background-color: ${({ theme }) => theme.colors.input};
  transition: color 300ms ${({ error }) => (error ? 'step-end' : 'step-start')};
  color: ${({ error, theme }) => (error ? theme.colors.failure : theme.colors.text)};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  ::placeholder {
    color: ${({ theme }) => theme.colors.textDisabled};
  }
  padding: 10px;
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
    background: ${({disabled, theme})=>disabled?null:theme.colors.gradients.buttongum}
`
const Prev = styled(PrevStepButton)`
    background: ${({disabled, theme})=>disabled?null:theme.colors.gradients.bubbleYum}
`

const SubHeading = styled(Heading)`
  margin-bottom: 24px;
  font-size: 16px;
  ${({ theme }) => theme.mediaQueries.sm}{
    font-size: 20px;
  }
`

const MainInfo = styled(Heading)`
  margin-bottom: 24px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.sm}{
    font-size: 24px;
    flex-direction: row;
  }
`


const CurveCreation: React.FC = () => {
    const {maxSupply, curveEmpty, maxSupplyEmpty, tokenWizardActions, xAxis, yAxis} = useContext(TokenWizardContext)
    const [refresh, setRefresh]=React.useState(false)
    const [count, setCount]=React.useState(0)
    //  const dotMaxSupply = 10000;
  
    const refreshed = () => {
      if(count >= 1){
        setRefresh(true);
        // setCount(count + 1)
        // console.log("refreshing")
        setRefresh(false)
      }
        else{
          setCount(count + 1)
        }
  
    }

    useDebouncedEffect(()=>refreshed(), 2000, [xAxis, yAxis, maxSupply]);

    const changed = (key: string, value: string) => (e) => {
      const newVal = e.target.value.trim();
      const empty = newVal.length <= 0;
      tokenWizardActions.handleChange(key, value, empty, newVal)
  }

    return (
        <>
            <Card mb="24px">
                <CardBody>
                <SubHeading as="h3" size="xl" mb="48px" color="primaryDark">
                    {curveCreation[0]}
                </SubHeading>
                <SubHeading as="h4" color="contrast">
                    {curveCreation[1]}
                </SubHeading>
                <SubHeading as="h4" color="contrast">
                    {curveCreation[2]}
                </SubHeading>
                {refresh ? null : 
                  <ProviderCurveWizard />
                }
                <MainInfo as="h4" color="primaryDark">
                    {curveCreation[3]}
                    <SupplyInput onChange = {changed("maxSupply", "maxSupplyEmpty")} type = "number" value = {maxSupply} placeholder="Max Supply"/>
                </MainInfo>
                </CardBody>
            </Card>
            <ButtonsCont>
                <Prev onClick={()=>tokenWizardActions.handlePrev()} mr="30px">Prev Step</Prev>
                <Next disabled = {curveEmpty || maxSupplyEmpty} onClick={()=>tokenWizardActions.handleNext()}>Next Step</Next>
            </ButtonsCont>
        </>
    )
}

export default CurveCreation