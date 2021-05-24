import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch, useLocation } from 'react-router-dom'
import { useAppDispatch } from 'state'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import Select, { OptionProps } from 'components/Select'
import SearchInput from 'components/SearchInput'
import { useFarms, usePriceCakeBusd, useGetApiPrices } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { Farm } from 'state/types'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import { getFarmApy } from 'utils/apy'
import { orderBy } from 'lodash'
import { Image, Heading, Flex, Toggle, Text } from 'toolkitUI'
import ToggleView from 'components/ToggleView'
import TokenCard, { RaiseTokenBonded } from './components/TokenCard/TokenCard'
import Table from './components/TokenMarketplaceTable/TokenMarketplaceTable'
import { DesktopColumnSchema, ViewMode } from './components/types'
import { getAddress } from '../../utils/addressHelpers'

const ControlContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  justify-content: space-between;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  :first-child {
    margin-left: 0;
  }

  ${Text} {
    margin-left: 8px;
  }
`

const LabelWrapper = styled.div`
  width: 100%;
  margin: 12px 0;
  > ${Text} {
    font-size: 12px;
  }

  ${({ theme }) => theme.mediaQueries.xs} {
    width: 49%;
  }
`

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 8px 0px;
  max-width: 420px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 0;
  }
`

const ViewControls = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 420px;

  > div {
    padding: 8px 0px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;

    > div {
      padding: 0;
    }
  }
`

const StyledImage = styled(Image)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 58px;
`

const Header = styled.div`
  padding: 32px 0px;
  background: ${({ theme }) => theme.colors.gradients.bubblegum};

  padding-left: 16px;
  padding-right: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const TokenMarketplace: React.FC = () => {
  const { path } = useRouteMatch()
  const { pathname } = useLocation()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  /// //////
  const tokenT: RaiseTokenBonded = {
    name: 'Tadhana',
    symbol: 'TT',
    /*  should be pulled on per address basis */
    price: 24.5,
    value: 197.428,
    owned: 0,
    isNewToken: true,
    bondedSupply: 131,
    marketCap: 360000,
  }
  const tokenP: RaiseTokenBonded = {
    name: 'Poloniex',
    symbol: 'PLX',
    /*  should be pulled on per address basis */
    price: 10,
    owned: 41.3,
    value: 413,
    isNewToken: false,
    bondedSupply: 234,
    marketCap: 40000000,
  }
  const tokenG: RaiseTokenBonded = {
    name: 'Guy Fieri',
    symbol: 'GUY',
    /*  should be pulled on per address basis */
    price: 13,
    owned: 120,
    value: 13600,
    isNewToken: true,
    bondedSupply: 21,
    marketCap: 6200000,
  }
  let tokens: RaiseTokenBonded[] = [tokenP, tokenT, tokenP, tokenT, tokenG, tokenP, tokenG]
  const cakePrice = usePriceCakeBusd()
  const [query, setQuery] = useState('')
  const [viewMode, setViewMode] = useState(ViewMode.TABLE)
  const { account } = useWeb3React()
  const [sortOption, setSortOption] = useState('bonded')
  const prices = useGetApiPrices()

  const dispatch = useAppDispatch()
  const { fastRefresh } = useRefresh()
  // useEffect(() => {
  //   if (account) {
  //     dispatch<any>(fetchFarmUserDataAsync(account))
  //   }
  // }, [account, dispatch, fastRefresh])

  const [bondedTo, setBondedTo] = useState(false)
  const [showMyTokens, setShowMyTokens] = useState(false)
  const isActive = !pathname.includes('history')

  const activeFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier === '0X')

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  const stakedInactiveFarms = inactiveFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  const sortTokens = (tkns: RaiseTokenBonded[]): RaiseTokenBonded[] => {
    console.log(sortOption)
    console.log(tkns)
    if (query) {
      const lowercaseQuery = query.toLowerCase()
      tkns = tkns.filter((token: RaiseTokenBonded) => {
        console.log(token)
        return token.name.toLowerCase().includes(lowercaseQuery)
      })
    }
    switch (sortOption) {
      case 'bonded':
        return orderBy(tkns, (token: RaiseTokenBonded) => token.bondedSupply, 'desc')
      case 'owned':
        return orderBy(tkns, (token: RaiseTokenBonded) => (token.owned ? token.owned : 0), 'desc')
      case 'price':
        return orderBy(tkns, (token: RaiseTokenBonded) => (token.price ? token.price : 0), 'desc')
      default:
        return tkns
    }
  }

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  let farmsStaked = []
  // if (isActive) {
  farmsStaked = farmsLP
  // } else {
  //   farmsStaked = bondedTo ? farmsList(stakedInactiveFarms) : farmsList(inactiveFarms)
  // }

  //  farmsStaked = sortTokens(farmsStaked)
  tokens = sortTokens(tokens)

  const rowData = farmsStaked.map((farm) => {
    const { token, quoteToken } = farm
    const tokenAddress = token.address
    const quoteTokenAddress = quoteToken.address
    const lpLabel = farm.lpSymbol && farm.lpSymbol.split(' ')[0].toUpperCase().replace('PANCAKE', '')

    const row = {
      farm: {
        image: farm.lpSymbol.split(' ')[0].toLocaleLowerCase(),
        label: lpLabel,
        pid: farm.pid,
      },
      earned: {
        earnings: farm.userData ? getBalanceNumber(new BigNumber(farm.userData.earnings)) : null,
        pid: farm.pid,
      },
      multiplier: {
        multiplier: farm.multiplier,
      },
      details: farm,
    }

    return row
  })

  const renderContent = (): JSX.Element => {
    const data = tokens.map((token, ind) => {
      return { id: ind, ...token }
    })
    if (viewMode === ViewMode.TABLE && tokens.length) {
      return <Table data={data} />
    }

    return (
      <div>
        <FlexLayout>
          <Route exact path={`${path}`}>
            {tokens.map((token) => (
              <TokenCard token={token} account={account} removed={false} />
            ))}
          </Route>
          <Route exact path={`${path}/history`}>
            {tokens.map((token) => (
              <TokenCard token={token} account={account} removed />
            ))}
          </Route>
        </FlexLayout>
      </div>
    )
  }

  const handleSortOptionChange = (option: OptionProps): void => {
    setSortOption(option.value)
  }

  return (
    <>
      <Header>
        <Heading as="h1" size="xxl" color="secondary" mb="24px">
          {TranslateString(674, 'Continuous Raise')}
        </Heading>
        <Heading size="lg" color="white" ml="1">
          {TranslateString(999, 'Curve Tokens')}
        </Heading>
      </Header>
      <Page>
        <ControlContainer>
          <ViewControls>
            <ToggleView viewMode={viewMode} onToggle={(mode: ViewMode) => setViewMode(mode)} />
            <Flex>
              <ToggleWrapper>
                <Toggle checked={bondedTo} onChange={() => setBondedTo(!bondedTo)} scale="sm" />
                <Text color='primary'> {TranslateString(1116, 'Bonded To')}</Text>
              </ToggleWrapper>
              <ToggleWrapper>
                <Toggle checked={showMyTokens} onChange={() => setShowMyTokens(!showMyTokens)} scale="sm" />
                <Text color='primary'> {TranslateString(1116, 'My Tokens')}</Text>
              </ToggleWrapper>
            </Flex>
          </ViewControls>
          <FilterContainer>
            <LabelWrapper>
              <Text color='primary'>SORT BY</Text>
              <Select
                options={[
                  {
                    label: 'Bonded Supply',
                    value: 'bonded',
                  },
                  {
                    label: 'Tokens Owned',
                    value: 'owned',
                  },
                  {
                    label: 'Spot Price',
                    value: 'price',
                  },
                ]}
                onChange={handleSortOptionChange}
              />
            </LabelWrapper>
            <LabelWrapper>
              <Text color='primary'>SEARCH</Text>
              <SearchInput onChange={handleChangeQuery} value={query} />
            </LabelWrapper>
          </FilterContainer>
        </ControlContainer>
        {renderContent()}
        <StyledImage src="/images/3dpan.png" alt="Pancake illustration" width={120} height={103} />
      </Page>
    </>
  )
}

export default TokenMarketplace
