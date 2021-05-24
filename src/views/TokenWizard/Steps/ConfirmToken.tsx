import React, {useContext} from 'react'
import { Card, CardBody, Heading } from 'toolkitUI'
import Checkbox from 'toolkitUI/components/Checkbox/Checkbox'
import styled from 'styled-components'
import ProviderCurveThumbnail from 'components/ProviderCurveWizard/ProviderCurveThumbnail'
import {TokenWizardContext} from '../contexts/TokenWizardProvider'
import NextStepButton from '../components/NextStepButton'
import PrevStepButton from '../components/PrevStepButton'
import {confirmToken} from '../constants/constants'

const ButtonsCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

`
const InfoCont = styled.div`
  display: flex;
  flex-direction: row;
  ${({ theme }) => theme.mediaQueries.sm}{
    margin-left: 25px;
}

`

const MainInfo = styled(Heading)`
    margin-bottom: 24px;
    font-size: 16px;
    ${({ theme }) => theme.mediaQueries.sm} {
        font-size: 24px;
      }
`

const SubInfo = styled(Heading)`
    margin-bottom: 24px;
    font-size: 16px;
    ${({ theme }) => theme.mediaQueries.sm} {
        font-size: 20px;
    }

`

const Wrapper = styled(InfoCont)`
    flex-direction: column;
    justify-content: space-between;
    ${({ theme }) => theme.mediaQueries.sm}{
        margin: 15px 20%;
        flex-direction: row;
    }
    
`

const CheckWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    ${Checkbox} {
        width: 32px;
        margin-right: 10px;
    }
    ${SubInfo} {
        margin-bottom: 0px;
        width: 168px;
        text-align: center;
        ${({ theme }) => theme.mediaQueries.sm}{
            width: auto;
        }

    }
`

const Next = styled(NextStepButton)`
    background: ${({disabled, theme})=>disabled?null:theme.colors.gradients.buttongum}
`
const Prev = styled(PrevStepButton)`
    background: ${({disabled, theme})=>disabled?null:theme.colors.gradients.bubbleYum}
`

const ConfirmToken: React.FC = () => {
    const context = useContext(TokenWizardContext)
    const thumbnailParams = {
        key: context.tokenName,
        existingCoefficientArray: context.coeffArray,
        editable: false,
        bonded: false,
        bonding: false,
        axesOptions: {
           xAxisTicks: 3,
           yAxisTicks: 3,
           showLabels: true,
           tickSize: 1,
        },
        zoomFit: 1,
        tokenSymbol: context.tokenSymbol
     };

     const check = (value: string) => (e) => {
        const {checked} = e.target
        context.tokenWizardActions.handleCheckBox(value, checked)
    }

    return (
        <>
            <Card mb="24px">
                <CardBody>
                    <Heading as="h3" size="xl" mb="24px" color="primaryDark">
                        Confirm Your Listing
                    </Heading>
                    <InfoCont>
                        <MainInfo as="h4" color="primaryDark" style={{marginRight: "15px"}}>
                            {confirmToken[0]}
                        </MainInfo>
                        <MainInfo as="h4" color="primary">
                            {context.tokenName}
                        </MainInfo>
                    </InfoCont>
                    <InfoCont>
                        <MainInfo as="h4" color="primaryDark" style={{marginRight: "15px"}}>
                            {confirmToken[1]}
                        </MainInfo>
                        <MainInfo as="h4" color="primary">
                            {context.tokenSymbol}
                        </MainInfo>
                    </InfoCont>
                    <InfoCont>
                        <MainInfo as="h4" color="primaryDark" style={{marginRight: "15px"}}>
                            {confirmToken[2]}
                        </MainInfo>
                        <MainInfo as="h4" color="primary">
                            {context.previousContract.length === 0 ? "New Contract" : context.previousContract}
                        </MainInfo>
                    </InfoCont>
                    <ProviderCurveThumbnail thumbnailParams={thumbnailParams}/>
                    <Wrapper>
                        <InfoCont>
                            <SubInfo as="h4" size="md" mb="24px" color="primaryDark" style ={{marginRight: "15px"}}>
                                {confirmToken[3]}
                            </SubInfo>
                            <SubInfo as="h4" size="md" mb="24px" color="primary">
                                {context.curveFormula}
                            </SubInfo>
                        </InfoCont>
                        <InfoCont>
                            <SubInfo as="h4" size="md" mb="24px" color="primaryDark" style ={{marginRight: "15px"}}>
                                {confirmToken[4]}
                            </SubInfo>
                            <SubInfo as="h4" size="md" mb="24px" color="primary">
                                {context.maxSupply}
                            </SubInfo>
                        </InfoCont>  
                    </Wrapper>
                    <CheckWrapper>
                        <Checkbox onClick={check("noEdit")} style={{marginRight: "15px"}} checked={context.noEdit}/>
                        <SubInfo as="h4" size="md"  color="primaryDark" style={{display: "flex", alignItems:"center"}}>
                                {confirmToken[5]}
                        </SubInfo>
                    </CheckWrapper>
                </CardBody>
            </Card>
            <ButtonsCont>
                <Prev onClick={()=>context.tokenWizardActions.handlePrev()} mr="30px">Prev Step</Prev>
                <Next disabled={!context.noEdit} onClick={()=>context.tokenWizardActions.handleNext()}>Next Step</Next>
            </ButtonsCont>
        </>
    )
}

export default ConfirmToken