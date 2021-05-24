import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch, useLocation, useHistory  } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'state/index'
// import { useAppDispatch } from 'state'
// import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import styled, { ThemeProvider } from 'styled-components'
// import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useTransactions, usePriceCakeBusd, useGetApiPrices } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { Transaction } from 'state/types'
import useI18n from 'hooks/useI18n'
import { orderBy } from 'lodash'
import { Image, Heading, RowType, Toggle, Text } from 'toolkitUI'
import Select, { OptionProps } from 'components/Select'
import SearchInput from 'components/SearchInput'
import { DateRangeInput } from '@datepicker-react/styled'
// import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
// import useZapTransactionsList from 'hooks/useZapTransactions'
// import { getTransactions } from '../../state/zapTransactions/actions'
import Table from './components/BlockExplorerTable/BlockExplorerTable'
import BlockExplorerTabButtons from './components/BlockExplorerTabButtons'
import { RowProps } from './components/BlockExplorerTable/Row'
// import ToggleView from './components/ToggleView/ToggleView'
import { DesktopColumnSchema, ViewMode } from './components/types'
// import { getAddress } from '../../utils/addressHelpers'

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
    padding: 16px 12px;
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
const DatePickerWrapper = styled.div`
  z-index: 999;
  margin-right: 80px;
  background: ${({ theme }) => theme.colors.background};
  >div >div {
    :first-child {
      grid-template-columns: 104px 39px 104px;
    }
  }
  label {
    border: none;
    display: flex; 
      input {
        background: ${({ theme }) => theme.colors.input};
        font-family: 'Kanit', sans-serif;
        min-height: 35px;
        height: 90%;
        width: 100%;
        padding-left: 10px;
        padding-right: 0px;
        margin: auto;
        color: ${({ theme }) => theme.colors.text};
  
        ::placeholder {
          color: ${({ theme }) => theme.colors.text};
          font-family: 'Kanit', sans-serif;
          font-size: 16px;
        }
      }
    
  }
`

const BlockExplorer: React.FC = () => {
  // interface FarmWithStakedValue extends Farm {
  //   txHash?: string
  //   block?: number
  // }
  const { path } = useRouteMatch()
  const { pathname } = useLocation()
  const TranslateString = useI18n()
  // const transactionsObject = useTransactions().filter((transaction) => transaction.pid !== 0)
  // const transactionsObject = transactions.data
  const cakePrice = usePriceCakeBusd()
  const [query, setQuery] = useState('')
  // const [viewMode, setViewMode] = useState(ViewMode.TABLE)
  const { account } = useWeb3React()
  const [sortOption, setSortOption] = useState('hot')
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [focusedInput, setFocusedInput] = useState(null)
  const [subUrl, setSubUrl] = useState("")
  const prices = useGetApiPrices()

  // const dispatch = useAppDispatch()
  const dispatch = useDispatch()
  // useEffect(() => {
    // useZapTransactionsList().then((r) => {
    //   const toSet: { [key: string]: any }[] = []
    //   r.forEach((e) => {
    //     const o = e.getObject()
    //     toSet.push(o)
    //   })
    //     // debugger // eslint-disable-line no-debugger
  
    //   dispatch<any>(getTransactions({ transactions: toSet }))
    // })
  
// },[dispatch])

  const transactionsObject = useSelector<AppState, AppState['zapTransactions']['transactionsList']>((state) => state.zapTransactions.transactionsList)
  const transactionsList = Object.values(transactionsObject)

  // debugger; // eslint-disable-line no-debugger
  const { fastRefresh } = useRefresh()

  // const transactionList = useZapTransactionsList()
  
  // debugger; // eslint-disable-line no-debugger
  // useEffect(() => {
  //   if (account) {
  //     dispatch<any>(fetchFarmUserDataAsync(account))
  //   }
  // }, [account, dispatch, fastRefresh])

  const [stakedOnly, setStakedOnly] = useState(false)
  const history = useHistory() 
  let isBondedFilter = ""
  
  useEffect(() => {
    return history.listen((location) => { 
       setSubUrl(location.pathname)
    }) 
  },[history])
  
  switch (true) {
    case subUrl.includes('bonded'):
      isBondedFilter = "bonded"
      break
    case subUrl.includes('burned'):
      isBondedFilter = "burned"
      break
    default:
      isBondedFilter = ""
      break
  }

    const bondToMintTransactions = transactionsList.filter((transaction) => transaction.action === 'bond')
    const burnToWithdrawTransactions = transactionsList.filter((transaction) => transaction.action === 'burn')


  // const successTransactions = transactionsObject.filter(
  //   (transaction) => transaction.status === 'success',
  // )

  // const failureTransactions = transactionsObject.filter(
  //   (transaction) => transaction.status === 'failure',
  // )

  const sortFarms = (transactions: Transaction[]): Transaction[] => {
    switch (sortOption) {
      case 'txHash':
        return orderBy(transactions, (farm: Transaction) => farm.txHash, 'desc')
      case 'timestamp':
        return orderBy(
          transactions,
          (transaction: Transaction) => (transaction.timestamp ? Date.parse(transaction.timestamp) : 0),
          'desc',
        )
      case 'block':
        return orderBy(transactions, (farm: Transaction) => Number(farm.block), 'desc')
      default:
        return transactions
    }
  }

  const farmsList = useCallback(
    (transactionsToDisplay: any): any => {
      /* let transactionsToDisplayWithSearch: Transaction[] = transactionsToDisplay.map((farm) => {
        if (!farm.lpTotalInQuoteToken || !prices) {
          return farm
        }

        const quoteTokenPriceUsd = prices[getAddress(farm.quoteToken.address)/* .toLowerCase()]
        const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(quoteTokenPriceUsd)
        // const apy = isActive ? getFarmApy(farm.poolWeight, cakePrice, totalLiquidity) : 0
        const apy = 0
        return { ...farm, apy, liquidity: totalLiquidity }
      }) */
      let transactionsToDisplayWithSearch: Transaction[] = transactionsToDisplay;
      if (query) {
        const lowercaseQuery = query.toLowerCase()
        transactionsToDisplayWithSearch = transactionsToDisplayWithSearch.filter((transaction: Transaction) => {
          // return farm.lpSymbol.toLowerCase().includes(lowercaseQuery)
          return transaction.txHash.toLowerCase().includes(lowercaseQuery) || String(transaction.block).includes(lowercaseQuery)
        })
      }
      return transactionsToDisplayWithSearch
    },
    // [cakePrice, prices, query, isActive],
    [query],
  )

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  let transactionsFiltered = []
  if (isBondedFilter === 'bonded') {
    transactionsFiltered = farmsList(bondToMintTransactions)
  } else if (isBondedFilter === 'burned') {
    transactionsFiltered = farmsList(burnToWithdrawTransactions)
  } else {
    transactionsFiltered = farmsList(transactionsList)
  }
  if (startDate === null && endDate === null) {
    transactionsFiltered = sortFarms(transactionsFiltered)  
  } else if(endDate === null){
    transactionsFiltered = transactionsFiltered.filter((transaction) => Date.parse(transaction.timestamp) >= Date.parse(startDate))
  } else if (startDate ===null){
    transactionsFiltered = transactionsFiltered.filter((transaction) => Date.parse(transaction.timestamp) <= Date.parse(endDate))
  } else{
    transactionsFiltered = transactionsFiltered.filter((transaction) => Date.parse(transaction.timestamp) >= Date.parse(startDate) && Date.parse(transaction.timestamp) <= Date.parse(endDate))
  }

  transactionsFiltered = sortFarms(transactionsFiltered)

  const handleSortOptionChange = (option: OptionProps): void => {
    setSortOption(option.value)
  }

  const onDatesChange = (data: any): void => {
    setStartDate(data.startDate)
    setEndDate(data.endDate)
    setFocusedInput(data.focusedInput)
  }
  
  const onFocusChange = (data: any): void => {
    setFocusedInput(data)
  }

  const rowData = transactionsFiltered.map((transaction) => {
    // const { token, quoteToken } = transaction
    // const tokenAddress = token.address
    // const quoteTokenAddress = quoteToken.address
    // const lpLabel = transaction.lpSymbol && transaction.lpSymbol.split(' ')[0].toUpperCase().replace('PANCAKE', '')

    const row: RowProps = {
      txHash: {
        txHash: transaction.txHash,
      },
      farm: {
        image: "",
        label: "",
        pid: transaction.pid,
      },
      status: {
        status: transaction.status
      },
      txAction: {
        txAction: transaction.txAction
      },
      block: {
        block: transaction.block,
      },
      timestamp: {
        timestamp: transaction.timestamp,
      },
      details: transaction,
      from: {
        from: transaction.from
      },
      to: {
        to: transaction.to
      }
    }

    return row
  })

  const renderContent = (): any => {
    // if (rowData.length) {
      const columnSchema = DesktopColumnSchema

      const columns = columnSchema.map((column) => ({
        id: column.id,
        name: column.name,
        label: column.label,
        sort: (a: RowType<RowProps>, b: RowType<RowProps>) => {
          switch (column.name) {
            case 'farm':
              return b.id - a.id
            // case 'apr':
            //   if (a.original.apr.value && b.original.apr.value) {
            //     return Number(a.original.apr.value) - Number(b.original.apr.value)
            //   }

            //   return 0
            // case 'earned':
            //   return a.original.earned.earnings - b.original.earned.earnings
            default:
              return 1
          }
        },
        sortable: column.sortable,
      }))

      return <Table data={rowData} columns={columns} />
    // }

    // return (
    //   <div>
    //     <FlexLayout>
    //       <Route exact path={`${path}`}>
    //         {farmsStaked.map((farm) => (
    //           <FarmCard key={farm.pid} farm={farm} cakePrice={cakePrice} account={account} removed={false} />
    //         ))}
    //       </Route>
    //       <Route exact path={`${path}/history`}>
    //         {farmsStaked.map((farm) => (
    //           <FarmCard key={farm.pid} farm={farm} cakePrice={cakePrice} account={account} removed />
    //         ))}
    //       </Route>
    //     </FlexLayout>
    //   </div>
    // )
  }

  return (
    <>
      <Header>
        <Heading as="h1" size="xxl" color="secondary" mb="24px">
          {TranslateString(674, 'Block Explorer')}
        </Heading>
        <Heading size="lg" color="white">
          {TranslateString(999, 'Search transaction and block data related to token bondage.')}
        </Heading>
      </Header>
      <Page>
        <ControlContainer>
          <ViewControls>
            {/* <ToggleView viewMode={viewMode} onToggle={(mode: ViewMode) => setViewMode(mode)} /> */}
            <BlockExplorerTabButtons />
          </ViewControls>
          <FilterContainer>
            <LabelWrapper style={{ marginTop: -16 }}>
              <Text>SORT BY</Text>
              <Select
                options={[
                  {
                    label: 'Hot',
                    value: 'hot',
                  },
                  {
                    label: 'Transaction Hash',
                    value: 'txHash',
                  },
                  {
                    label: 'Block',
                    value: 'block',
                  },
                  {
                    label: 'Timestamp',
                    value: 'timestamp',
                  },
                ]}
                onChange={handleSortOptionChange}
              />
            </LabelWrapper>
            <LabelWrapper style={{ marginLeft: 16, marginTop: -16 }}>
              <Text>SEARCH</Text>
              <SearchInput onChange={handleChangeQuery} value={query} />
            </LabelWrapper>
          </FilterContainer>
          <DatePickerWrapper>
            <LabelWrapper style={{ marginLeft: 5, marginTop: -16, }}>
              <Text>Date</Text> 
            </LabelWrapper>
            <DateRangeInput
              onDatesChange={onDatesChange}
              onFocusChange={onFocusChange}
              startDate={startDate}
              endDate={endDate} 
              focusedInput={focusedInput}
              showStartDateCalendarIcon={false}
              showEndDateCalendarIcon={false}
            />
          </DatePickerWrapper>
        </ControlContainer>
        {renderContent()}
        {/* <StyledImage src="/images/3dpan.png" alt="Pancake illustration" width={120} height={103} /> */}
      </Page>
    </>
  )
}

export default BlockExplorer

// const transactions = {
//   data: [
//     {
//         pid: 1,
//         lpSymbol: 'CAKE-BNB LP',
//         lpAddresses: {
//           56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
//           97: '0xe70b7523f4bffa1f2e88d2ba709afd026030f412',
//         },
//         token: {
//           symbol: 'CAKE',
//           address: {
//             56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
//             97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
//           },
//           decimals: 18,
//           projectLink: 'https://pancakeswap.finance/',
//         },
//         quoteToken: {
//           symbol: 'wBNB',
//           address: {
//             56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
//             97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
//           },
//           decimals: 18,
//           projectLink: 'https://pancakeswap.finance/',
//         },
//         tokenAmount:
//           '20143429.07538038239666016447761686802898741847641657585282104660236956106886175632716355333542328829377031',
//         quoteTokenAmount:
//           '894221.12936381968750429246435457185859496998215813103837935662424810722657881294850372841199450884323418',
//         lpTotalInQuoteToken:
//           '1788442.25872763937500858492870914371718993996431626207675871324849621445315762589700745682398901768646836',
//         tokenPriceVsQuote: '0.04439269629900059542329298291531324295021738724576932720486159095974091342640232',
//         poolWeight: '0.07659020411289396086240569831118599931068816298395435223834871519932600620380653',
//         timestamp: '03-16-2021',
//         block: 7449669,
//         txHash: '0x0014ff3441441414tff4e35a',
//         txAction: 'Bond 25232 ZAP to mint 1000 SYRUP',
//         action: 'bond',
//         status: 'Success',
//         from: '0x2d48ff3441441432tff2a12z',
//         to: '0x3z25sd3441441432tff2x56q',
//         gasInfo: '21367 Gas Used From 6000000 Gas Limit @ 1-8 ether (10 gwei)',
//         transactionFee: 0.00213637,
//         tokenTransfer: 49650.5
//       },
//       {
//         pid: 122,
//         lpSymbol: 'ITAM-BNB LP',
//         lpAddresses: {
//           56: '0xCdC53345192D0e31eEAD03D7E9e008Ee659FAEbE',
//           97: '',
//         },
//         token: {
//           symbol: 'ITAM',
//           address: {
//             56: '0x04c747b40be4d535fc83d09939fb0f626f32800b',
//             97: '',
//           },
//           decimals: 18,
//           projectLink: 'https://itam.network/',
//         },
//         quoteToken: {
//           symbol: 'wBNB',
//           address: {
//             56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
//             97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
//           },
//           decimals: 18,
//           projectLink: 'https://pancakeswap.finance/',
//         },
//         tokenAmount:
//           '37081597.50627925189982945424439174753695681157872872798403329751513631053006056110121378119055369420208938',
//         quoteTokenAmount:
//           '5912.41735418409626703884750919505422599240311297653611302964669370861210020058881201128128825402291352',
//         lpTotalInQuoteToken:
//           '11824.83470836819253407769501839010845198480622595307222605929338741722420040117762402256257650804582704',
//         tokenPriceVsQuote: '0.00015944343695502629741406531415050528067379104516526666505524234882853334957794',
//         poolWeight: '0.00191475510282234902156014245777964998276720407459885880595871787998315015509516',
//         timestamp: '03-14-2021',
//         block: 7449668,
//         txHash: '0x0014ff3441441414tff4e35f',
//         txAction: 'Bond 100 ZAP to mint 13 GROOT',
//         action: 'bond',
//         status: 'Success',
//         from: '0x2d48ff3441441432tff2a12z',
//         to: '0x3z25sd3441441432tff2x56q',
//         gasInfo: '21367 Gas Used From 6000000 Gas Limit @ 1-8 ether (10 gwei)',
//         transactionFee: 0.00213637,
//         tokenTransfer: 49650.5
//       },
//       {
//         pid: 121,
//         lpSymbol: 'BONDLY-BNB LP',
//         lpAddresses: {
//           56: '0x67581bfb4fc13bb73c71489b504e9b5354769063',
//           97: '',
//         },
//         token: {
//           symbol: 'BONDLY',
//           address: {
//             56: '0x96058f8c3e16576d9bd68766f3836d9a33158f89',
//             97: '',
//           },
//           decimals: 18,
//           projectLink: 'https://www.bondly.finance/',
//         },
//         quoteToken: {
//           symbol: 'wBNB',
//           address: {
//             56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
//             97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
//           },
//           decimals: 18,
//           projectLink: 'https://pancakeswap.finance/',
//         },
//         tokenAmount:
//           '8442906.73412585765068524652663045575667506665833640216295283470523605424153960674188631586082950201750331',
//         quoteTokenAmount:
//           '7658.38229346526457038532233812196809702365842801529874985018283765261377608318516685995142975255143316',
//         lpTotalInQuoteToken:
//           '15316.76458693052914077064467624393619404731685603059749970036567530522755216637033371990285950510286632',
//         tokenPriceVsQuote: '0.00090707886923711003472952846334674200400467571525402297384512001696058105374343',
//         poolWeight: '0.00191475510282234902156014245777964998276720407459885880595871787998315015509516',
//         timestamp: '02-21-2021',
//         block: 7449666,
//         txHash: '0x0014ff3441441414tff4e34f',
//         txAction: 'Bond 9999 ZAP to mint 4200 TADA',
//         action: 'bond',
//         status: 'Failure',
//         from: '0x2d48ff3441441432tff2a12z',
//         to: '0x3z25sd3441441432tff2x56q',
//         gasInfo: '21367 Gas Used From 6000000 Gas Limit @ 1-8 ether (10 gwei)',
//         transactionFee: 0.00213637,
//         tokenTransfer: 49650.5
//       },
//       {
//         pid: 120,
//         lpSymbol: 'TKO-BNB LP',
//         lpAddresses: {
//           56: '0x496a8b716A3A3410B16e71E3c906968CE4488e52',
//           97: '',
//         },
//         token: {
//           symbol: 'TKO',
//           address: {
//             56: '0x9f589e3eabe42ebc94a44727b3f3531c0c877809',
//             97: '',
//           },
//           decimals: 18,
//           projectLink: 'https://www.tokocrypto.com/',
//         },
//         quoteToken: {
//           symbol: 'wBNB',
//           address: {
//             56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
//             97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
//           },
//           decimals: 18,
//           projectLink: 'https://pancakeswap.finance/',
//         },
//         tokenAmount:
//           '3507954.11648468110600448744875990799086696185816396792505141607981817392008638645129286594127090306856982',
//         quoteTokenAmount:
//           '13991.93529423273296709097757711525870115283326662043741828162951628218541338394297657113649642462662384',
//         lpTotalInQuoteToken:
//           '27983.87058846546593418195515423051740230566653324087483656325903256437082676788595314227299284925324768',
//         tokenPriceVsQuote: '0.00398863121626403815190269712165747982563057511356832249567331661930136164707911',
//         poolWeight: '0.00191475510282234902156014245777964998276720407459885880595871787998315015509516',
//         timestamp: '09-18-2020',
//         block: 7449666,
//         txHash: '0x0014ff3441441414tff4e33f',
//         txAction: 'Burn 1000 SYRUP to withdraw 100 ZAP',
//         action: 'burn',
//         status: 'Success',
//         from: '0x2d48ff3441441432tff2a12z',
//         to: '0x3z25sd3441441432tff2x56q',
//         gasInfo: '21367 Gas Used From 6000000 Gas Limit @ 1-8 ether (10 gwei)',
//         transactionFee: 0.00213637,
//         tokenTransfer: 49650.5
//       },
//       {
//         pid: 119,
//         lpSymbol: 'APYS-BNB LP',
//         lpAddresses: {
//           56: '0xE5783Cc9dFb3E7e474B81B07369a008e80F1cEdb',
//           97: '',
//         },
//         token: {
//           symbol: 'APYS',
//           address: {
//             56: '0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7',
//             97: '',
//           },
//           decimals: 18,
//           projectLink: 'https://apyswap.com/',
//         },
//         quoteToken: {
//           symbol: 'wBNB',
//           address: {
//             56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
//             97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
//           },
//           decimals: 18,
//           projectLink: 'https://pancakeswap.finance/',
//         },
//         tokenAmount:
//           '1107597.39888731873852682713653222370238157213727933115968734509623745394039947914981101663527523715991348',
//         quoteTokenAmount:
//           '5324.86037939676857953215384546886371890312848201667042939153769446660716026228413073711948269710793988',
//         lpTotalInQuoteToken:
//           '10649.72075879353715906430769093772743780625696403334085878307538893321432052456826147423896539421587976',
//         tokenPriceVsQuote: '0.00480757754103257196389082395079467056700189097774510331317543148912326706134401',
//         poolWeight: '0.00191475510282234902156014245777964998276720407459885880595871787998315015509516',
//         timestamp: '03-18-2021',
//         block: 7449665,
//         txHash: '0x0014ff3441441414tff4e32f',
//         txAction: 'Burn 2000 SYRUP to withdraw 200 ZAP',
//         action: 'burn',
//         status: 'Success',
//         from: '0x2d48ff3441441432tff2a12z',
//         to: '0x3z25sd3441441432tff2x56q',
//         gasInfo: '21367 Gas Used From 6000000 Gas Limit @ 1-8 ether (10 gwei)',
//         transactionFee: 0.00213637,
//         tokenTransfer: 49650.5
//       },
//       {
//         pid: 118,
//         lpSymbol: 'HOO-BUSD LP',
//         lpAddresses: {
//           56: '0x3c9e55edbd937ae0ad8c084a1a8302110612a371',
//           97: '',
//         },
//         token: {
//           symbol: 'HOO',
//           address: {
//             56: '0xe1d1f66215998786110ba0102ef558b22224c016',
//             97: '',
//           },
//           decimals: 8,
//           projectLink: 'https://hoo.com/',
//         },
//         quoteToken: {
//           symbol: 'BUSD',
//           address: {
//             56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
//             97: '',
//           },
//           decimals: 18,
//           projectLink: 'https://www.paxos.com/busd/',
//         },
//         tokenAmount: '4145291.77346191912719612079231689364811911908519234186572033187156266453779956441071800512966',
//         quoteTokenAmount:
//           '3273504.4255287141996301541085517313661746508995701903792400302537142070130212885896150175335251664683416',
//         lpTotalInQuoteToken:
//           '6547008.8510574283992603082171034627323493017991403807584800605074284140260425771792300350670503329366832',
//         tokenPriceVsQuote: '0.78969216268095497582986430565997801044934893243980835165441433131329584606945991',
//         poolWeight: '0.00191475510282234902156014245777964998276720407459885880595871787998315015509516',
//         timestamp: '03-18-2021',
//         block: 7449664,
//         txHash: '0x0014ff3441441414tff4e31f',
//         txAction: 'Bond 20 ZAP to mint 5 NEMO',
//         action: 'bond',
//         status: 'Failure',
//         from: '0x2d48ff3441441432tff2a12z',
//         to: '0x3z25sd3441441432tff2x56q',
//         gasInfo: '21367 Gas Used From 6000000 Gas Limit @ 1-8 ether (10 gwei)',
//         transactionFee: 0.00213637,
//         tokenTransfer: 49650.5
//       },
//       {
//         pid: 117,
//         lpSymbol: 'ODDZ-BNB LP',
//         lpAddresses: {
//           56: '0x61376b56ff33c618b115131712a4138f98810a6a',
//           97: '',
//         },
//         token: {
//           symbol: 'ODDZ',
//           address: {
//             56: '0xcd40f2670cf58720b694968698a5514e924f742d',
//             97: '',
//           },
//           decimals: 18,
//           projectLink: 'https://oddz.fi/',
//         },
//         quoteToken: {
//           symbol: 'wBNB',
//           address: {
//             56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
//             97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
//           },
//           decimals: 18,
//           projectLink: 'https://pancakeswap.finance/',
//         },
//         tokenAmount:
//           '1094659.2711938016952296742189160746533075117077823441174383811586403332699033489934741279145874126588533',
//         quoteTokenAmount:
//           '5370.7507816037823123790210048796511019965942159404811167971900314837301339279053858740534060485851331',
//         lpTotalInQuoteToken:
//           '10741.5015632075646247580420097593022039931884318809622335943800629674602678558107717481068120971702662',
//         tokenPriceVsQuote: '0.00490632192403267811556219953216956132327242217912869785435528623119280845733684',
//         poolWeight: '0.00191475510282234902156014245777964998276720407459885880595871787998315015509516',
//         timestamp: '03-18-2021',
//         block: 7449663,
//         txHash: '0x0014ff3441441414tff4e30f',
//         txAction: 'Burn 1000 SYRUP to withdraw 100 ZAP',
//         action: 'burn',
//         status: 'Success',
//         from: '0x2d48ff3441441432tff2a12z',
//         to: '0x3z25sd3441441432tff2x56q',
//         gasInfo: '21367 Gas Used From 6000000 Gas Limit @ 1-8 ether (10 gwei)',
//         transactionFee: 0.00213637,
//         tokenTransfer: 49650.5
//       },
//   ]
// }