/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, ContextType, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import BigNumber from 'bignumber.js'
import { Card, CardBody, Heading, Text, Input } from 'toolkitUI'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from 'hooks/useWeb3'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import useApproveConfirmTransaction from 'hooks/useApproveConfirmTransaction'
import { getRegistryContract } from 'utils/contractHelpers'
import { useCake, useBunnyFactory } from 'hooks/useContract'
import useHasCakeBalance from 'hooks/useHasCakeBalance'
import nftList from 'config/constants/nfts'
import UnlockButton from "components/UnlockButton"
import { TokenWizardContext } from '../TokenWizard/contexts/TokenWizardProvider'
import SelectionCard from './components/SelectionCard'
import NextStepButton from './components/NextStepsButton'
import ApproveConfirmButtons from './components/ApproveConfirmButtons'
import useProfileCreation from '../Profile/ProfileCreation/contexts/hook'
import { MINT_COST, STARTER_BUNNY_IDS } from '../Profile/ProfileCreation/config'

const Center = styled.div`
  text-align: left;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 16px;
`
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end

`
const HalfDiv = styled.div`
  width: 50%;
`

const Next = styled(NextStepButton)`
  background: ${({disabled, theme})=>disabled?null:theme.colors.gradients.bubblegum}
`

export interface ProviderProps {
    wrapper: string
}

const nfts = nftList.filter((nft) => [5, 6, 7, 8, 9].includes(nft.bunnyId))
const minimumCakeBalanceToMint = new BigNumber(1).multipliedBy(new BigNumber(10).pow(18))

const ProviderWizard: React.FC<ProviderProps>= ({wrapper}) => {
  let context;
  if (wrapper==="TokenWizardContext"){
    context = useContext(TokenWizardContext)
  }
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [refreshed, setRefreshed] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [Approving, setApproving] = useState(false);
  const web3 = useWeb3();
  const registry = getRegistryContract(web3);

  const SetProviderTitle = async (account, userTitle) => {
    const publicKey = web3.utils.asciiToHex(account);
    const publicKeyNum = (publicKey.slice(2, 46))
    const titleConverted = web3.utils.asciiToHex(title);

    
    await registry.methods.initiateProvider(publicKeyNum, titleConverted)
          .send({from: account})
          .on('transactionHash', (transactionHash) => {
              console.log(transactionHash, "transaction hash")
          })
          .on("confirmation", (res)=>{
            context.tokenWizardActions.handleSetTitle(titleConverted)
            context.tokenWizardAction.setValue("publicKey", publicKeyNum)
            setApproving(false);
            setIsApproved(true);
          })
    
  }


  const { account } = useWeb3React()
  const cakeContract = useCake()
  const bunnyFactoryContract = useBunnyFactory()
  const TranslateString = useI18n()

  const userAccount = account
  // const userAccount = "0x61097BA76cD906d2ba4FD106E757f7Eb455fc295"

  const setDefaultState = () => {
    setApproving(false)
    setIsApproved(false)
  }

  const handleApprove = async () => {
    if (Approving) {
      setRefreshed(true)
      setDefaultState()
      return;
    }
    setApproving(true)
    // eslint-disable-next-line no-console
    console.log("Approving")
    SetProviderTitle(userAccount, title)



  }

  const onClick = () => {
    // eslint-disable-next-line no-console
    console.log("Clicked")
    history.push("/home")
  }

  useEffect(() => {
    if (isApproved && refreshed) {
      setRefreshed(false)
      setDefaultState()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isApproved, refreshed])

  return (
    <>
      <Card mb="24px">
        <CardBody>
          <Heading as="h3" size="xl" mb="48px" color="primaryDark">
            {TranslateString(776, 'Provider Information')}
          </Heading>
          <Center>
            <Heading as="h4" size="md" mb="24px" color="contrast">
              {TranslateString(792, 'This is the current address of your wallet which will become the provider address and the owner of this token contract:')}
            </Heading>
          </Center>
          <Heading as="h3" size = "lg" color="primary" style={{textAlign: 'center', marginBottom: '24px'}}>
            {userAccount? TranslateString(794, userAccount): <UnlockButton width = "50%" />}
          </Heading>
          <Heading as="h3" size = "lg" mb="24px" color = "primaryDark" >
            {TranslateString(792, 'Set your Title')}
          </Heading>
          <Center>
            <Heading as="h4" size="md" mb="24px" color="contrast">
              {TranslateString(792, 'Your provider title is the name of your wallet address on the Zap platform. Think of it as your Web3 username.')}
            </Heading>
            <HalfDiv>
              <Input type="text" scale="md" placeholder="Provider Title *" mb="24px" disabled={Approving || isApproved } value={title} onChange={(e) => setTitle(e.target.value)} />
            </HalfDiv>
          </Center>
        </CardBody>
      </Card>
      <Buttons>
        <ApproveConfirmButtons
          isApproveDisabled={title === '' || isApproved || !userAccount}
          isApproving={Approving}
          onApprove={handleApprove}
        />
        <Next onClick={()=>context.tokenWizardActions.handleNext()} disabled={!isApproved} variant={isApproved?"buttongum" : "subtle"}>
          {TranslateString(798, 'Next Step')}
        </Next>
      </Buttons>
    </>
  )
}

export default ProviderWizard