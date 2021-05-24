/* eslint-disable no-console */

import React, { useContext, useEffect, useState } from 'react'
import { Card, CardBody, Heading, Button as toolkitUIButton, CheckmarkIcon, connectorLocalStorageKey } from 'toolkitUI'
import UnlockButton from 'components/UnlockButton'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from 'hooks/useWeb3'
import styled from 'styled-components'
import Logo from 'toolkitUI/components/Svg/Icons/Logo'
import { AbiItem } from 'web3-utils'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { listToken, abi, tokenBytes } from '../constants/constants'
import NextStepButton from '../components/NextStepButton'
import PrevStepButton from '../components/PrevStepButton'
import { TokenWizardContext } from '../contexts/TokenWizardProvider'

const StyledCardBody = styled(CardBody)`
  padding-left: 40px;
  padding-right: 70px;
  padding-top: 50px;
  padding-bottom: 30px;
`

const ButtonsCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

`
const Next = styled(NextStepButton)`
    background: ${({ disabled, theme }) => disabled ? null : theme.colors.gradients.buttongum}
`
const Prev = styled(PrevStepButton)`
    background: ${({ disabled, theme }) => disabled ? null : theme.colors.gradients.bubbleYum}
`

const Button = styled(toolkitUIButton)`
    width: 100%;
    font-size: 16px;
    & svg {
        height: 10px;
        width: 10px;
    };
    background: ${({ disabled, theme }) => disabled ? null : theme.colors.gradients.buttongum};

    ${({ theme }) => theme.mediaQueries.sm} {
        width: 35%;
        font-size: 24px;
        & svg {
            height: 20px;
            width: 20px;
        };
      }
    
`

const Connector = styled.hr<{ contractStep: number }>`
    background: linear-gradient(
        ${({ contractStep, theme }) =>
        contractStep === 0 ? "#25a2e7" :
            contractStep === 1 ? theme.colors.backgroundDisabled :
                theme.colors.backgroundDisabled},
        ${({ contractStep, theme }) =>
        contractStep === 0 ? theme.colors.backgroundDisabled :
            contractStep === 1 ? theme.colors.primary :
                theme.colors.backgroundDisabled}
    );
    border: none;
    width: 5px;
    height: 30px;
    margin: 0px auto;

    ${({ theme }) => theme.mediaQueries.sm} {
        background: linear-gradient(
            90deg,
            ${({ contractStep, theme }) =>
        contractStep === 0 ? "#0DD8D0" :
            contractStep === 1 ? theme.colors.backgroundDisabled :
                theme.colors.backgroundDisabled},
            ${({ contractStep, theme }) =>
        contractStep === 0 ? theme.colors.backgroundDisabled :
            contractStep === 1 ? theme.colors.primary :
                theme.colors.backgroundDisabled}
        );
        width: 20%;
        height: 5px;
        margin: inherit;
    };    
`

const Progressor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    ${({ theme }) => theme.mediaQueries.sm}{
        flex-direction: row;
    }
`

const Zap = styled(Logo) <{ pending?: boolean }>`
    height: 100px;
    width: 100px;
    ${({ theme }) => theme.mediaQueries.sm} {
        height: 400px;
        width: 400px;
      }
    margin: 20px 25%;
    animation: ${({ pending }) => pending ? "spin 1.25s ease infinite" : null};

    @keyframes spin {
        0% {
            transform: rotate3d(0, 1, 0, 0deg);
          }
          50% {
            transform: rotate3d(0, 1, 0, 180deg);
          }
          100% {
            transform: rotate3d(0, 1, 0, 360deg);
          }
      }
`

const Box = styled.div`
      display: flex;
      justify-content: center
`

const ListToken: React.FC = () => {
    const context = useContext(TokenWizardContext)
    const web3 = useWeb3();
    const [chainId, setChainId] = useState(1)
    const {account} = useWeb3React();
    const dispatch = useDispatch();
    const history = useHistory();
    const factory = {
        1:  "0xe13fef4c8e75c12f9706e8bdf28fe847ce99cb42",
        42: "0xeC97E4896cF9f067a9dD428760316024EA0cfc12",
        31337: "0x36c02da8a0983159322a80ffe9f24b1acff8b570",
    
    }
    const coordinator = {
        1: "0xb007eca49763f31edff95623ed6c23c8c1924a16",
        42: "0xAE00FCD8044dAB86b583896e8d1A078D9416c06d",
        31337: "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512"
    }

    const deployFactory = async() => {
        context.tokenWizardActions.setValue("pending", true)
        const deployToken = new web3.eth.Contract(abi as AbiItem[])

        const gasPrice = await web3.eth.getGasPrice()

        const estimateGas = await deployToken.deploy({
            // eslint-disable-next-line prefer-template
            data: tokenBytes,
            arguments: [coordinator[chainId], factory[chainId], context.publicKey, context.providerTitle],
        }).estimateGas({from: account})

        await deployToken.deploy({
            // eslint-disable-next-line prefer-template
            data: tokenBytes,
            arguments: [coordinator[chainId], factory[chainId], context.publicKey, context.providerTitle],
            }).send({
            from: account,
            gasPrice,
            // 1000000000
            gas: estimateGas,
            })
            .on('error', (error) => {
            console.log(error)
            context.tokenWizardActions.setValue("contractStep", 0)
            })
            .on('transactionHash', (transactionHash) => {
            console.log(transactionHash, "factory transaction hash")
            })
            .on('confirmation', (confirmationNumber, receipt) => {
                context.tokenWizardActions.setValue("previousContract", receipt.contractAddress)
                // context.tokenWizardActions.setValue("contractStep", 1)
                // context.tokenWizardActions.setValue("pending", false)
            })
            .then(()=>{
                context.tokenWizardActions.setValue("contractStep", 1)
                context.tokenWizardActions.setValue("pending", false)
            });
    }

    const createToken = async() => {
        context.tokenWizardActions.setValue("pending", true)
        const contract = new web3.eth.Contract((abi as unknown) as AbiItem, context.previousContract)
        const symbol = web3.utils.asciiToHex(context.tokenSymbol)
        const name = web3.utils.asciiToHex(context.tokenName)
        contract.methods.initializeCurve(name, symbol, context.coeffArray).send({from:account})
        .once("confirmation", (res)=>{
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const result = res
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((result)=>{
            contract.methods.curves(name).call()
            .then((res)=>{
                context.tokenWizardActions.setValue("tokenAddress", res)
                context.tokenWizardActions.setValue("contractStep", 2)
                context.tokenWizardActions.setValue("pending", false)
            })
        })

    }

    const updateOracle = async (address, name) => {
        console.log("This is just dummy data")
        return {type: address, payload: name}
    }

    const updateCurrent = (endpointAddress, endpointName) => {
        console.log(endpointAddress, endpointName);
        updateOracle(endpointAddress, endpointName)
           .then((res) => {
              // Dispatch each Oracle endpoint object to the Redux store
              dispatch({
                 type: res.type,
                 payload: res.payload,
              });
           })
           .catch((err) => {
              return err;
           });
     };

    const toToken = () => {
        const tokenName = context.previousContract + context.tokenName;
        history.push(`/labs/bond/${tokenName}`);
    } 

    useEffect(()=>{
        let mounted = true;
        if (mounted) {
          web3.eth.getChainId()
          .then((res)=>{
            setChainId(res)
          })
        }
        return () => {
          mounted = false;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        if (context.tokenAddress.length > 0){
            // updateCurrent(context.previousContract, context.tokenName)
            console.log(context.tokenAddress)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[context.tokenAddress])

    return (
        <>
            <Card mb="59px">
                <StyledCardBody>
                    <Heading as="h3" size="xl" mb="48px" color="primaryDark">
                        List Token
                    </Heading>
                    <Box>
                        <Zap pending={context.pending} />
                    </Box>
                    <Heading as="h3" size="lg" mt="30px" ml="57px" mb="43px" color="text" style={{ height: 162 }}>
                        {listToken[context.contractStep]}
                    </Heading>
                    { window.localStorage.getItem(connectorLocalStorageKey)  ?
                    <Progressor>
                        <Button
                            onClick={() => deployFactory()}
                            disabled={context.contractStep !== 0 || context.pending}
                            endIcon={context.contractStep > 0 ? <CheckmarkIcon color="textDisabled" /> : null}>
                            {context.contractStep !== 0 ? "Deployed Contract" : "Deploy Token Contract"}
                        </Button>
                        <Connector contractStep={context.contractStep} />
                        <Button
                            onClick={() => createToken()}
                            disabled={context.contractStep !== 1 || context.pending}
                            endIcon={context.contractStep > 1 ? <CheckmarkIcon color="textDisabled" /> : null}>
                            Create Token
                        </Button>
                    </Progressor>
                    : <UnlockButton width="100%"/>}
                </StyledCardBody>
            </Card>
            <ButtonsCont>
                <Prev onClick={() => context.tokenWizardActions.handlePrev()} mr="30px" disabled={context.contractStep === 2}>Prev Step</Prev>
                <Next onClick={() => context.tokenWizardActions.handleNext()} disabled={context.contractStep !== 2}>View Your Token</Next>
            </ButtonsCont>

        </>
    )
}

export default ListToken