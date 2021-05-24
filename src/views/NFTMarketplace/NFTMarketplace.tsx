import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch, useLocation } from 'react-router-dom'
import { useAppDispatch } from 'state'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceCakeBusd, useGetApiPrices } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import { orderBy } from 'lodash'
import { Button, Image, Heading, RowType, Toggle, Text, Flex, Card } from 'toolkitUI'
import { RaiseNFT } from 'state/types'
import NFTCard from './components/NFTCard/NFTCard'
import SearchInput from './components/SearchInput'
import Select, { OptionProps } from './components/Select/Select'

const TagFilterContainer = styled(Card)`
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 16px 32px;
  }

  margin-bottom: 20px;

  .active {
    background: #024abb;
    color: white;
    border-radius: 10px;
  }
`

const ControlContainer = styled(Card)`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  position: -webkit-sticky;
  position: sticky;
  top: -10px;
  margin-bottom: 20px;
  z-index: 9;

  justify-content: space-between;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 16px 32px;
  }
`

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  ${Text} {
    margin-left: 8px;
  }
`

const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
`

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    padding: 0;
  }
`

const ViewControls = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
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

const NFTMarketplace: React.FC = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  /// //////
  const featuredArtists = {
    all: 'All',
    tadhana: 'Tadhana',
    yadig: 'Ya Dig',
    bengravis: 'Ben Gravis',
    yeetlonmusk: 'Yeetlon Musk',
    yokoohnoe: 'Yoko Ohnoe',
    $avage: '$avage',
    fenty: 'Fenty',
    nicoletv: 'NicoleTV',
    zipzap: 'ZipZap',
    pikapika: 'PikaPika',
    strangeloop: 'Strange LoOp',
  }

  const categories = {
    all: 'All',
    image: 'Image',
    gif: 'GIF',
    video: 'Video',
    music: 'Music',
    text: 'Text',
    other: 'Other',
  }

  const tokenT: RaiseNFT = {
    name: 'Tadhana',
    symbol: 'TT',
    isOwned: false,
    tokenURI: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/tutorial-sire.svg',
    /*  should be pulled on per address basis */
    price: 24.5,
    isNewToken: true,
    category: 'image',
    artist: 'zipzap',
  }
  const tokenP: RaiseNFT = {
    name: 'Poloniex',
    symbol: 'PLX',
    isOwned: true,
    tokenURI: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/tutorial-matron.svg',
    /*  should be pulled on per address basis */
    price: 10,
    isNewToken: false,
    category: 'gif',
    artist: 'tadhana',
  }
  const tokenG: RaiseNFT = {
    name: 'Boba Yoda',
    symbol: 'BY',
    isOwned: true,
    tokenURI: 'https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1972013.svg',
    /*  should be pulled on per address basis */
    price: 2345,
    isNewToken: true,
    category: 'video',
    artist: 'yadig',
  }
  let tokens: RaiseNFT[] = [tokenP, tokenT, tokenP, tokenT, tokenG, tokenP, tokenG]
  const [artist, setArtist] = useState('all')
  const [category, setCategory] = useState('all')
  const [query, setQuery] = useState('')
  const { account } = useWeb3React()
  const [sortOption, setSortOption] = useState('name')

  const dispatch = useAppDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch<any>(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [showMyTokens, setShowMyTokens] = useState(false)

  const sortTokens = (tkns: RaiseNFT[]): RaiseNFT[] => {
    if (artist !== 'all') {
      tkns = tkns.filter((token: RaiseNFT) => {
        return token.artist === artist
      })
    }
    if (category !== 'all') {
      tkns = tkns.filter((token: RaiseNFT) => {
        return token.category === category
      })
    }
    if (query) {
      const lowercaseQuery = query.toLowerCase()
      tkns = tkns.filter((token: RaiseNFT) => {
        return token.name.toLowerCase().includes(lowercaseQuery)
      })
    }
    if (showMyTokens) {
      tkns = tkns.filter((token: RaiseNFT) => {
        return token.isOwned
      })
    }
    switch (sortOption) {
      case 'name':
        return orderBy(tkns, (token: RaiseNFT) => (token.name ? token.name : 0), 'desc')
      case 'price':
        return orderBy(tkns, (token: RaiseNFT) => (token.price ? token.price : 0), 'desc')
      default:
        return tkns
    }
  }

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  tokens = sortTokens(tokens)

  const renderContent = (): JSX.Element => {
    return (
      <div>
        <FlexLayout>
          <Route exact path={`${path}`}>
            {tokens.map((token) => (
              <NFTCard token={token} account={account} removed={false} />
            ))}
          </Route>
          <Route exact path={`${path}/history`}>
            {tokens.map((token) => (
              <NFTCard token={token} account={account} removed />
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
          {TranslateString(674, 'Shockingly Cool')}
        </Heading>
        <Heading size="lg" color="white" ml="1">
          {TranslateString(999, 'Artwork')}
        </Heading>
      </Header>
      <Page>
        <TagFilterContainer>
          <Flex>
            <Text
              style={{ whiteSpace: 'nowrap' }}
              margin="5px"
              padding="5px 10px"
              color="primary"
              fontWeight="bold"
              textAlign="left"
            >
              Featured Artists:
            </Text>
            <div>
              {Object.keys(featuredArtists).map((item) => (
                <Text
                  className={item === artist ? 'active' : ''}
                  style={{ display: 'inline-block', cursor: 'pointer' }}
                  margin="5px"
                  padding="5px 10px"
                  color="primaryDark"
                  textAlign="left"
                  onClick={() => setArtist(item)}
                >
                  {featuredArtists[item]}
                </Text>
              ))}
            </div>
          </Flex>
          <Flex>
            <Text
              style={{ whiteSpace: 'nowrap' }}
              margin="5px"
              padding="5px 10px"
              color="primary"
              fontWeight="bold"
              textAlign="left"
            >
              Categories:
            </Text>
            <div>
              {Object.keys(categories).map((item) => (
                <Text
                  className={item === category ? 'active' : ''}
                  style={{ display: 'inline-block', cursor: 'pointer' }}
                  margin="5px"
                  padding="5px 10px"
                  color="primaryDark"
                  textAlign="left"
                  onClick={() => setCategory(item)}
                >
                  {categories[item]}
                </Text>
              ))}
            </div>
          </Flex>
        </TagFilterContainer>
        <ControlContainer>
          <ViewControls>
            <ToggleWrapper>
              <Toggle checked={showMyTokens} onChange={() => setShowMyTokens(!showMyTokens)} scale="sm" />
              <Text> {TranslateString(1116, 'My Tokens')}</Text>
              <Button
                variant="bubblegum"
                height="30px"
                width="120px"
                marginLeft="16px"
                onClick={() => {
                  console.log('mintNFT')
                }}
              >
                Mint NFT
              </Button>
            </ToggleWrapper>
          </ViewControls>
          <FilterContainer>
            <LabelWrapper>
              <Text>SORT BY</Text>
              <Select
                options={[
                  {
                    label: 'Name',
                    value: 'name',
                  },
                  {
                    label: 'Price',
                    value: 'price',
                  },
                ]}
                onChange={handleSortOptionChange}
              />
            </LabelWrapper>
            <LabelWrapper style={{ marginLeft: 16 }}>
              <Text>SEARCH</Text>
              <SearchInput onChange={handleChangeQuery} value={query} />
            </LabelWrapper>
          </FilterContainer>
        </ControlContainer>
        {renderContent()}
      </Page>
    </>
  )
}

export default NFTMarketplace
