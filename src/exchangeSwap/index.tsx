import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ResetCSS } from 'toolkitUI'
import ListsUpdater from 'state/lists/updater'
import GlobalStyle from 'style/Global'
import ApplicationUpdater from 'state/application/updater'
import MulticallUpdater from 'state/multicall/updater'
import TransactionUpdater from 'state/transactions/updater'
import ToastListener from 'components/ToastListener'
import App from 'App'
import Providers from './Providers'
import 'inter-ui'
import './i18n'

if ('ethereum' in window) {
  (window.ethereum as any).autoRefreshOnNetworkChange = false
}

window.addEventListener('error', () => {
   localStorage?.removeItem('redux_localstorage_simple_lists')
})

ReactDOM.render(
  <StrictMode>
    <Providers>
      <>
        <ListsUpdater />
        <ApplicationUpdater />
        <TransactionUpdater />
        <MulticallUpdater />
        <ToastListener />
      </>
      <ResetCSS />
      <GlobalStyle />
      <App />
    </Providers>
  </StrictMode>,
  document.getElementById('root')
)
