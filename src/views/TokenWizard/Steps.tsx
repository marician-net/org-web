import React, { useContext, useEffect, useState } from 'react'
import ProviderTitle from 'views/ProviderTitle';
import {connectorLocalStorageKey} from 'toolkitUI'
import { useWeb3React } from '@web3-react/core'
import { getRegistryContract } from 'utils/contractHelpers';
import useWeb3 from 'hooks/useWeb3';
import TokenName from './Steps/TokenName'
import CurveCreation from './Steps/CurveCreation'
import ConfirmToken from './Steps/ConfirmToken'
import ListToken from './Steps/ListToken'
import { TokenWizardContext } from './contexts/TokenWizardProvider'

const Steps: React.FC = () => {
  const context = useContext(TokenWizardContext)
  const signedIn = window.localStorage.getItem(connectorLocalStorageKey);
  const [refresh, setRefresh]=useState(0)
  const [_chainID, setChain]=useState(1);
  const [count, setCount]=useState(1);
  const web3 = useWeb3()
  const registry = getRegistryContract(web3, _chainID)
  let userAccount;

  if(window.localStorage.getItem(connectorLocalStorageKey)){
    const {account} = useWeb3React()
    userAccount = account
  }

  useEffect(()=>{
    let mounted = true;
    if (mounted) {
      web3.eth.getChainId()
      .then((res)=>{
        setChain(res)
        setCount(count + 1)
      })
    }
    return () => {
      mounted = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  useEffect(()=>{
    async function getTitle(address) {
      try {
        const title = await registry.methods.getProviderTitle(address).call()
        const publicKey = await registry.methods.getPublicKey(address).call()
        return {title, publicKey}
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
        return {title: "", publicKey: ""}
      }
    }
    if (signedIn && refresh > 0){
      getTitle(userAccount).then((r)=>{
        console.log("results -->", r)
        if(r.title !== "0x0000000000000000000000000000000000000000000000000000000000000000" && r.title !== ""){
        context.tokenWizardActions.handleSetTitle(r.title);
        context.tokenWizardActions.setValue("publicKey", r.publicKey);
        context.tokenWizardActions.setValue("currentStep", 1);
        }
      })
    }
    else {
      context.tokenWizardActions.setValue("registryContract", registry)
      setRefresh(refresh + 1)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh, signedIn, _chainID])



  switch (context.currentStep) {
    case 0 :
      return <ProviderTitle wrapper = "TokenWizardContext"/>
    case 1:
      return <TokenName />
    case 2:
      return <CurveCreation />
    case 3:
      return <ConfirmToken />
    case 4:
      return <ListToken />
    default:
      return null
  }
}

export default Steps
