import React, { useContext } from 'react'
import Page from 'components/layout/Page'
import Header from './Header'
import Steps from './Steps'
import TokenWizardProvider, { TokenWizardContext } from './contexts/TokenWizardProvider'

const TokenWizardContent = () => {
  const context = useContext(TokenWizardContext);
  return (
    <Page>
      { context && context.currentStep !== 0 && <Header /> }
      <Steps/>
    </Page>
  )
}

const TokenWizard = () => {    
  return (
    <TokenWizardProvider>
      <TokenWizardContent />
    </TokenWizardProvider>
)}

export default TokenWizard