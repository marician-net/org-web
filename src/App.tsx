import React, { Suspense, useEffect, lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { useFetchPriceList, useFetchProfile, useFetchPublicData } from 'state/hooks'
import { ResetCSS } from 'toolkitUI'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import ToastListener from './components/ToastListener'
import PageLoader from './components/PageLoader'
import EasterEgg from './components/EasterEgg'
import Popups from './components/Popups'
import history from './routerHistory'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
} from './exchangeSwap/pages/AddLiquidity/redirects'
import { RedirectOldRemoveLiquidityPathStructure } from './exchangeSwap/pages/RemoveLiquidity/redirects'
import { RedirectPathToSwapOnly } from './exchangeSwap/pages/Swap/redirects'
import AddLiquidity from './exchangeSwap/pages/AddLiquidity/index'
import Pool from './exchangeSwap/pages/Pool/index'
import PoolFinder from './exchangeSwap/pages/PoolFinder/index'
import RemoveLiquidity from './exchangeSwap/pages/RemoveLiquidity/index'
import Swap from './exchangeSwap/pages/Swap/index'


// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Farms = lazy(() => import('./views/Farms'))
const NFTMarketplace = lazy(() => import('./views/NFTMarketplace'))
const TokenMarketplace = lazy(() => import('./views/TokenMarketplace'))
const NotFound = lazy(() => import('./views/NotFound'))
const Profile = lazy(() => import('./views/Profile'))
const Bond = lazy(() => import('./views/Bond'))
const TokenWizard = lazy(() => import('./views/TokenWizard'))
const BlockExplorer = lazy(() => import ('./views/BlockExplorer'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
  justify-content: center;
  background-image: url('/images/group-pancake.svg');
  background-repeat: no-repeat;
  background-position: bottom 24px center;
  background-size: 90%;

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/arch-${({ theme }) => (theme.isDark ? 'dark' : 'light')}.svg'),
      url('/images/left-pancake.svg'), url('/images/right-pancake.svg');
    background-repeat: no-repeat;
    background-position: center 420px, 10% 230px, 90% 230px;
    background-size: contain, 266px, 266px;
    min-height: 90vh;
  }
`

const Marginer = styled.div`
  margin-top: 5rem;
`

const App: React.FC = () => {
  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released
  useEffect(() => {
    console.warn = () => null
  }, [])

  useEagerConnect()
  useFetchPublicData()
  useFetchProfile()
  useFetchPriceList()

  return (
    <Suspense fallback={null}>
      <Router history={history}>
        <ResetCSS />
        <GlobalStyle />
        <Menu>
          <SuspenseWithChunkError fallback={<PageLoader />}>
            <Switch>
              <Route path="/" exact>
                <Farms />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              {/* Zswap Routes  */}
              <Route path="/nftmarket" exact>
                {/* ADD PAGE HERE */}
                <NFTMarketplace />
              </Route>
              <Route path="/viewprotocol" exact>
                {/* ADD PAGE HERE */}
              </Route>
              <Route path="/continuousraise">{/* ADD PAGE HERE */}</Route>

              <Route path="/labs/bond/:key" exact>
                <Bond />
              </Route>
              <Route path="/labs/marketplace" exact>
                <TokenMarketplace />
              </Route>
              <Route path="/labs/newtoken" exact>
                <TokenWizard />
              </Route>
              <Route path="/labs/blockexplorer">
                <BlockExplorer />
              </Route>

              <AppWrapper>
                <BodyWrapper>
                  <Popups />
                  <Route exact strict path="/swap" component={Swap} />
                  <Route exact strict path="/find" component={PoolFinder} />
                  <Route exact strict path="/pool" component={Pool} />
                  <Route exact path="/add" component={AddLiquidity} />
                  <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
                </BodyWrapper>
              </AppWrapper>

              {/* Redirection: These old routes are still used in the code base */}
              <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
              <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
              <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />

              <Route component={RedirectPathToSwapOnly} />
              {/* 404 */}
              <Route component={NotFound} />
            </Switch>
          </SuspenseWithChunkError>
          <Marginer />
        </Menu>
        <EasterEgg iterations={2} />
        <ToastListener />
      </Router>
    </Suspense>
  )
}

export default React.memo(App)
