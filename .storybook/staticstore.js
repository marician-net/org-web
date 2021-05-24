import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { createStore } from '@reduxjs/toolkit'
import withReduxEnhancer from 'addon-redux/enhancer'

export const store = createStore(() => {}, withReduxEnhancer)

export const intState = {
  zapLabs: {
    registered: {
      NaN: {},
      '0xaD0Adf0C81E9c18D5DE0D6D5555A909c6435062D': {
        providerTitle: 'P Diddy Twitter',
        providerAddress: '0xaD0Adf0C81E9c18D5DE0D6D5555A909c6435062D',
        name: '',
      },
      '0x2416002D127175BC2d627FAefdaA4186c7c49833exp33': {
        providerTitle: 'TokenDotFactory',
        providerAddress: '0x2416002D127175BC2d627FAefdaA4186c7c49833',
        name: 'exp33',
      },
      '0x2416002D127175BC2d627FAefdaA4186c7c49833TestEndpoint1': {
        providerTitle: 'TokenDotFactory',
        providerAddress: '0x2416002D127175BC2d627FAefdaA4186c7c49833',
        name: 'TestEndpoint1',
      },
      '0x2416002D127175BC2d627FAefdaA4186c7c49833exp9': {
        providerTitle: 'TokenDotFactory',
        providerAddress: '0x2416002D127175BC2d627FAefdaA4186c7c49833',
        name: 'exp9',
      },
      '0x2521Bd362fA87733959C1CC079052CdF8B3AAD86': {
        providerTitle: 'MaxFinance',
        providerAddress: '0x2521Bd362fA87733959C1CC079052CdF8B3AAD86',
        name: '',
      },
      '0x9c7FFB5f189748671E18B25Abc206B998E39B356': {
        providerTitle: 'P2Fintech',
        providerAddress: '0x9c7FFB5f189748671E18B25Abc206B998E39B356',
        name: '',
      },
      '0xb8b04Cb3B774C20cff75A1D829d94Ee967168aCC': {
        providerTitle: 'P2Stocks',
        providerAddress: '0xb8b04Cb3B774C20cff75A1D829d94Ee967168aCC',
        name: '',
      },
      '0xb8b04Cb3B774C20cff75A1D829d94Ee967168aCCIEXQuotes': {
        providerTitle: 'P2Stocks',
        providerAddress: '0xb8b04Cb3B774C20cff75A1D829d94Ee967168aCC',
        name: 'IEXQuotes',
      },
      '0xfdd1F743679ccA49864137eB0dc5787b2A19Ac43': {
        providerTitle: 'MarketSignals',
        providerAddress: '0xfdd1F743679ccA49864137eB0dc5787b2A19Ac43',
        name: '',
      },
      '0xfdd1F743679ccA49864137eB0dc5787b2A19Ac43BinanceSignal': {
        providerTitle: 'MarketSignals',
        providerAddress: '0xfdd1F743679ccA49864137eB0dc5787b2A19Ac43',
        name: 'BinanceSignal',
      },
      '0xfdd1F743679ccA49864137eB0dc5787b2A19Ac43TrendSignals': {
        providerTitle: 'MarketSignals',
        providerAddress: '0xfdd1F743679ccA49864137eB0dc5787b2A19Ac43',
        name: 'TrendSignals',
      },
      '0xfdd1F743679ccA49864137eB0dc5787b2A19Ac43Bittrex': {
        providerTitle: 'MarketSignals',
        providerAddress: '0xfdd1F743679ccA49864137eB0dc5787b2A19Ac43',
        name: 'Bittrex',
      },
      '0x33b35c665496bA8E71B22373843376740401F106': {
        providerTitle: 'Fomobot',
        providerAddress: '0x33b35c665496bA8E71B22373843376740401F106',
        name: '',
      },
      '0xBBC099b5803bf501CfAb8A600b80C01BE375F9C7': {
        providerTitle: 'CryptoPrices',
        providerAddress: '0xBBC099b5803bf501CfAb8A600b80C01BE375F9C7',
        name: '',
      },
      '0xBBC099b5803bf501CfAb8A600b80C01BE375F9C7Binance': {
        providerTitle: 'CryptoPrices',
        providerAddress: '0xBBC099b5803bf501CfAb8A600b80C01BE375F9C7',
        name: 'Binance',
      },
      '0xBBC099b5803bf501CfAb8A600b80C01BE375F9C7Bittrex': {
        providerTitle: 'CryptoPrices',
        providerAddress: '0xBBC099b5803bf501CfAb8A600b80C01BE375F9C7',
        name: 'Bittrex',
      },
      '0x9097027F3F23Af560cf2A0399FbCEEd4607b3904ERCX2': {
        providerTitle: 'TokenDotFactory',
        providerAddress: '0x9097027F3F23Af560cf2A0399FbCEEd4607b3904',
        name: 'ERCX2',
      },
      '0x9097027F3F23Af560cf2A0399FbCEEd4607b3904"U': {
        providerTitle: 'TokenDotFactory',
        providerAddress: '0x9097027F3F23Af560cf2A0399FbCEEd4607b3904',
        name: '"U',
      },
      '0x699cA8A26fb4792D7645AD0fd55e50F3DC059E77endPoint2': {
        providerTitle: 'TokenDotFactory',
        providerAddress: '0x699cA8A26fb4792D7645AD0fd55e50F3DC059E77',
        name: 'endPoint2',
      },
      '0x699cA8A26fb4792D7645AD0fd55e50F3DC059E77Git': {
        providerTitle: 'TokenDotFactory',
        providerAddress: '0x699cA8A26fb4792D7645AD0fd55e50F3DC059E77',
        name: 'Git',
      },
      '0x798196B74C94b9F20066ff1C4B09c24BED94e6a4TheBest': {
        providerTitle: 'testing123',
        providerAddress: '0x798196B74C94b9F20066ff1C4B09c24BED94e6a4',
        name: 'TheBest',
      },
      '0xF02491e199565B9822ECf001eB6a336959D655C8': {
        providerTitle: 'CoinCap.io',
        providerAddress: '0xF02491e199565B9822ECf001eB6a336959D655C8',
        name: '',
      },
      '0xF02491e199565B9822ECf001eB6a336959D655C8CoinCap.io Datafeed': {
        providerTitle: 'CoinCap.io',
        providerAddress: '0xF02491e199565B9822ECf001eB6a336959D655C8',
        providerParams: {
          'CoinCap.io API.md': 'https://ipfs.io/ipfs/QmUp3u4rvJTkbvJRqo1zJzjYAo1mbeihUKYAcKBmAQ2ZEy',
          'CoinCap.io Datafeed.md': 'https://gateway.ipfs.io/ipfs/QmP9t2yobZwrNcu91QR7zHXx3KjnJmaACPB3KTFnFo7RAj',
          'CoinCap.io Datafeed.json': '',
        },
        brokerAddress: '0x0000000000000000000000000000000000000000',
        name: 'CoinCap.io Datafeed',
        curve: ['2', '7000000000000000000', '1000000000000000', '1000000'],
        totalBound: '26407',
        dotLimit: '1000000',
        spotPrice: '33.408',
        markdown: '',
        json: '',
        userBound: '0',
        zapBound: '533527028000000000000000',
        isToken: false,
        symbol: '',
        tokenAddress: '',
        isTDFOwner: false,
      },
      '0x64BB5fd654740004Fc9297Ae09AD5Bfc4b5A0E17BTC_DOWN': {
        providerTitle: 'UPorDown',
        providerAddress: '0x64BB5fd654740004Fc9297Ae09AD5Bfc4b5A0E17',
        name: 'BTC_DOWN',
      },
      '0x664201F2771211E4F890B64Ac8f1D65c47520864BTC_DOWN': {
        providerTitle: 'PriceContest',
        providerAddress: '0x664201F2771211E4F890B64Ac8f1D65c47520864',
        name: 'BTC_DOWN',
      },
      '0x3d98e87F01BC2F5ed1Ed7B6e629CA4E800EF6A1EBTC_DOWN': {
        providerTitle: 'PriceContest',
        providerAddress: '0x3d98e87F01BC2F5ed1Ed7B6e629CA4E800EF6A1E',
        name: 'BTC_DOWN',
      },
      '0xb7bb94De3FC589353c5D807CEc8C013b49d636A0EOS_DOWN': {
        providerTitle: 'EOS_OPTION',
        providerAddress: '0xb7bb94De3FC589353c5D807CEc8C013b49d636A0',
        name: 'EOS_DOWN',
      },
      '0x4549035F938bAC8b512D2623583D6753437EC292BTC_DOWN': {
        providerTitle: 'BTC_OPTION',
        providerAddress: '0x4549035F938bAC8b512D2623583D6753437EC292',
        name: 'BTC_DOWN',
      },
      '0x64A0fbF12AD9644Db64d159a64A0e9A883517d86btc_down': {
        providerTitle: 'SampleContest',
        providerAddress: '0x64A0fbF12AD9644Db64d159a64A0e9A883517d86',
        name: 'btc_down',
      },
      '0x3065A9fA273046F4eF5522514F6166a1b7A0A1cAbtc_down': {
        providerTitle: 'CryptoWager',
        providerAddress: '0x3065A9fA273046F4eF5522514F6166a1b7A0A1cA',
        name: 'btc_down',
      },
      '0x478Fba1441470151ED734BFFe8089Fb573393f8CBinance': {
        providerTitle: 'CryptoPrices',
        providerAddress: '0x478Fba1441470151ED734BFFe8089Fb573393f8C',
        name: 'Binance',
      },
      '0xFc9b720E586e8d1e4C022EC940a32e23807478fBcontracttesters/gitcontest': {
        providerTitle: 'TokenDotFactory',
        providerAddress: '0xFc9b720E586e8d1e4C022EC940a32e23807478fB',
        name: 'contracttesters/gitcontest',
      },
      '0xFc9b720E586e8d1e4C022EC940a32e23807478fBcontracttesters/candidate': {
        providerTitle: 'TokenDotFactory',
        providerAddress: '0xFc9b720E586e8d1e4C022EC940a32e23807478fB',
        name: 'contracttesters/candidate',
      },
      '0x7a18b4A1e5dC96C01C8342e47c12dc71715bD8bdRecommendedIdexEndpoint': {
        providerTitle: 'CEX.IO API',
        providerAddress: '0x7a18b4A1e5dC96C01C8342e47c12dc71715bD8bd',
        name: 'RecommendedIdexEndpoint',
      },
      '0x7a18b4A1e5dC96C01C8342e47c12dc71715bD8bdBtcEndpoint': {
        providerTitle: 'CEX.IO API',
        providerAddress: '0x7a18b4A1e5dC96C01C8342e47c12dc71715bD8bd',
        name: 'BtcEndpoint',
      },
      '0x7a18b4A1e5dC96C01C8342e47c12dc71715bD8bdEthEndpoint': {
        providerTitle: 'CEX.IO API',
        providerAddress: '0x7a18b4A1e5dC96C01C8342e47c12dc71715bD8bd',
        name: 'EthEndpoint',
      },
      '0xD5E8c175EC8dc148BEcd44B0E7836cceBb4d97F4P0': {
        providerTitle: 'HackathonFactory',
        providerAddress: '0xD5E8c175EC8dc148BEcd44B0E7836cceBb4d97F4',
        name: 'P0',
      },
      '0xD5E8c175EC8dc148BEcd44B0E7836cceBb4d97F4T0': {
        providerTitle: 'HackathonFactory',
        providerAddress: '0xD5E8c175EC8dc148BEcd44B0E7836cceBb4d97F4',
        name: 'T0',
      },
      '0xD5E8c175EC8dc148BEcd44B0E7836cceBb4d97F4T1': {
        providerTitle: 'HackathonFactory',
        providerAddress: '0xD5E8c175EC8dc148BEcd44B0E7836cceBb4d97F4',
        name: 'T1',
      },
      '0xD5E8c175EC8dc148BEcd44B0E7836cceBb4d97F4T2': {
        providerTitle: 'HackathonFactory',
        providerAddress: '0xD5E8c175EC8dc148BEcd44B0E7836cceBb4d97F4',
        name: 'T2',
      },
      '0xD5E8c175EC8dc148BEcd44B0E7836cceBb4d97F4T3': {
        providerTitle: 'HackathonFactory',
        providerAddress: '0xD5E8c175EC8dc148BEcd44B0E7836cceBb4d97F4',
        name: 'T3',
      },
      '0xD5E8c175EC8dc148BEcd44B0E7836cceBb4d97F4T4': {
        providerTitle: 'HackathonFactory',
        providerAddress: '0xD5E8c175EC8dc148BEcd44B0E7836cceBb4d97F4',
        name: 'T4',
      },
      '0xD5E8c175EC8dc148BEcd44B0E7836cceBb4d97F4T5': {
        providerTitle: 'HackathonFactory',
        providerAddress: '0xD5E8c175EC8dc148BEcd44B0E7836cceBb4d97F4',
        name: 'T5',
      },
      '0xD5E8c175EC8dc148BEcd44B0E7836cceBb4d97F4T6': {
        providerTitle: 'HackathonFactory',
        providerAddress: '0xD5E8c175EC8dc148BEcd44B0E7836cceBb4d97F4',
        name: 'T6',
      },
      '0xD5E8c175EC8dc148BEcd44B0E7836cceBb4d97F4T7': {
        providerTitle: 'HackathonFactory',
        providerAddress: '0xD5E8c175EC8dc148BEcd44B0E7836cceBb4d97F4',
        name: 'T7',
      },
      '0x4269B593f401d4E6492574d27B03AD7aEc5AD439pressure': {
        providerTitle: 'StrangeLoop',
        providerAddress: '0x4269B593f401d4E6492574d27B03AD7aEc5AD439',
        name: 'pressure',
      },
    },
  },
  zapTransactions: {
    transactionsList: {
      '0x77a919c27d41f6629045a0007b991185d7fe831c11d7683e72dca224d7b73802': {
        txHash: '0x77a919c27d41f6629045a0007b991185d7fe831c11d7683e72dca224d7b73802',
        block: 12312406,
        timestamp: '2021-04-25 23:22:27',
        status: 'Success',
        from: '0xBD3A6ca44F66446E485663A89C227F393EC0A1ca',
        to: '0x64653F7236d318D00f1f6aEFe92191F7381d6F2f',
        transactionFee: 600758662011212200,
        gasInfo: '14970622 Gas Used From 14977970 Gas Limit @ 40129171788 ether (40129171788000000000 gwei)',
        action: 'bond',
        txAction: 'to',
      },
      '0x453bfe03660a97248d369ab6cd2d44ad0d888d17c86a048a20aee6da447acf5a': {
        txHash: '0x453bfe03660a97248d369ab6cd2d44ad0d888d17c86a048a20aee6da447acf5a',
        block: 12298183,
        timestamp: '2021-04-23 18:44:27',
        status: 'Success',
        from: '0xBD3A6ca44F66446E485663A89C227F393EC0A1ca',
        to: '0xd66b902C04DCc3C4d48e09e35e051Fc669BB3280',
        transactionFee: 1096898300000000000,
        gasInfo: '14822950 Gas Used From 14873921 Gas Limit @ 74000000000 ether (74000000000000000000 gwei)',
        action: 'bond',
        txAction: 'to',
      },
      '0xdc67ad865ad65d208bcf3069c6ee642a4cd5b573d554cfb89da4d33500baea7a': {
        txHash: '0xdc67ad865ad65d208bcf3069c6ee642a4cd5b573d554cfb89da4d33500baea7a',
        block: 12298165,
        timestamp: '2021-04-23 18:40:57',
        status: 'Success',
        from: '0xBD3A6ca44F66446E485663A89C227F393EC0A1ca',
        to: '0x58E796CFB77457fe769AdB4170F0aa05c89BdF7a',
        transactionFee: 1099150892400000000,
        gasInfo: '14913852 Gas Used From 14924999 Gas Limit @ 73700000000 ether (73700000000000000000 gwei)',
        action: 'bond',
        txAction: 'to',
      },
      '0x572449163e6de57f628c8b5d767e30f76d2913ca7763221f5db3a2eaf9c64db0': {
        txHash: '0x572449163e6de57f628c8b5d767e30f76d2913ca7763221f5db3a2eaf9c64db0',
        block: 12267535,
        timestamp: '2021-04-19 01:14:15',
        status: 'Success',
        from: '0x3BFcc944f19b17E838bcE4C41216e73D6e950A12',
        to: '0xd66b902C04DCc3C4d48e09e35e051Fc669BB3280',
        transactionFee: 1173307548211230700,
        gasInfo: '12481995 Gas Used From 12493829 Gas Limit @ 94000001459 ether (94000001459000000000 gwei)',
        action: 'bond',
        txAction: 'to',
      },
      '0x6daa0fa2637e4b3db0d1b8b4419477e7d2a209142e7b106b1e7abaade3aaf84f': {
        txHash: '0x6daa0fa2637e4b3db0d1b8b4419477e7d2a209142e7b106b1e7abaade3aaf84f',
        block: 12267535,
        timestamp: '2021-04-19 01:14:15',
        status: 'Success',
        from: '0x3BFcc944f19b17E838bcE4C41216e73D6e950A12',
        to: '0xd66b902C04DCc3C4d48e09e35e051Fc669BB3280',
        transactionFee: 1173307548211230700,
        gasInfo: '12481995 Gas Used From 12493829 Gas Limit @ 94000001459 ether (94000001459000000000 gwei)',
        action: 'bond',
        txAction: 'to',
      },
      '0xdbf1fcb9eb5403203c15a8224276c3a2d51f20feab69cc1d1a688a9e467c9a2d': {
        txHash: '0xdbf1fcb9eb5403203c15a8224276c3a2d51f20feab69cc1d1a688a9e467c9a2d',
        block: 12263770,
        timestamp: '2021-04-18 11:19:41',
        status: 'Success',
        from: '0x5F5141BEf3850fB85811c1fC10fE65D2803192Bd',
        to: '0x58E796CFB77457fe769AdB4170F0aa05c89BdF7a',
        transactionFee: 1385586693000000000,
        gasInfo: '12482763 Gas Used From 12487794 Gas Limit @ 111000000000 ether (111000000000000000000 gwei)',
        action: 'bond',
        txAction: 'to',
      },
      '0x00811aed38b9a445b076885d9f355a42bb5819271790e209b92d7929fcc481c3': {
        txHash: '0x00811aed38b9a445b076885d9f355a42bb5819271790e209b92d7929fcc481c3',
        block: 12261135,
        timestamp: '2021-04-18 01:30:23',
        status: 'Success',
        from: '0xBD3A6ca44F66446E485663A89C227F393EC0A1ca',
        to: '0xd66b902C04DCc3C4d48e09e35e051Fc669BB3280',
        transactionFee: 1566902750000000000,
        gasInfo: '12535222 Gas Used From 12536395 Gas Limit @ 125000000000 ether (125000000000000000000 gwei)',
        action: 'bond',
        txAction: 'to',
      },
      '0x87e904b2a3cfd1e4590c4e40b845e5f2622cdc058a4d832cfc92fc4456885082': {
        txHash: '0x87e904b2a3cfd1e4590c4e40b845e5f2622cdc058a4d832cfc92fc4456885082',
        block: 12260032,
        timestamp: '2021-04-17 21:31:01',
        status: 'Success',
        from: '0x98239C9F3Af10a449C5d74F97945f10B99a672c7',
        to: '0x58E796CFB77457fe769AdB4170F0aa05c89BdF7a',
        transactionFee: 1572991056000000000,
        gasInfo: '12484056 Gas Used From 12500000 Gas Limit @ 126000000000 ether (126000000000000000000 gwei)',
        action: 'bond',
        txAction: 'to',
      },
      '0xf60d515b1cbd37892879e94519d775117412f46c5e27ba60ab50c6a9ba25fa36': {
        txHash: '0xf60d515b1cbd37892879e94519d775117412f46c5e27ba60ab50c6a9ba25fa36',
        block: 12259058,
        timestamp: '2021-04-17 17:52:25',
        status: 'Success',
        from: '0xBD3A6ca44F66446E485663A89C227F393EC0A1ca',
        to: '0x64653F7236d318D00f1f6aEFe92191F7381d6F2f',
        transactionFee: 1420525842000000000,
        gasInfo: '12460753 Gas Used From 12481683 Gas Limit @ 114000000000 ether (114000000000000000000 gwei)',
        action: 'bond',
        txAction: 'to',
      },
    },
  },
  farms: {
    data: [
      {
        pid: 0,
        lpSymbol: 'CAKE',
        lpAddresses: {
          56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
          97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
        },
        token: {
          symbol: 'SYRUP',
          address: {
            56: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
            97: '0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 1,
        lpSymbol: 'CAKE-BNB LP',
        lpAddresses: {
          56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
          97: '0xe70b7523f4bffa1f2e88d2ba709afd026030f412',
        },
        token: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 122,
        lpSymbol: 'ITAM-BNB LP',
        lpAddresses: {
          56: '0xCdC53345192D0e31eEAD03D7E9e008Ee659FAEbE',
          97: '',
        },
        token: {
          symbol: 'ITAM',
          address: {
            56: '0x04c747b40be4d535fc83d09939fb0f626f32800b',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://itam.network/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 121,
        lpSymbol: 'BONDLY-BNB LP',
        lpAddresses: {
          56: '0x67581bfb4fc13bb73c71489b504e9b5354769063',
          97: '',
        },
        token: {
          symbol: 'BONDLY',
          address: {
            56: '0x96058f8c3e16576d9bd68766f3836d9a33158f89',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.bondly.finance/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 120,
        lpSymbol: 'TKO-BNB LP',
        lpAddresses: {
          56: '0x496a8b716A3A3410B16e71E3c906968CE4488e52',
          97: '',
        },
        token: {
          symbol: 'TKO',
          address: {
            56: '0x9f589e3eabe42ebc94a44727b3f3531c0c877809',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.tokocrypto.com/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 119,
        lpSymbol: 'APYS-BNB LP',
        lpAddresses: {
          56: '0xE5783Cc9dFb3E7e474B81B07369a008e80F1cEdb',
          97: '',
        },
        token: {
          symbol: 'APYS',
          address: {
            56: '0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://apyswap.com/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 118,
        lpSymbol: 'HOO-BUSD LP',
        lpAddresses: {
          56: '0x3c9e55edbd937ae0ad8c084a1a8302110612a371',
          97: '',
        },
        token: {
          symbol: 'HOO',
          address: {
            56: '0xe1d1f66215998786110ba0102ef558b22224c016',
            97: '',
          },
          decimals: 8,
          projectLink: 'https://hoo.com/',
        },
        quoteToken: {
          symbol: 'BUSD',
          address: {
            56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.paxos.com/busd/',
        },
      },
      {
        pid: 117,
        lpSymbol: 'ODDZ-BNB LP',
        lpAddresses: {
          56: '0x61376b56ff33c618b115131712a4138f98810a6a',
          97: '',
        },
        token: {
          symbol: 'ODDZ',
          address: {
            56: '0xcd40f2670cf58720b694968698a5514e924f742d',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://oddz.fi/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 116,
        lpSymbol: 'EASY-BNB LP',
        lpAddresses: {
          56: '0xbd1ec00b0d1cca9d5b28fbe0bb7d664238af2ffa',
          97: '',
        },
        token: {
          symbol: 'EASY',
          address: {
            56: '0x7c17c8bed8d14bacce824d020f994f4880d6ab3b',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://easyfi.network/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 115,
        lpSymbol: 'NRV-BNB LP',
        lpAddresses: {
          56: '0x5a805994a2e30ac710e7376ccc0211285bd4dd92',
          97: '',
        },
        token: {
          symbol: 'NRV',
          address: {
            56: '0x42f6f551ae042cbe50c739158b4f0cac0edb9096',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://nerve.fi/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 114,
        lpSymbol: 'DEGO-BNB LP',
        lpAddresses: {
          56: '0x17F0b998B81cE75074a7CDAdAe6D63Da3cb23572',
          97: '',
        },
        token: {
          symbol: 'DEGO',
          address: {
            56: '0x3fda9383a84c05ec8f7630fe10adf1fac13241cc',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://bsc.dego.finance/home',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 113,
        lpSymbol: 'GUM-BNB LP',
        lpAddresses: {
          56: '0x155645cDF8e4B28d5B7790b65d9f79efc222740C',
          97: '',
        },
        token: {
          symbol: 'GUM',
          address: {
            56: '0xc53708664b99DF348dd27C3Ac0759d2DA9c40462',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://gourmetgalaxy.io/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 112,
        lpSymbol: 'pBTC-BNB LP',
        lpAddresses: {
          56: '0xb5f6f7dad23132d40d778085d795bd0fd4b859cd',
          97: '',
        },
        token: {
          symbol: 'pBTC',
          address: {
            56: '0xed28a457a5a76596ac48d87c0f577020f6ea1c4c',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://ptokens.io/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 111,
        lpSymbol: 'DFT-BNB LP',
        lpAddresses: {
          56: '0x8FbCbD7e30b1733965a8980bf7Ae2ca1c0C456cc',
          97: '',
        },
        token: {
          symbol: 'DFT',
          address: {
            56: '0x42712dF5009c20fee340B245b510c0395896cF6e',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.dfuture.com/home',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 110,
        lpSymbol: 'SWTH-BNB LP',
        lpAddresses: {
          56: '0x8c5cFfad6cddb96Ee33DA685D0d50a37e030E115',
          97: '',
        },
        token: {
          symbol: 'SWTH',
          address: {
            56: '0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C',
            97: '',
          },
          decimals: 8,
          projectLink: 'https://switcheo.network/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 109,
        lpSymbol: 'LIEN-BNB LP',
        lpAddresses: {
          56: '0xcd14855150335AAE984aa6D281E090c27035C692',
          97: '',
        },
        token: {
          symbol: 'LIEN',
          address: {
            56: '0x5d684adaf3fcfe9cfb5cede3abf02f0cdd1012e3',
            97: '',
          },
          decimals: 8,
          projectLink: 'https://lien.finance/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 108,
        lpSymbol: 'ZIL-BNB LP',
        lpAddresses: {
          56: '0xc746337b5f800a0e19ed4eb3bda03ff1401b8167',
          97: '',
        },
        token: {
          symbol: 'ZIL',
          address: {
            56: '0xb86abcb37c3a4b64f74f59301aff131a1becc787',
            97: '',
          },
          decimals: 12,
          projectLink: 'https://www.zilliqa.com/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 107,
        lpSymbol: 'pCWS-BNB LP',
        lpAddresses: {
          56: '0x889e81d25bffba437b2a5d3e0e4fc58a0e2749c5',
          97: '',
        },
        token: {
          symbol: 'pCWS',
          address: {
            56: '0xbcf39f0edda668c58371e519af37ca705f2bfcbd',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://game.seascape.network/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 106,
        lpSymbol: 'bBADGER-BTCB LP',
        lpAddresses: {
          56: '0x10F461CEAC7A17F59e249954Db0784d42EfF5DB5',
          97: '',
        },
        token: {
          symbol: 'bBadger',
          address: {
            56: '0x1f7216fdb338247512ec99715587bb97bbf96eae',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://badger.finance/',
        },
        quoteToken: {
          symbol: 'BTCB',
          address: {
            56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://bitcoin.org/',
        },
      },
      {
        pid: 104,
        lpSymbol: 'bDIGG-BTCB LP',
        lpAddresses: {
          56: '0xE1E33459505bB3763843a426F7Fd9933418184ae',
          97: '',
        },
        token: {
          symbol: 'bDIGG',
          address: {
            56: '0x5986d5c77c65e5801a5caa4fae80089f870a71da',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://badger.finance/',
        },
        quoteToken: {
          symbol: 'BTCB',
          address: {
            56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://bitcoin.org/',
        },
      },
      {
        pid: 103,
        lpSymbol: 'LTO-BNB LP',
        lpAddresses: {
          56: '0x85644fcd00c401e1a0a0a10d2ae6bbe04a73e4ab',
          97: '',
        },
        token: {
          symbol: 'LTO',
          address: {
            56: '0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://ltonetwork.com/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 102,
        lpSymbol: 'MIR-UST LP',
        lpAddresses: {
          56: '0xf64a269F0A06dA07D23F43c1Deb217101ee6Bee7',
          97: '',
        },
        token: {
          symbol: 'MIR',
          address: {
            56: '0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://mirror.finance/',
        },
        quoteToken: {
          symbol: 'UST',
          address: {
            56: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://mirror.finance/',
        },
      },
      {
        pid: 101,
        lpSymbol: 'TRADE-BNB LP',
        lpAddresses: {
          56: '0x2562f94E90dE6D9eb4fB6B3b8Eab56b15Aa4FC72',
          97: '',
        },
        token: {
          symbol: 'TRADE',
          address: {
            56: '0x7af173f350d916358af3e218bdf2178494beb748',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://unitrade.app/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 100,
        lpSymbol: 'DUSK-BNB LP',
        lpAddresses: {
          56: '0xB7918560273FD56e50E9c215CC0DFE8D764C36C5',
          97: '',
        },
        token: {
          symbol: 'DUSK',
          address: {
            56: '0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://dusk.network/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 99,
        lpSymbol: 'BIFI-BNB LP',
        lpAddresses: {
          56: '0xd132D2C24F29EE8ABb64a66559d1b7aa627Bd7fD',
          97: '',
        },
        token: {
          symbol: 'BIFI',
          address: {
            56: '0xca3f508b8e4dd382ee878a314789373d80a5190a',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://beefy.finance/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 98,
        lpSymbol: 'TXL-BUSD LP',
        lpAddresses: {
          56: '0xD20E0BcCa8B29409bf5726CB24DD779Fe337020e',
          97: '',
        },
        token: {
          symbol: 'TXL',
          address: {
            56: '0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://tixl.org/',
        },
        quoteToken: {
          symbol: 'BUSD',
          address: {
            56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.paxos.com/busd/',
        },
      },
      {
        pid: 97,
        lpSymbol: 'COS-BNB LP',
        lpAddresses: {
          56: '0x7b1e440240B220244761C9D9A3B07fbA1995BD84',
          97: '',
        },
        token: {
          symbol: 'COS',
          address: {
            56: '0x96Dd399F9c3AFda1F194182F71600F1B65946501',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.contentos.io/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 96,
        lpSymbol: 'BUNNY-BNB LP',
        lpAddresses: {
          56: '0x7Bb89460599Dbf32ee3Aa50798BBcEae2A5F7f6a',
          97: '',
        },
        token: {
          symbol: 'BUNNY',
          address: {
            56: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://pancakebunny.finance/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 95,
        lpSymbol: 'ALICE-BNB LP',
        lpAddresses: {
          56: '0xe022baa3E5E87658f789c9132B10d7425Fd3a389',
          97: '',
        },
        token: {
          symbol: 'ALICE',
          address: {
            56: '0xac51066d7bec65dc4589368da368b212745d63e8',
            97: '',
          },
          decimals: 6,
          projectLink: 'https://www.myneighboralice.com/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 94,
        lpSymbol: 'FOR-BUSD LP',
        lpAddresses: {
          56: '0xfEc200A5E3adDD4a7915a556DDe3F5850e644020',
          97: '',
        },
        token: {
          symbol: 'FOR',
          address: {
            56: '0x658A109C5900BC6d2357c87549B651670E5b0539',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.for.tube/home',
        },
        quoteToken: {
          symbol: 'BUSD',
          address: {
            56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.paxos.com/busd/',
        },
      },
      {
        pid: 93,
        lpSymbol: 'BUX-BNB LP',
        lpAddresses: {
          56: '0x0F556f4E47513d1a19Be456a9aF778d7e1A226B9',
          97: '',
        },
        token: {
          symbol: 'BUX',
          address: {
            56: '0x211ffbe424b90e25a15531ca322adf1559779e45',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://getbux.com/bux-crypto/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 92,
        lpSymbol: 'NULS-BUSD LP',
        lpAddresses: {
          56: '0xCA01F5D89d5b1d24ca5D6Ecc856D21e8a61DAFCc',
          97: '',
        },
        token: {
          symbol: 'NULS',
          address: {
            56: '0x8cd6e29d3686d24d3c2018cee54621ea0f89313b',
            97: '',
          },
          decimals: 8,
          projectLink: 'https://www.nuls.io/',
        },
        quoteToken: {
          symbol: 'BUSD',
          address: {
            56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.paxos.com/busd/',
        },
      },
      {
        pid: 91,
        lpSymbol: 'NULS-BNB LP',
        lpAddresses: {
          56: '0xad7e515409e5a7d516411a85acc88c5e993f570a',
          97: '',
        },
        token: {
          symbol: 'NULS',
          address: {
            56: '0x8cd6e29d3686d24d3c2018cee54621ea0f89313b',
            97: '',
          },
          decimals: 8,
          projectLink: 'https://www.nuls.io/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 90,
        lpSymbol: 'BELT-BNB LP',
        lpAddresses: {
          56: '0x83B92D283cd279fF2e057BD86a95BdEfffED6faa',
          97: '',
        },
        token: {
          symbol: 'BELT',
          address: {
            56: '0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://beta.belt.fi/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 89,
        lpSymbol: 'RAMP-BUSD LP',
        lpAddresses: {
          56: '0xbF36959939982D0D34B37Fb3f3425da9676C13a3',
          97: '',
        },
        token: {
          symbol: 'RAMP',
          address: {
            56: '0x8519ea49c997f50ceffa444d240fb655e89248aa',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://rampdefi.com/',
        },
        quoteToken: {
          symbol: 'BUSD',
          address: {
            56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.paxos.com/busd/',
        },
      },
      {
        pid: 88,
        lpSymbol: 'BFI-BNB LP',
        lpAddresses: {
          56: '0x45a9e8d48bc560416008d122c9437927fed50e7d',
          97: '',
        },
        token: {
          symbol: 'BFI',
          address: {
            56: '0x81859801b01764d4f0fa5e64729f5a6c3b91435b',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://bearn.fi/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 87,
        lpSymbol: 'DEXE-BUSD LP',
        lpAddresses: {
          56: '0x69ab367bc1bea1d2c0fb4dbaec6b7197951da56c',
          97: '',
        },
        token: {
          symbol: 'DEXE',
          address: {
            56: '0x039cb485212f996a9dbb85a9a75d898f94d38da6',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://dexe.network/',
        },
        quoteToken: {
          symbol: 'BUSD',
          address: {
            56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.paxos.com/busd/',
        },
      },
      {
        pid: 86,
        lpSymbol: 'BEL-BNB LP',
        lpAddresses: {
          56: '0xAB97952a2806D5c92b7046c7aB13a72A87e0097b',
          97: '',
        },
        token: {
          symbol: 'BEL',
          address: {
            56: '0x8443f091997f06a61670b735ed92734f5628692f',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://bella.fi/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 85,
        lpSymbol: 'TPT-BUSD LP',
        lpAddresses: {
          56: '0x4db28767d1527ba545ca5bbda1c96a94ed6ff242',
          97: '',
        },
        token: {
          symbol: 'TPT',
          address: {
            56: '0xeca41281c24451168a37211f0bc2b8645af45092',
            97: '',
          },
          decimals: 4,
          projectLink: 'https://www.tokenpocket.pro/',
        },
        quoteToken: {
          symbol: 'BUSD',
          address: {
            56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.paxos.com/busd/',
        },
      },
      {
        pid: 84,
        lpSymbol: 'WATCH-BNB LP',
        lpAddresses: {
          56: '0xdc6c130299e53acd2cc2d291fa10552ca2198a6b',
          97: '',
        },
        token: {
          symbol: 'WATCH',
          address: {
            56: '0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://yieldwatch.net/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 83,
        lpSymbol: 'xMARK-BUSD LP',
        lpAddresses: {
          56: '0x292ca56ed5b3330a19037f835af4a9c0098ea6fa',
          97: '',
        },
        token: {
          symbol: 'xMARK',
          address: {
            56: '0x26a5dfab467d4f58fb266648cae769503cec9580',
            97: '',
          },
          decimals: 9,
          projectLink: 'https://benchmarkprotocol.finance/',
        },
        quoteToken: {
          symbol: 'BUSD',
          address: {
            56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.paxos.com/busd/',
        },
      },
      {
        pid: 82,
        lpSymbol: 'bMXX-BNB LP',
        lpAddresses: {
          56: '0x4D5aA94Ce6BbB1BC4eb73207a5a5d4D052cFcD67',
          97: '',
        },
        token: {
          symbol: 'bMXX',
          address: {
            56: '0x4131b87f74415190425ccd873048c708f8005823',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://multiplier.finance/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 81,
        lpSymbol: 'IOTX-BUSD LP',
        lpAddresses: {
          56: '0x36b8b28d37f93372188f2aa2507b68a5cd8b2664',
          97: '',
        },
        token: {
          symbol: 'IOTX',
          address: {
            56: '0x9678e42cebeb63f23197d726b29b1cb20d0064e5',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://iotex.io/',
        },
        quoteToken: {
          symbol: 'BUSD',
          address: {
            56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.paxos.com/busd/',
        },
      },
      {
        pid: 80,
        lpSymbol: 'BOR-BNB LP',
        lpAddresses: {
          56: '0x86e650350c40a5178a5d014ba37fe8556232b898',
          97: '',
        },
        token: {
          symbol: 'BOR',
          address: {
            56: '0x92d7756c60dcfd4c689290e8a9f4d263b3b32241',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.boringdao.com/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 79,
        lpSymbol: 'bOPEN-BNB LP',
        lpAddresses: {
          56: '0x9d8b7e4a9d53654d82f12c83448d8f92732bc761',
          97: '',
        },
        token: {
          symbol: 'bOPEN',
          address: {
            56: '0xf35262a9d427f96d2437379ef090db986eae5d42',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://opendao.io/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 78,
        lpSymbol: 'SUSHI-ETH LP',
        lpAddresses: {
          56: '0x17580340f3daedae871a8c21d15911742ec79e0f',
          97: '',
        },
        token: {
          symbol: 'SUSHI',
          address: {
            56: '0x947950bcc74888a40ffa2593c5798f11fc9124c4',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://sushi.com/',
        },
        quoteToken: {
          symbol: 'ETH',
          address: {
            56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://ethereum.org/en/',
        },
      },
      {
        pid: 77,
        lpSymbol: 'DODO-BNB LP',
        lpAddresses: {
          56: '0x9e642d174b14faea31d842dc83037c42b53236e6',
          97: '',
        },
        token: {
          symbol: 'DODO',
          address: {
            56: '0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://dodoex.io/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 76,
        lpSymbol: 'SWINGBY-BNB LP',
        lpAddresses: {
          56: '0x4576C456AF93a37a096235e5d83f812AC9aeD027',
          97: '',
        },
        token: {
          symbol: 'SWINGBY',
          address: {
            56: '0x71de20e0c4616e7fcbfdd3f875d568492cbe4739',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://swingby.network/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 75,
        lpSymbol: 'BRY-BNB LP',
        lpAddresses: {
          56: '0x5E3CD27F36932Bc0314aC4e2510585798C34a2fC',
          97: '',
        },
        token: {
          symbol: 'BRY',
          address: {
            56: '0xf859bf77cbe8699013d6dbc7c2b926aaf307f830',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://berrydata.co/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 74,
        lpSymbol: 'ZEE-BNB LP',
        lpAddresses: {
          56: '0xb5ab3996808c7e489dcdc0f1af2ab212ae0059af',
          97: '',
        },
        token: {
          symbol: 'ZEE',
          address: {
            56: '0x44754455564474a89358b2c2265883df993b12f0',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://zeroswap.io/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 73,
        lpSymbol: 'SWGb-BNB LP',
        lpAddresses: {
          56: '0xc1800c29cf91954357cd0bf3f0accaada3d0109c',
          97: '',
        },
        token: {
          symbol: 'SWGb',
          address: {
            56: '0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://swirgepay.com/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 72,
        lpSymbol: 'COMP-ETH LP',
        lpAddresses: {
          56: '0x0392957571f28037607c14832d16f8b653edd472',
          97: '',
        },
        token: {
          symbol: 'COMP',
          address: {
            56: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://compound.finance/',
        },
        quoteToken: {
          symbol: 'ETH',
          address: {
            56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://ethereum.org/en/',
        },
      },
      {
        pid: 71,
        lpSymbol: 'SFP-BNB LP',
        lpAddresses: {
          56: '0xcbe2cf3bd012e9c1ade2ee4d41db3dac763e78f3',
          97: '',
        },
        token: {
          symbol: 'SFP',
          address: {
            56: '0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.safepal.io/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 70,
        lpSymbol: 'BETH-ETH LP',
        lpAddresses: {
          56: '0x99d865ed50d2c32c1493896810fa386c1ce81d91',
          97: '',
        },
        token: {
          symbol: 'BETH',
          address: {
            56: '0x250632378e573c6be1ac2f97fcdf00515d0aa91b',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://ethereum.org/en/eth2/beacon-chain/',
        },
        quoteToken: {
          symbol: 'ETH',
          address: {
            56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://ethereum.org/en/',
        },
      },
      {
        pid: 69,
        lpSymbol: 'LINA-BUSD LP',
        lpAddresses: {
          56: '0xeb325a8ea1c5abf40c7ceaf645596c1f943d0948',
          97: '',
        },
        token: {
          symbol: 'LINA',
          address: {
            56: '0x762539b45a1dcce3d36d080f74d1aed37844b878',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://linear.finance/',
        },
        quoteToken: {
          symbol: 'BUSD',
          address: {
            56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.paxos.com/busd/',
        },
      },
      {
        pid: 68,
        lpSymbol: 'LIT-BNB LP',
        lpAddresses: {
          56: '0x60bB03D1010b99CEAdD0dd209b64bC8bd83da161',
          97: '',
        },
        token: {
          symbol: 'LIT',
          address: {
            56: '0xb59490ab09a0f526cc7305822ac65f2ab12f9723',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.litentry.com/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 67,
        lpSymbol: 'HGET-BNB LP',
        lpAddresses: {
          56: '0x66b9e1eac8a81f3752f7f3a5e95de460688a17ee',
          97: '',
        },
        token: {
          symbol: 'HGET',
          address: {
            56: '0xc7d8d35eba58a0935ff2d5a33df105dd9f071731',
            97: '',
          },
          decimals: 6,
          projectLink: 'https://www.hedget.com/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 66,
        lpSymbol: 'BDO-BNB LP',
        lpAddresses: {
          56: '0x74690f829fec83ea424ee1f1654041b2491a7be9',
          97: '',
        },
        token: {
          symbol: 'BDO',
          address: {
            56: '0x190b589cf9fb8ddeabbfeae36a813ffb2a702454',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://bdollar.fi/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 65,
        lpSymbol: 'EGLD-BNB LP',
        lpAddresses: {
          56: '0x3ef4952c7a9afbe374ea02d1bf5ed5a0015b7716',
          97: '',
        },
        token: {
          symbol: 'EGLD',
          address: {
            56: '0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://elrond.com/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 63,
        lpSymbol: 'UST-BUSD LP',
        lpAddresses: {
          56: '0xD1F12370b2ba1C79838337648F820a87eDF5e1e6',
          97: '',
        },
        token: {
          symbol: 'UST',
          address: {
            56: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://mirror.finance/',
        },
        quoteToken: {
          symbol: 'BUSD',
          address: {
            56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.paxos.com/busd/',
        },
      },
      {
        pid: 62,
        lpSymbol: 'mAMZN-UST LP',
        lpAddresses: {
          56: '0xc92Dc34665c8a21f98E1E38474580b61b4f3e1b9',
          97: '',
        },
        token: {
          symbol: 'mAMZN',
          address: {
            56: '0x3947B992DC0147D2D89dF0392213781b04B25075',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://mirror.finance/',
        },
        quoteToken: {
          symbol: 'UST',
          address: {
            56: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://mirror.finance/',
        },
      },
      {
        pid: 61,
        lpSymbol: 'mGOOGL-UST LP',
        lpAddresses: {
          56: '0x852A68181f789AE6d1Da3dF101740a59A071004f',
          97: '',
        },
        token: {
          symbol: 'mGOOGL',
          address: {
            56: '0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://mirror.finance/',
        },
        quoteToken: {
          symbol: 'UST',
          address: {
            56: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://mirror.finance/',
        },
      },
      {
        pid: 60,
        lpSymbol: 'mNFLX-UST LP',
        lpAddresses: {
          56: '0xF609ade3846981825776068a8eD7746470029D1f',
          97: '',
        },
        token: {
          symbol: 'mNFLX',
          address: {
            56: '0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://mirror.finance/',
        },
        quoteToken: {
          symbol: 'UST',
          address: {
            56: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://mirror.finance/',
        },
      },
      {
        pid: 59,
        lpSymbol: 'mTSLA-UST LP',
        lpAddresses: {
          56: '0xD5664D2d15cdffD597515f1c0D945c6c1D3Bf85B',
          97: '',
        },
        token: {
          symbol: 'mTSLA',
          address: {
            56: '0xF215A127A196e3988C09d052e16BcFD365Cd7AA3',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://mirror.finance/',
        },
        quoteToken: {
          symbol: 'UST',
          address: {
            56: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://mirror.finance/',
        },
      },
      {
        pid: 58,
        lpSymbol: 'wSOTE-BNB LP',
        lpAddresses: {
          56: '0xffb9e2d5ce4378f1a89b29bf53f80804cc078102',
          97: '',
        },
        token: {
          symbol: 'wSOTE',
          address: {
            56: '0x541e619858737031a1244a5d0cd47e5ef480342c',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://soteria.finance/#/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 57,
        lpSymbol: 'FRONT-BNB LP',
        lpAddresses: {
          56: '0x36b7d2e5c7877392fb17f9219efad56f3d794700',
          97: '',
        },
        token: {
          symbol: 'FRONT',
          address: {
            56: '0x928e55dab735aa8260af3cedada18b5f70c72f1b',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://frontier.xyz/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 56,
        lpSymbol: 'Helmet-BNB LP',
        lpAddresses: {
          56: '0x6411310c07d8c48730172146fd6f31fa84034a8b',
          97: '',
        },
        token: {
          symbol: 'Helmet',
          address: {
            56: '0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.helmet.insure/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 55,
        lpSymbol: 'BTCST-BNB LP',
        lpAddresses: {
          56: '0x91589786D36fEe5B27A5539CfE638a5fc9834665',
          97: '',
        },
        token: {
          symbol: 'BTCST',
          address: {
            56: '0x78650b139471520656b9e7aa7a5e9276814a38e9',
            97: '',
          },
          decimals: 17,
          projectLink: 'https://www.1-b.tc/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 54,
        lpSymbol: 'LTC-BNB LP',
        lpAddresses: {
          56: '0xbc765fd113c5bdb2ebc25f711191b56bb8690aec',
          97: '',
        },
        token: {
          symbol: 'LTC',
          address: {
            56: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://litecoin.org/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 53,
        lpSymbol: 'USDC-BUSD LP',
        lpAddresses: {
          56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
          97: '',
        },
        token: {
          symbol: 'USDC',
          address: {
            56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.centre.io/usdc',
        },
        quoteToken: {
          symbol: 'BUSD',
          address: {
            56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.paxos.com/busd/',
        },
      },
      {
        pid: 52,
        lpSymbol: 'DAI-BUSD LP',
        lpAddresses: {
          56: '0x3aB77e40340AB084c3e23Be8e5A6f7afed9D41DC',
          97: '',
        },
        token: {
          symbol: 'DAI',
          address: {
            56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
            97: '',
          },
          decimals: 18,
          projectLink: 'http://www.makerdao.com/',
        },
        quoteToken: {
          symbol: 'BUSD',
          address: {
            56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.paxos.com/busd/',
        },
      },
      {
        pid: 51,
        lpSymbol: 'BSCX-BNB LP',
        lpAddresses: {
          56: '0x20781bc3701c5309ac75291f5d09bdc23d7b7fa8',
          97: '',
        },
        token: {
          symbol: 'BSCX',
          address: {
            56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://bscex.org/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 50,
        lpSymbol: 'TEN-BNB LP',
        lpAddresses: {
          56: '0x01ecc44ddd2d104f44d2aa1a2bd9dfbc91ae8275',
          97: '',
        },
        token: {
          symbol: 'TEN',
          address: {
            56: '0xdff8cb622790b7f92686c722b02cab55592f152c',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.tenet.farm/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 49,
        lpSymbol: 'bALBT-BNB LP',
        lpAddresses: {
          56: '0xbe14f3a89a4f7f279af9d99554cf12e8c29db921',
          97: '',
        },
        token: {
          symbol: 'bALBT',
          address: {
            56: '0x72faa679e1008ad8382959ff48e392042a8b06f7',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://allianceblock.io/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 46,
        lpSymbol: 'OG-BNB LP',
        lpAddresses: {
          56: '0x64373608f2e93ea97ad4d8ca2cce6b2575db2f55',
          97: '',
        },
        token: {
          symbol: 'OG',
          address: {
            56: '0xf05e45ad22150677a017fbd94b84fbb63dc9b44c',
            97: '',
          },
          decimals: 2,
          projectLink: 'https://www.chiliz.com',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 47,
        lpSymbol: 'ASR-BNB LP',
        lpAddresses: {
          56: '0xd6b900d5308356317299dafe303e661271aa12f1',
          97: '',
        },
        token: {
          symbol: 'ASR',
          address: {
            56: '0x80d5f92c2c8c682070c95495313ddb680b267320',
            97: '',
          },
          decimals: 2,
          projectLink: 'https://www.chiliz.com',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 48,
        lpSymbol: 'ATM-BNB LP',
        lpAddresses: {
          56: '0xd5b3ebf1a85d32c73a82b40f75e1cd929caf4029',
          97: '',
        },
        token: {
          symbol: 'ATM',
          address: {
            56: '0x25e9d05365c867e59c1904e7463af9f312296f9e',
            97: '',
          },
          decimals: 2,
          projectLink: 'https://www.chiliz.com',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 45,
        lpSymbol: 'REEF-BNB LP',
        lpAddresses: {
          56: '0x58B58cab6C5cF158f63A2390b817710826d116D0',
          97: '',
        },
        token: {
          symbol: 'REEF',
          address: {
            56: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://reef.finance/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 44,
        lpSymbol: 'Ditto-BNB LP',
        lpAddresses: {
          56: '0x470bc451810b312bbb1256f96b0895d95ea659b1',
          97: '',
        },
        token: {
          symbol: 'DITTO',
          address: {
            56: '0x233d91a0713155003fc4dce0afa871b508b3b715',
            97: '',
          },
          decimals: 9,
          projectLink: 'https://ditto.money/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 43,
        lpSymbol: 'JUV-BNB LP',
        lpAddresses: {
          56: '0x51a2ffa5b7de506f9a22549e48b33f6cf0d9030e',
          97: '',
        },
        token: {
          symbol: 'JUV',
          address: {
            56: '0xc40c9a843e1c6d01b7578284a9028854f6683b1b',
            97: '',
          },
          decimals: 2,
          projectLink: 'https://www.chiliz.com',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 42,
        lpSymbol: 'PSG-BNB LP',
        lpAddresses: {
          56: '0x9c4f6a5050cf863e67a402e8b377973b4e3372c1',
          97: '',
        },
        token: {
          symbol: 'PSG',
          address: {
            56: '0xbc5609612b7c44bef426de600b5fd1379db2ecf1',
            97: '',
          },
          decimals: 2,
          projectLink: 'https://www.chiliz.com',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 39,
        lpSymbol: 'UNFI-BNB LP',
        lpAddresses: {
          56: '0xbEA35584b9a88107102ABEf0BDeE2c4FaE5D8c31',
          97: '',
        },
        token: {
          symbol: 'UNFI',
          address: {
            56: '0x728c5bac3c3e370e372fc4671f9ef6916b814d8b',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://unifiprotocol.com',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 41,
        lpSymbol: 'VAI-BUSD LP',
        lpAddresses: {
          56: '0xff17ff314925dff772b71abdff2782bc913b3575',
          97: '',
        },
        token: {
          symbol: 'VAI',
          address: {
            56: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://venus.io/',
        },
        quoteToken: {
          symbol: 'BUSD',
          address: {
            56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.paxos.com/busd/',
        },
      },
      {
        pid: 40,
        lpSymbol: 'BLK-BNB LP',
        lpAddresses: {
          56: '0xC743Dc05F03D25E1aF8eC5F8228f4BD25513c8d0',
          97: '',
        },
        token: {
          symbol: 'BLINK',
          address: {
            56: '0x63870a18b6e42b01ef1ad8a2302ef50b7132054f',
            97: '',
          },
          decimals: 6,
          projectLink: 'https://blink.wink.org',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 37,
        lpSymbol: 'HARD-BNB LP',
        lpAddresses: {
          56: '0x9f40e8a2fcaa267a0c374b6c661e0b372264cc3d',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'HARD',
          address: {
            56: '0xf79037f6f6be66832de4e7516be52826bc3cbcc4',
            97: '',
          },
          decimals: 6,
          projectLink: 'https://hard.kava.io',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 2,
        lpSymbol: 'BUSD-BNB LP',
        lpAddresses: {
          56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
          97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
        },
        token: {
          symbol: 'BUSD',
          address: {
            56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.paxos.com/busd/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 3,
        lpSymbol: 'ADA-BNB LP',
        lpAddresses: {
          56: '0xba51d1ab95756ca4eab8737ecd450cd8f05384cf',
          97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
        },
        token: {
          symbol: 'ADA',
          address: {
            56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://www.cardano.org/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 4,
        lpSymbol: 'BAND-BNB LP',
        lpAddresses: {
          56: '0xc639187ef82271d8f517de6feae4faf5b517533c',
          97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
        },
        token: {
          symbol: 'BAND',
          address: {
            56: '0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://bandprotocol.com/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 5,
        lpSymbol: 'DOT-BNB LP',
        lpAddresses: {
          56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'DOT',
          address: {
            56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://polkadot.network/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 6,
        lpSymbol: 'EOS-BNB LP',
        lpAddresses: {
          56: '0x981d2ba1b298888408d342c39c2ab92e8991691e',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'EOS',
          address: {
            56: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://eos.io/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 7,
        lpSymbol: 'LINK-BNB LP',
        lpAddresses: {
          56: '0xaebe45e3a03b734c68e5557ae04bfc76917b4686',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'LINK',
          address: {
            56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://chain.link/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 11,
        lpSymbol: 'USDT-BUSD LP',
        lpAddresses: {
          56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'USDT',
          address: {
            56: '0x55d398326f99059ff775485246999027b3197955',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://tether.to/',
        },
        quoteToken: {
          symbol: 'BUSD',
          address: {
            56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.paxos.com/busd/',
        },
      },
      {
        pid: 12,
        lpSymbol: 'TWT-BNB LP',
        lpAddresses: {
          56: '0x610e7a287c27dfFcaC0F0a94f547Cc1B770cF483',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'TWT',
          address: {
            56: '0x4b0f1812e5df2a09796481ff14017e6005508003',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://trustwallet.com/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 13,
        lpSymbol: 'XVS-BNB LP',
        lpAddresses: {
          56: '0x41182c32F854dd97bA0e0B1816022e0aCB2fc0bb',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'XVS',
          address: {
            56: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://venus.io/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 14,
        lpSymbol: 'ETH-BNB LP',
        lpAddresses: {
          56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'ETH',
          address: {
            56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://ethereum.org/en/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 15,
        lpSymbol: 'BTCB-BNB LP',
        lpAddresses: {
          56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'BTCB',
          address: {
            56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://bitcoin.org/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 16,
        lpSymbol: 'ALPHA-BNB LP',
        lpAddresses: {
          56: '0x4e0f3385d932F7179DeE045369286FFa6B03d887',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'ALPHA',
          address: {
            56: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://alphafinance.io/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 17,
        lpSymbol: 'USDT-BNB LP',
        lpAddresses: {
          56: '0x20bcc3b8a0091ddac2d0bc30f68e6cbb97de59cd',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'USDT',
          address: {
            56: '0x55d398326f99059ff775485246999027b3197955',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://tether.to/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 18,
        lpSymbol: 'XRP-BNB LP',
        lpAddresses: {
          56: '0xc7b4b32a3be2cb6572a1c9959401f832ce47a6d2',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'XRP',
          address: {
            56: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://ripple.com/xrp/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 19,
        lpSymbol: 'ATOM-BNB LP',
        lpAddresses: {
          56: '0x2333c77fc0b2875c11409cdcd3c75d42d402e834',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'ATOM',
          address: {
            56: '0x0eb3a705fc54725037cc9e008bdede697f62f335',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://cosmos.network/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 20,
        lpSymbol: 'YFII-BNB LP',
        lpAddresses: {
          56: '0x574a978c2d0d36d707a05e459466c7a1054f1210',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'YFII',
          address: {
            56: '0x7f70642d88cf1c4a3a7abb072b53b929b653eda5',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://dfi.money/#/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 21,
        lpSymbol: 'DAI-BNB LP',
        lpAddresses: {
          56: '0x56c77d59e82f33c712f919d09fceddf49660a829',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'DAI',
          address: {
            56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
            97: '',
          },
          decimals: 18,
          projectLink: 'http://www.makerdao.com/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 22,
        lpSymbol: 'XTZ-BNB LP',
        lpAddresses: {
          56: '0x5acac332f0f49c8badc7afd0134ad19d3db972e6',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'XTZ',
          address: {
            56: '0x16939ef78684453bfdfb47825f8a5f714f12623a',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://www.tezos.com/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 23,
        lpSymbol: 'BCH-BNB LP',
        lpAddresses: {
          56: '0x54edd846db17f43b6e43296134ecd96284671e81',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'BCH',
          address: {
            56: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'http://bch.info/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 24,
        lpSymbol: 'YFI-BNB LP',
        lpAddresses: {
          56: '0x68Ff2ca47D27db5Ac0b5c46587645835dD51D3C1',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'YFI',
          address: {
            56: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://yearn.finance/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 25,
        lpSymbol: 'UNI-BNB LP',
        lpAddresses: {
          56: '0x4269e7F43A63CEA1aD7707Be565a94a9189967E9',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'UNI',
          address: {
            56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://uniswap.org/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 26,
        lpSymbol: 'FIL-BNB LP',
        lpAddresses: {
          56: '0x35fe9787f0ebf2a200bac413d3030cf62d312774',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'FIL',
          address: {
            56: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://filecoin.io/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 27,
        lpSymbol: 'INJ-BNB LP',
        lpAddresses: {
          56: '0x7a34bd64d18e44CfdE3ef4B81b87BAf3EB3315B6',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'INJ',
          address: {
            56: '0xa2b726b1145a4773f68593cf171187d8ebe4d495',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://injectiveprotocol.com/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 29,
        lpSymbol: 'USDC-BNB LP',
        lpAddresses: {
          56: '0x30479874f9320a62bce3bc0e315c920e1d73e278',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'USDC',
          address: {
            56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.centre.io/usdc',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 30,
        lpSymbol: 'SXP-BNB LP',
        lpAddresses: {
          56: '0x752E713fB70E3FA1Ac08bCF34485F14A986956c4',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'SXP',
          address: {
            56: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://swipe.io/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 32,
        lpSymbol: 'CTK-BNB LP',
        lpAddresses: {
          56: '0x7793870484647a7278907498ec504879d6971EAb',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'CTK',
          address: {
            56: '0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929',
            97: '',
          },
          decimals: 6,
          projectLink: 'https://www.certik.foundation/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 34,
        lpSymbol: 'STAX-CAKE LP',
        lpAddresses: {
          56: '0x7cd05f8b960ba071fdf69c750c0e5a57c8366500',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'STAX',
          address: {
            56: '0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4',
            97: '',
          },
          decimals: 18,
          projectLink: 'http://stablexswap.com/',
        },
        quoteToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        isCommunity: true,
      },
      {
        pid: 35,
        lpSymbol: 'NAR-CAKE LP',
        lpAddresses: {
          56: '0x745c4fd226e169d6da959283275a8e0ecdd7f312',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'NAR',
          address: {
            56: '0xa1303e6199b319a891b79685f0537d289af1fc83',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://narwhalswap.org/',
        },
        quoteToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        isCommunity: true,
      },
      {
        pid: 36,
        lpSymbol: 'NYA-CAKE LP',
        lpAddresses: {
          56: '0x2730bf486d658838464a4ef077880998d944252d',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'NYA',
          address: {
            56: '0xbfa0841f7a90c4ce6643f651756ee340991f99d5',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://nyanswop.org/',
        },
        quoteToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        isCommunity: true,
      },
      {
        pid: 38,
        lpSymbol: 'bROOBEE-CAKE LP',
        lpAddresses: {
          56: '0x970858016C963b780E06f7DCfdEf8e809919BcE8',
          97: '',
        },
        token: {
          symbol: 'bROOBEE',
          address: {
            56: '0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://roobee.io/',
        },
        quoteToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        isCommunity: true,
      },
      {
        pid: 8,
        lpSymbol: 'BAKE-BNB Bakery LP',
        lpAddresses: {
          56: '0xc2eed0f5a0dc28cfa895084bc0a9b8b8279ae492',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'BAKE',
          address: {
            56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://www.bakeryswap.org/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 9,
        lpSymbol: 'BURGER-BNB LP',
        lpAddresses: {
          56: '0xd937FB9E6e47F3805981453BFB277a49FFfE04D7',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'BURGER',
          address: {
            56: '0xae9269f27437f0fcbc232d39ec814844a51d6b8f',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://burgerswap.org/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
      {
        pid: 10,
        lpSymbol: 'BAKE-BNB LP',
        lpAddresses: {
          56: '0x3Da30727ed0626b78C212e81B37B97A8eF8A25bB',
          97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
        },
        token: {
          symbol: 'BAKE',
          address: {
            56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
            97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
          },
          decimals: 18,
          projectLink: 'https://www.bakeryswap.org/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
    ],
  },
  toasts: {
    data: [],
  },
  pools: {
    data: [
      {
        sousId: 0,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        contractAddress: {
          56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
          97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '10',
        sortOrder: 1,
        isFinished: false,
      },
      {
        sousId: 98,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'ITAM',
          address: {
            56: '0x04c747b40be4d535fc83d09939fb0f626f32800b',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://itam.network/',
        },
        contractAddress: {
          56: '0x44eC1B26035865D9A7C130fD872670CD7Ebac2bC',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '3.096',
      },
      {
        sousId: 97,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'BONDLY',
          address: {
            56: '0x96058f8c3e16576d9bd68766f3836d9a33158f89',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.bondly.finance/',
        },
        contractAddress: {
          56: '0x1329ad151dE6C441184E32E108401126AE850937',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '0.4629',
      },
      {
        sousId: 96,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'TKO',
          address: {
            56: '0x9f589e3eabe42ebc94a44727b3f3531c0c877809',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.tokocrypto.com/',
        },
        contractAddress: {
          56: '0x9bbDc92474a7e7321B78dcDA5EF35f4981438760',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '1.1574',
      },
      {
        sousId: 95,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'APYS',
          address: {
            56: '0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://apyswap.com/',
        },
        contractAddress: {
          56: '0x46530d79b238f809e80313e73715b160c66677aF',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '0.09953',
      },
      {
        sousId: 94,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'HOO',
          address: {
            56: '0xe1d1f66215998786110ba0102ef558b22224c016',
            97: '',
          },
          decimals: 8,
          projectLink: 'https://hoo.com/',
        },
        contractAddress: {
          56: '0x47fD853D5baD391899172892F91FAa6d0cd8A2Aa',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '0.489',
      },
      {
        sousId: 93,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'ODDZ',
          address: {
            56: '0xcd40f2670cf58720b694968698a5514e924f742d',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://oddz.fi/',
        },
        contractAddress: {
          56: '0xe25aB6F05BBF6C1be953BF2d7df15B3e01b8e5a5',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '0.11284',
      },
      {
        sousId: 92,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'EASY',
          address: {
            56: '0x7c17c8bed8d14bacce824d020f994f4880d6ab3b',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://easyfi.network/',
        },
        contractAddress: {
          56: '0xEB8Fd597921E3Dd37B0F103a2625F855e2C9b9B5',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '0.0072338',
      },
      {
        sousId: 91,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'NRV',
          address: {
            56: '0x42f6f551ae042cbe50c739158b4f0cac0edb9096',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://nerve.fi/',
        },
        contractAddress: {
          56: '0xABFd8d1942628124aB971937154f826Bce86DcbC',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '0.15046',
      },
      {
        sousId: 90,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'DEGO',
          address: {
            56: '0x3fda9383a84c05ec8f7630fe10adf1fac13241cc',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://bsc.dego.finance/home',
        },
        contractAddress: {
          56: '0x526d3c204255f807C95a99b69596f2f9f72345e5',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '0.00405',
      },
      {
        sousId: 89,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'GUM',
          address: {
            56: '0xc53708664b99DF348dd27C3Ac0759d2DA9c40462',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://gourmetgalaxy.io/',
        },
        contractAddress: {
          56: '0xAa2082BeE04fc518300ec673F9497ffa6F669dB8',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '0.08912',
      },
      {
        sousId: 88,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'pBTC',
          address: {
            56: '0xed28a457a5a76596ac48d87c0f577020f6ea1c4c',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://ptokens.io/',
        },
        contractAddress: {
          56: '0x9096625Bc0d36F5EDa6d44e511641667d89C28f4',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '0.0000031',
      },
      {
        sousId: 87,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'DFT',
          address: {
            56: '0x42712dF5009c20fee340B245b510c0395896cF6e',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.dfuture.com/home',
        },
        contractAddress: {
          56: '0x78BD4dB48F8983c3C36C8EAFbEF38f6aC7B55285',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '0.6811',
      },
      {
        sousId: 86,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'SWTH',
          address: {
            56: '0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C',
            97: '',
          },
          decimals: 8,
          projectLink: 'https://switcheo.network/',
        },
        contractAddress: {
          56: '0x35418e14F5aA615C4f020eFBa6e01C5DbF15AdD2',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '2.3148',
      },
      {
        sousId: 85,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'LIEN',
          address: {
            56: '0x5d684adaf3fcfe9cfb5cede3abf02f0cdd1012e3',
            97: '',
          },
          decimals: 8,
          projectLink: 'https://lien.finance/',
        },
        contractAddress: {
          56: '0x3c7cC49a35942fbD3C2ad428a6c22490cd709d03',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '0.003472',
      },
      {
        sousId: 84,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'ZIL',
          address: {
            56: '0xb86abcb37c3a4b64f74f59301aff131a1becc787',
            97: '',
          },
          decimals: 12,
          projectLink: 'https://www.zilliqa.com/',
        },
        contractAddress: {
          56: '0xF795739737ABcFE0273f4Dced076460fdD024Dd9',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '1.0995',
      },
      {
        sousId: 83,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'pCWS',
          address: {
            56: '0xbcf39f0edda668c58371e519af37ca705f2bfcbd',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://game.seascape.network/',
        },
        contractAddress: {
          56: '0x06FF8960F7F4aE572A3f57FAe77B2882BE94Bf90',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '0.00434',
      },
      {
        sousId: 82,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'bBadger',
          address: {
            56: '0x1f7216fdb338247512ec99715587bb97bbf96eae',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://badger.finance/',
        },
        contractAddress: {
          56: '0xe4dD0C50fb314A8B2e84D211546F5B57eDd7c2b9',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '0.00265278',
      },
      {
        sousId: 81,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'bDIGG',
          address: {
            56: '0x5986d5c77c65e5801a5caa4fae80089f870a71da',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://badger.finance/',
        },
        contractAddress: {
          56: '0xb627A7e33Db571bE792B0b69c5C2f5a8160d5500',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '0.00000403',
      },
      {
        sousId: 80,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'LTO',
          address: {
            56: '0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://ltonetwork.com/',
        },
        contractAddress: {
          56: '0xadBfFA25594AF8Bc421ecaDF54D057236a99781e',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '0.2893',
      },
      {
        sousId: 79,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'MIR',
          address: {
            56: '0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://mirror.finance/',
        },
        contractAddress: {
          56: '0x3e31488f08EBcE6F2D8a2AA512aeFa49a3C7dFa7',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.01273',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 78,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'MIR',
          address: {
            56: '0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://mirror.finance/',
        },
        contractAddress: {
          56: '0x453a75908fb5a36d482d5f8fe88eca836f32ead5',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.01273',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 77,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'TRADE',
          address: {
            56: '0x7af173f350d916358af3e218bdf2178494beb748',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://unitrade.app/',
        },
        contractAddress: {
          56: '0x509C99D73FB54b2c20689708b3F824147292D38e',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.4484',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 76,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'DUSK',
          address: {
            56: '0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://dusk.network/',
        },
        contractAddress: {
          56: '0xF1bd5673Ea4a1C415ec84fa3E402F2F7788E7717',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.4629',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 75,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'BIFI',
          address: {
            56: '0xca3f508b8e4dd382ee878a314789373d80a5190a',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://beefy.finance/',
        },
        contractAddress: {
          56: '0xB4C68A1C565298834360BbFF1652284275120D47',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.00007234',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 74,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'TXL',
          address: {
            56: '0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://tixl.org/',
        },
        contractAddress: {
          56: '0x153e62257F1AAe05d5d253a670Ca7585c8D3F94F',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.434027',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 73,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'COS',
          address: {
            56: '0x96Dd399F9c3AFda1F194182F71600F1B65946501',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.contentos.io/',
        },
        contractAddress: {
          56: '0xF682D186168b4114ffDbF1291F19429310727151',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '5.787',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 72,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'BUNNY',
          address: {
            56: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://pancakebunny.finance/',
        },
        contractAddress: {
          56: '0xaDdAE5f4dB84847ac9d947AED1304A8e7D19f7cA',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.00289',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 71,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'ALICE',
          address: {
            56: '0xac51066d7bec65dc4589368da368b212745d63e8',
            97: '',
          },
          decimals: 6,
          projectLink: 'https://www.myneighboralice.com/',
        },
        contractAddress: {
          56: '0x4C32048628D0d32d4D6c52662FB4A92747782B56',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.14467',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 70,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'FOR',
          address: {
            56: '0x658A109C5900BC6d2357c87549B651670E5b0539',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.for.tube/home',
        },
        contractAddress: {
          56: '0x47642101e8D8578C42765d7AbcFd0bA31868c523',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '2.8935',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 69,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'BUX',
          address: {
            56: '0x211ffbe424b90e25a15531ca322adf1559779e45',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://getbux.com/bux-crypto/',
        },
        contractAddress: {
          56: '0x07F8217c68ed9b838b0b8B58C19c79bACE746e9A',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.5787',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 68,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'NULS',
          address: {
            56: '0x8cd6e29d3686d24d3c2018cee54621ea0f89313b',
            97: '',
          },
          decimals: 8,
          projectLink: 'https://www.nuls.io/',
        },
        contractAddress: {
          56: '0x580DC9bB9260A922E3A4355b9119dB990F09410d',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.0868',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 67,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'BELT',
          address: {
            56: '0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://beta.belt.fi/',
        },
        contractAddress: {
          56: '0x6f0037d158eD1AeE395e1c12d21aE8583842F472',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.00868',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 66,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'RAMP',
          address: {
            56: '0x8519ea49c997f50ceffa444d240fb655e89248aa',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://rampdefi.com/',
        },
        contractAddress: {
          56: '0x423382f989C6C289c8D441000e1045e231bd7d90',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.4861',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 65,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'BFI',
          address: {
            56: '0x81859801b01764d4f0fa5e64729f5a6c3b91435b',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://bearn.fi/',
        },
        contractAddress: {
          56: '0x0A595623b58dFDe6eB468b613C11A7A8E84F09b9',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.0001157',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 64,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'DEXE',
          address: {
            56: '0x039cb485212f996a9dbb85a9a75d898f94d38da6',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://dexe.network/',
        },
        contractAddress: {
          56: '0x9E6dA246d369a41DC44673ce658966cAf487f7b2',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.009837',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 63,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'BEL',
          address: {
            56: '0x8443f091997f06a61670b735ed92734f5628692f',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://bella.fi/',
        },
        contractAddress: {
          56: '0x2C0f449387b15793B9da27c2d945dBed83ab1B07',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.0549',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 62,
        stakingToken: {
          symbol: 'TPT',
          address: {
            56: '0xeca41281c24451168a37211f0bc2b8645af45092',
            97: '',
          },
          decimals: 4,
          projectLink: 'https://www.tokenpocket.pro/',
        },
        earningToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        stakingLimit: 25000,
        contractAddress: {
          56: '0x0c3D6892aa3b23811Af3bd1bbeA8b0740E8e4528',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.0462',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 61,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'TPT',
          address: {
            56: '0xeca41281c24451168a37211f0bc2b8645af45092',
            97: '',
          },
          decimals: 4,
          projectLink: 'https://www.tokenpocket.pro/',
        },
        contractAddress: {
          56: '0x75C91844c5383A68b7d3A427A44C32E3ba66Fe45',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '3.616',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 60,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'WATCH',
          address: {
            56: '0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://yieldwatch.net/',
        },
        contractAddress: {
          56: '0xC58954199E268505fa3D3Cb0A00b7207af8C2D1d',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.3472',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 59,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'xMARK',
          address: {
            56: '0x26a5dfab467d4f58fb266648cae769503cec9580',
            97: '',
          },
          decimals: 9,
          projectLink: 'https://benchmarkprotocol.finance/',
        },
        contractAddress: {
          56: '0xA5137e08C48167E363Be8Ec42A68f4F54330964E',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.0413',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 58,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'bMXX',
          address: {
            56: '0x4131b87f74415190425ccd873048c708f8005823',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://multiplier.finance/',
        },
        contractAddress: {
          56: '0x6F31B87f51654424Ce57E9F8243E27ed13846CDB',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.00248',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 57,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'IOTX',
          address: {
            56: '0x9678e42cebeb63f23197d726b29b1cb20d0064e5',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://iotex.io/',
        },
        contractAddress: {
          56: '0xCE54BA909d23B9d4BE0Ff0d84e5aE83F0ADD8D9a',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '6.365',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 56,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'BOR',
          address: {
            56: '0x92d7756c60dcfd4c689290e8a9f4d263b3b32241',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.boringdao.com/',
        },
        contractAddress: {
          56: '0x3e677dC00668d69c2A7724b9AFA7363e8A56994e',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.000395',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 55,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'bOPEN',
          address: {
            56: '0xf35262a9d427f96d2437379ef090db986eae5d42',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://opendao.io/',
        },
        contractAddress: {
          56: '0x5Ac8406498dC1921735d559CeC271bEd23B294A7',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.0723',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 54,
        stakingToken: {
          symbol: 'SUSHI',
          address: {
            56: '0x947950bcc74888a40ffa2593c5798f11fc9124c4',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://sushi.com/',
        },
        earningToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        stakingLimit: 50,
        contractAddress: {
          56: '0xb69b6e390cba1F68442A886bC89E955048DAe7E3',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.0367',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 53,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'DODO',
          address: {
            56: '0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://dodoex.io/',
        },
        contractAddress: {
          56: '0xae3001ddb18A6A57BEC2C19D71680437CA87bA1D',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.0578',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 52,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'SWINGBY',
          address: {
            56: '0x71de20e0c4616e7fcbfdd3f875d568492cbe4739',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://swingby.network/',
        },
        contractAddress: {
          56: '0x02aa767e855b8e80506fb47176202aA58A95315a',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.13',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 51,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'BRY',
          address: {
            56: '0xf859bf77cbe8699013d6dbc7c2b926aaf307f830',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://berrydata.co/',
        },
        contractAddress: {
          56: '0x1c736F4FB20C7742Ee83a4099fE92abA61dFca41',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.1157',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 50,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'ZEE',
          address: {
            56: '0x44754455564474a89358b2c2265883df993b12f0',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://zeroswap.io/',
        },
        contractAddress: {
          56: '0x02861B607a5E87daf3FD6ec19DFB715F1b371379',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.1736',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 49,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'SWGb',
          address: {
            56: '0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://swirgepay.com/',
        },
        contractAddress: {
          56: '0x73e4E8d010289267dEe3d1Fc48974B60363963CE',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.899',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 48,
        stakingToken: {
          symbol: 'COMP',
          address: {
            56: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://compound.finance/',
        },
        earningToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        stakingLimit: 1,
        contractAddress: {
          56: '0xE0565fBb109A3f3f8097D8A9D931277bfd795072',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.055',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 47,
        stakingToken: {
          symbol: 'COMP',
          address: {
            56: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://compound.finance/',
        },
        earningToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        stakingLimit: 1,
        contractAddress: {
          56: '0xc3693e3cbc3514d5d07EA5b27A721F184F617900',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.55',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 46,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'SFP',
          address: {
            56: '0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.safepal.io/',
        },
        contractAddress: {
          56: '0x2B02d43967765b18E31a9621da640588f3550EFD',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.6',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 45,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'LINA',
          address: {
            56: '0x762539b45a1dcce3d36d080f74d1aed37844b878',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://linear.finance/',
        },
        contractAddress: {
          56: '0x212bb602418C399c29D52C55100fD6bBa12bea05',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.983',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 44,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'LINA',
          address: {
            56: '0x762539b45a1dcce3d36d080f74d1aed37844b878',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://linear.finance/',
        },
        contractAddress: {
          56: '0x04aE8ca68A116278026fB721c06dCe709eD7013C',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.0983',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 43,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'LIT',
          address: {
            56: '0xb59490ab09a0f526cc7305822ac65f2ab12f9723',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.litentry.com/',
        },
        contractAddress: {
          56: '0x1714bAAE9DD4738CDEA07756427FA8d4F08D9479',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.231',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 42,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'HGET',
          address: {
            56: '0xc7d8d35eba58a0935ff2d5a33df105dd9f071731',
            97: '',
          },
          decimals: 6,
          projectLink: 'https://www.hedget.com/',
        },
        contractAddress: {
          56: '0xcCD0b93cC6ce3dC6dFaA9DB68f70e5C8455aC5bd',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.0138',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 41,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'BDO',
          address: {
            56: '0x190b589cf9fb8ddeabbfeae36a813ffb2a702454',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://bdollar.fi/',
        },
        contractAddress: {
          56: '0x9cB24e9460351bC51d4066BC6AEd1F3809b02B78',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.075',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 40,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'EGLD',
          address: {
            56: '0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://elrond.com/',
        },
        contractAddress: {
          56: '0x2dcf4cDFf4Dd954683Fe0a6123077f8a025b66cF',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.001215',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 39,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'UST',
          address: {
            56: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://mirror.finance/',
        },
        contractAddress: {
          56: '0x6EFa207ACdE6e1caB77c1322CbdE9628929ba88F',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.1157',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 38,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'wSOTE',
          address: {
            56: '0x541e619858737031a1244a5d0cd47e5ef480342c',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://soteria.finance/#/',
        },
        contractAddress: {
          56: '0xD0b738eC507571176D40f28bd56a0120E375f73a',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.23',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 37,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'FRONT',
          address: {
            56: '0x928e55dab735aa8260af3cedada18b5f70c72f1b',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://frontier.xyz/',
        },
        contractAddress: {
          56: '0xf7a31366732F08E8e6B88519dC3E827e04616Fc9',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.2546',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 36,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'Helmet',
          address: {
            56: '0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.helmet.insure/',
        },
        contractAddress: {
          56: '0x9F23658D5f4CEd69282395089B0f8E4dB85C6e79',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.81',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 35,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'BTCST',
          address: {
            56: '0x78650b139471520656b9e7aa7a5e9276814a38e9',
            97: '',
          },
          decimals: 17,
          projectLink: 'https://www.1-b.tc/',
        },
        contractAddress: {
          56: '0xB6fd2724cc9c90DD31DA35DbDf0300009dceF97d',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.011574',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 34,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'BSCX',
          address: {
            56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://bscex.org/',
        },
        contractAddress: {
          56: '0x108BFE84Ca8BCe0741998cb0F60d313823cEC143',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.17361',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 33,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'TEN',
          address: {
            56: '0xdff8cb622790b7f92686c722b02cab55592f152c',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://www.tenet.farm/',
        },
        contractAddress: {
          56: '0x4A26b082B432B060B1b00A84eE4E823F04a6f69a',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.05787',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 32,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'bALBT',
          address: {
            56: '0x72faa679e1008ad8382959ff48e392042a8b06f7',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://allianceblock.io/',
        },
        contractAddress: {
          56: '0x3cc08B7C6A31739CfEd9d8d38b484FDb245C79c8',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.4166',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 31,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'ASR',
          address: {
            56: '0x80d5f92c2c8c682070c95495313ddb680b267320',
            97: '',
          },
          decimals: 2,
          projectLink: 'https://www.chiliz.com',
        },
        contractAddress: {
          56: '0xd18E1AEb349ef0a6727eCe54597D98D263e05CAB',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.01',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 30,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'ATM',
          address: {
            56: '0x25e9d05365c867e59c1904e7463af9f312296f9e',
            97: '',
          },
          decimals: 2,
          projectLink: 'https://www.chiliz.com',
        },
        contractAddress: {
          56: '0x68C7d180bD8F7086D91E65A422c59514e4aFD638',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.01',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 29,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'OG',
          address: {
            56: '0xf05e45ad22150677a017fbd94b84fbb63dc9b44c',
            97: '',
          },
          decimals: 2,
          projectLink: 'https://www.chiliz.com',
        },
        contractAddress: {
          56: '0xbE65d7e42E05aD2c4ad28769dc9c5b4b6EAff2C7',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.01',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 28,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'REEF',
          address: {
            56: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://reef.finance/',
        },
        contractAddress: {
          56: '0x1500fa1afbfe4f4277ed0345cdf12b2c9ca7e139',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '115.74',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 27,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'DITTO',
          address: {
            56: '0x233d91a0713155003fc4dce0afa871b508b3b715',
            97: '',
          },
          decimals: 9,
          projectLink: 'https://ditto.money/',
        },
        contractAddress: {
          56: '0x624ef5C2C6080Af188AF96ee5B3160Bb28bb3E02',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.01157',
        sortOrder: 999,
        isFinished: false,
      },
      {
        sousId: 26,
        stakingToken: {
          symbol: 'TWT',
          address: {
            56: '0x4b0f1812e5df2a09796481ff14017e6005508003',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://trustwallet.com/',
        },
        earningToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        stakingLimit: 1000,
        contractAddress: {
          56: '0x0554a5D083Abf2f056ae3F6029e1714B9A655174',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.248',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 24,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'JUV',
          address: {
            56: '0xc40c9a843e1c6d01b7578284a9028854f6683b1b',
            97: '',
          },
          decimals: 2,
          projectLink: 'https://www.chiliz.com',
        },
        contractAddress: {
          56: '0x543467B17cA5De50c8BF7285107A36785Ab57E56',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.02',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 25,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'PSG',
          address: {
            56: '0xbc5609612b7c44bef426de600b5fd1379db2ecf1',
            97: '',
          },
          decimals: 2,
          projectLink: 'https://www.chiliz.com',
        },
        contractAddress: {
          56: '0x65aFEAFaec49F23159e897EFBDCe19D94A86A1B6',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.02',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 21,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'VAI',
          address: {
            56: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://venus.io/',
        },
        contractAddress: {
          56: '0x1AD34D8d4D79ddE88c9B6b8490F8fC67831f2CAe',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.104',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 20,
        stakingToken: {
          symbol: 'BNB',
          projectLink: 'https://www.binance.com/',
        },
        earningToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        stakingLimit: 10,
        contractAddress: {
          56: '0x555Ea72d7347E82C614C16f005fA91cAf06DCB5a',
          97: '',
        },
        poolCategory: 'Binance',
        harvest: true,
        tokenPerBlock: '0.5',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 19,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'BNB',
          projectLink: 'https://www.binance.com/',
        },
        contractAddress: {
          56: '0x326D754c64329aD7cb35744770D56D0E1f3B3124',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.0041',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 18,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'BLINK',
          address: {
            56: '0x63870a18b6e42b01ef1ad8a2302ef50b7132054f',
            97: '',
          },
          decimals: 6,
          projectLink: 'https://blink.wink.org',
        },
        contractAddress: {
          56: '0x42Afc29b2dEa792974d1e9420696870f1Ca6d18b',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '23.14',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 17,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'BLINK',
          address: {
            56: '0x63870a18b6e42b01ef1ad8a2302ef50b7132054f',
            97: '',
          },
          decimals: 6,
          projectLink: 'https://blink.wink.org',
        },
        contractAddress: {
          56: '0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '23.14',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 16,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'UNFI',
          address: {
            56: '0x728c5bac3c3e370e372fc4671f9ef6916b814d8b',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://unifiprotocol.com',
        },
        contractAddress: {
          56: '0xFb1088Dae0f03C5123587d2babb3F307831E6367',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.02893',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 15,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'TWT',
          address: {
            56: '0x4b0f1812e5df2a09796481ff14017e6005508003',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://trustwallet.com/',
        },
        contractAddress: {
          56: '0x9c4EBADa591FFeC4124A7785CAbCfb7068fED2fb',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '5',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 14,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'HARD',
          address: {
            56: '0xf79037f6f6be66832de4e7516be52826bc3cbcc4',
            97: '',
          },
          decimals: 6,
          projectLink: 'https://hard.kava.io',
        },
        contractAddress: {
          56: '0x90F995b9d46b32c4a1908A8c6D0122e392B3Be97',
          97: '',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.346',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 13,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'bROOBEE',
          address: {
            56: '0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://roobee.io/',
        },
        contractAddress: {
          56: '0xdc8c45b7F3747Ca9CaAEB3fa5e0b5FCE9430646b',
          97: '',
        },
        poolCategory: 'Community',
        harvest: true,
        tokenPerBlock: '12.5',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 12,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'STAX',
          address: {
            56: '0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4',
            97: '',
          },
          decimals: 18,
          projectLink: 'http://stablexswap.com/',
        },
        contractAddress: {
          56: '0xFF02241a2A1d2a7088A344309400E9fE74772815',
          97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
        },
        poolCategory: 'Community',
        harvest: true,
        tokenPerBlock: '0.2',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 11,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'NAR',
          address: {
            56: '0xa1303e6199b319a891b79685f0537d289af1fc83',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://narwhalswap.org/',
        },
        contractAddress: {
          56: '0xDc938BA1967b06d666dA79A7B1E31a8697D1565E',
          97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
        },
        poolCategory: 'Community',
        harvest: true,
        tokenPerBlock: '1',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 10,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'NYA',
          address: {
            56: '0xbfa0841f7a90c4ce6643f651756ee340991f99d5',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://nyanswop.org/',
        },
        contractAddress: {
          56: '0x07a0A5B67136d40F4d7d95Bc8e0583bafD7A81b9',
          97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
        },
        poolCategory: 'Community',
        harvest: true,
        sortOrder: 999,
        tokenPerBlock: '10',
        isFinished: true,
      },
      {
        sousId: 9,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'CTK',
          address: {
            56: '0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929',
            97: '',
          },
          decimals: 6,
          projectLink: 'https://www.certik.foundation/',
        },
        contractAddress: {
          56: '0x21A9A53936E812Da06B7623802DEc9A1f94ED23a',
          97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.5',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 8,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'TWT',
          address: {
            56: '0x4b0f1812e5df2a09796481ff14017e6005508003',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://trustwallet.com/',
        },
        contractAddress: {
          56: '0xe7f9A439Aa7292719aC817798DDd1c4D35934aAF',
          97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '20',
        sortOrder: 999,
        isFinished: true,
      },
      {
        sousId: 7,
        stakingToken: {
          symbol: 'CAKE',
          address: {
            56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        earningToken: {
          symbol: 'INJ',
          address: {
            56: '0xa2b726b1145a4773f68593cf171187d8ebe4d495',
            97: '',
          },
          decimals: 18,
          projectLink: 'https://injectiveprotocol.com/',
        },
        contractAddress: {
          56: '0xcec2671C81a0Ecf7F8Ee796EFa6DBDc5Cb062693',
          97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
        },
        poolCategory: 'Core',
        harvest: true,
        tokenPerBlock: '0.25',
        sortOrder: 999,
        isFinished: true,
      },
    ],
  },
  prices: {
    isLoading: false,
    lastUpdated: null,
    data: null,
  },
  profile: {
    isInitialized: false,
    isLoading: true,
    hasRegistered: false,
    data: null,
  },
  teams: {
    isInitialized: false,
    isLoading: true,
    data: {
      1: {
        id: 1,
        name: 'Syrup Storm',
        description: "The storm's a-comin! Watch out! These bulls are stampeding in a syrupy surge!",
        images: {
          lg: 'syrup-storm-lg.png',
          md: 'syrup-storm-md.png',
          sm: 'syrup-storm-sm.png',
          alt: 'syrup-storm-alt.png',
          ipfs: 'https://gateway.pinata.cloud/ipfs/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/syrup-storm.png',
        },
        background: 'syrup-storm-bg.svg',
        textColor: '#191326',
        users: 0,
        points: 0,
      },
      2: {
        id: 2,
        name: 'Fearsome Flippers',
        description: "The flippening is coming. Don't get in these bunnies' way, or you'll get flipped too!",
        images: {
          lg: 'fearsome-flippers-lg.png',
          md: 'fearsome-flippers-md.png',
          sm: 'fearsome-flippers-sm.png',
          alt: 'fearsome-flippers-alt.png',
          ipfs:
            'https://gateway.pinata.cloud/ipfs/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/fearsome-flippers.png',
        },
        background: 'fearsome-flippers-bg.svg',
        textColor: '#FFFFFF',
        users: 0,
        points: 0,
      },
      3: {
        id: 3,
        name: 'Chaotic Cakers',
        description: 'Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!',
        images: {
          lg: 'chaotic-cakers-lg.png',
          md: 'chaotic-cakers-md.png',
          sm: 'chaotic-cakers-sm.png',
          alt: 'chaotic-cakers-alt.png',
          ipfs: 'https://gateway.pinata.cloud/ipfs/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/chaotic-cakers.png',
        },
        background: 'chaotic-cakers-bg.svg',
        textColor: '#191326',
        users: 0,
        points: 0,
      },
    },
  },
  achievements: {
    data: [],
  },
  block: {
    currentBlock: 7497865,
    initialBlock: 7497823,
  },
  application: {
    blockNumber: {},
    popupList: [],
    walletModalOpen: false,
    settingsMenuOpen: false,
  },
  user: {
    userDarkMode: null,
    matchesDarkMode: false,
    userExpertMode: false,
    userSlippageTolerance: 80,
    userDeadline: 1200,
    tokens: {},
    pairs: {},
    timestamp: 1621285013870,
    audioPlay: true,
    lastUpdateVersionTimestamp: 1621285013922,
  },
  transactions: {},
  swap: {
    independentField: 'INPUT',
    typedValue: '',
    INPUT: {
      currencyId: '',
    },
    OUTPUT: {
      currencyId: '',
    },
    recipient: null,
  },
  mint: {
    independentField: 'CURRENCY_A',
    typedValue: '',
    otherTypedValue: '',
  },
  burn: {
    independentField: 'LIQUIDITY_PERCENT',
    typedValue: '0',
  },
  multicall: {
    callResults: {},
  },
  lists: {
    lastInitializedDefaultListOfLists: ['pancakeswap'],
    byUrl: {
      pancakeswap: {
        error: null,
        current: {
          name: 'PancakeSwap Default List',
          timestamp: '2021-03-17T09:56:23Z',
          version: {
            major: 2,
            minor: 8,
            patch: 0,
          },
          tags: {},
          logoURI: 'https://exchange.pancakeswap.finance/images/pancakeswap.png',
          keywords: ['pancake', 'default'],
          tokens: [
            {
              name: 'WBNB Token',
              symbol: 'WBNB',
              address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png',
            },
            {
              name: 'Bakery Token',
              symbol: 'BAKE',
              address: '0xe02df9e3e622debdd69fb838bb799e3f168902c5',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xe02df9e3e622debdd69fb838bb799e3f168902c5.png',
            },
            {
              name: 'BUSD Token',
              symbol: 'BUSD',
              address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xe9e7cea3dedca5984780bafc599bd69add087d56.png',
            },
            {
              name: 'Ethereum Token',
              symbol: 'ETH',
              address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x2170ed0880ac9a755fd29b2688956bd959f933f8.png',
            },
            {
              name: 'BTCB Token',
              symbol: 'BTCB',
              address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.png',
            },
            {
              name: 'BAND Protocol Token',
              symbol: 'BAND',
              address: '0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18.png',
            },
            {
              name: 'EOS Token',
              symbol: 'EOS',
              address: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x56b6fb708fc5732dec1afc8d8556423a2edccbd6.png',
            },
            {
              name: 'Tether USD',
              symbol: 'USDT',
              address: '0x55d398326f99059ff775485246999027b3197955',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x55d398326f99059ff775485246999027b3197955.png',
            },
            {
              name: 'XRP Token',
              symbol: 'XRP',
              address: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe.png',
            },
            {
              name: 'Bitcoin Cash Token',
              symbol: 'BCH',
              address: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x8ff795a6f4d97e7887c79bea79aba5cc76444adf.png',
            },
            {
              name: 'Litecoin Token',
              symbol: 'LTC',
              address: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x4338665cbb7b2485a8855a139b75d5e34ab0db94.png',
            },
            {
              name: 'Cardano Token',
              symbol: 'ADA',
              address: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47.png',
            },
            {
              name: 'Cosmos Token',
              symbol: 'ATOM',
              address: '0x0eb3a705fc54725037cc9e008bdede697f62f335',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x0eb3a705fc54725037cc9e008bdede697f62f335.png',
            },
            {
              name: 'Tezos Token',
              symbol: 'XTZ',
              address: '0x16939ef78684453bfdfb47825f8a5f714f12623a',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x16939ef78684453bfdfb47825f8a5f714f12623a.png',
            },
            {
              name: 'Ontology Token',
              symbol: 'ONT',
              address: '0xfd7b3a77848f1c2d67e05e54d78d174a0c850335',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xfd7b3a77848f1c2d67e05e54d78d174a0c850335.png',
            },
            {
              name: 'Zcash Token',
              symbol: 'ZEC',
              address: '0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb.png',
            },
            {
              name: 'Dai Token',
              symbol: 'DAI',
              address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3.png',
            },
            {
              name: 'YFII.finance Token',
              symbol: 'YFII',
              address: '0x7f70642d88cf1c4a3a7abb072b53b929b653eda5',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x7f70642d88cf1c4a3a7abb072b53b929b653eda5.png',
            },
            {
              name: 'Cream',
              symbol: 'CREAM',
              address: '0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888.png',
            },
            {
              name: 'Prometeus',
              symbol: 'PROM',
              address: '0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5.png',
            },
            {
              name: 'CanYaCoin',
              symbol: 'CAN',
              address: '0x007ea5c0ea75a8df45d288a4debdd5bb633f9e56',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x007ea5c0ea75a8df45d288a4debdd5bb633f9e56.png',
            },
            {
              name: 'Polkadot Token',
              symbol: 'DOT',
              address: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x7083609fce4d1d8dc0c979aab8c869ea2c873402.png',
            },
            {
              name: 'PancakeSwap Token',
              symbol: 'CAKE',
              address: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png',
            },
            {
              name: 'Streamity',
              symbol: 'STM',
              address: '0x90df11a8cce420675e73922419e3f4f3fe13cccb',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x90df11a8cce420675e73922419e3f4f3fe13cccb.png',
            },
            {
              name: 'Ankr',
              symbol: 'ANKR',
              address: '0xf307910a4c7bbc79691fd374889b36d8531b08e3',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xf307910a4c7bbc79691fd374889b36d8531b08e3.png',
            },
            {
              name: 'ChainLink Token',
              symbol: 'LINK',
              address: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd.png',
            },
            {
              name: 'Burger Swap',
              symbol: 'BURGER',
              address: '0xae9269f27437f0fcbc232d39ec814844a51d6b8f',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xae9269f27437f0fcbc232d39ec814844a51d6b8f.png',
            },
            {
              name: 'Dice.finance Token',
              symbol: 'DICE',
              address: '0x748ad98b14c814b28812eb42ad219c8672909879',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x748ad98b14c814b28812eb42ad219c8672909879.png',
            },
            {
              name: 'JNTR/b',
              symbol: 'JNTR/b',
              address: '0x3c037c4c2296f280bb318d725d0b454b76c199b9',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x3c037c4c2296f280bb318d725d0b454b76c199b9.png',
            },
            {
              name: 'SPARTAN PROTOCOL TOKEN',
              symbol: 'SPART',
              address: '0xe4ae305ebe1abe663f261bc00534067c80ad677c',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xe4ae305ebe1abe663f261bc00534067c80ad677c.png',
            },
            {
              name: 'Trust Wallet',
              symbol: 'TWT',
              address: '0x4b0f1812e5df2a09796481ff14017e6005508003',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x4b0f1812e5df2a09796481ff14017e6005508003.png',
            },
            {
              name: 'Venus',
              symbol: 'XVS',
              address: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63.png',
            },
            {
              name: 'Beer Garden',
              symbol: 'Beer',
              address: '0xbb8db5e17bbe9c90da8e3445e335b82d7cc53575',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xbb8db5e17bbe9c90da8e3445e335b82d7cc53575.png',
            },
            {
              name: 'AlphaToken',
              symbol: 'ALPHA',
              address: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xa1faa113cbe53436df28ff0aee54275c13b40975.png',
            },
            {
              name: 'Beefy.finance',
              symbol: 'BIFI',
              address: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xCa3F508B8e4Dd382eE878A314789373D80A5190A.png',
            },
            {
              name: 'yearn.finance',
              symbol: 'YFI',
              address: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e.png',
            },
            {
              name: 'Uniswap',
              symbol: 'UNI',
              address: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xbf5140a22578168fd562dccf235e5d43a02ce9b1.png',
            },
            {
              name: 'fry.world',
              symbol: 'FRIES',
              address: '0x393B312C01048b3ed2720bF1B090084C09e408A1',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x393B312C01048b3ed2720bF1B090084C09e408A1.png',
            },
            {
              name: 'StableXSwap',
              symbol: 'STAX',
              address: '0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4.png',
            },
            {
              name: 'Filecoin',
              symbol: 'FIL',
              address: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153.png',
            },
            {
              name: 'KAVA',
              symbol: 'KAVA',
              address: '0x5F88AB06e8dfe89DF127B2430Bba4Af600866035',
              chainId: 56,
              decimals: 6,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x5F88AB06e8dfe89DF127B2430Bba4Af600866035.png',
            },
            {
              name: 'USDX',
              symbol: 'USDX',
              address: '0x1203355742e76875154c0d13eb81dcd7711dc7d9',
              chainId: 56,
              decimals: 6,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x1203355742e76875154c0d13eb81dcd7711dc7d9.png',
            },
            {
              name: 'Injective Protocol',
              symbol: 'INJ',
              address: '0xa2B726B1145A4773F68593CF171187d8EBe4d495',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xa2B726B1145A4773F68593CF171187d8EBe4d495.png',
            },
            {
              name: 'Swipe',
              symbol: 'SXP',
              address: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x47bead2563dcbf3bf2c9407fea4dc236faba485a.png',
            },
            {
              name: 'Binance-Peg USD Coin',
              symbol: 'USDC',
              address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d.png',
            },
            {
              name: 'CertiK Token',
              symbol: 'CTK',
              address: '0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929',
              chainId: 56,
              decimals: 6,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929.png',
            },
            {
              name: 'NAR Token',
              symbol: 'NAR',
              address: '0xa1303e6199b319a891b79685f0537d289af1fc83',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xa1303e6199b319a891b79685f0537d289af1fc83.png',
            },
            {
              name: 'Nyanswop Token',
              symbol: 'NYA',
              address: '0xbfa0841f7a90c4ce6643f651756ee340991f99d5',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xbfa0841f7a90c4ce6643f651756ee340991f99d5.png',
            },
            {
              name: 'DANGO',
              symbol: 'DANGO',
              address: '0x0957c57c9eb7744850dcc95db5a06ed4a246236e',
              chainId: 56,
              decimals: 6,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x0957c57c9eb7744850dcc95db5a06ed4a246236e.png',
            },
            {
              name: 'HARD',
              symbol: 'HARD',
              address: '0xf79037f6f6be66832de4e7516be52826bc3cbcc4',
              chainId: 56,
              decimals: 6,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xf79037f6f6be66832de4e7516be52826bc3cbcc4.png',
            },
            {
              name: 'ROOBEE',
              symbol: 'bROOBEE',
              address: '0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe.png',
            },
            {
              name: 'Unifi Token',
              symbol: 'UNFI',
              address: '0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B.png',
            },
            {
              name: 'BLINk',
              symbol: 'BLK',
              address: '0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F',
              chainId: 56,
              decimals: 6,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F.png',
            },
            {
              name: 'QUSD Stablecoin',
              symbol: 'QUSD',
              address: '0xb8C540d00dd0Bf76ea12E4B4B95eFC90804f924E',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xb8C540d00dd0Bf76ea12E4B4B95eFC90804f924E.png',
            },
            {
              name: 'Qian Governance Token',
              symbol: 'KUN',
              address: '0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584.png',
            },
            {
              name: 'VAI Stablecoin',
              symbol: 'VAI',
              address: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x4bd17003473389a42daf6a0a729f6fdb328bbbd7.png',
            },
            {
              name: 'Juventus',
              symbol: 'JUV',
              address: '0xc40c9a843e1c6d01b7578284a9028854f6683b1b',
              chainId: 56,
              decimals: 2,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xc40c9a843e1c6d01b7578284a9028854f6683b1b.png',
            },
            {
              name: 'Paris Saint-Germain',
              symbol: 'PSG',
              address: '0xbc5609612b7c44bef426de600b5fd1379db2ecf1',
              chainId: 56,
              decimals: 2,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xbc5609612b7c44bef426de600b5fd1379db2ecf1.png',
            },
            {
              name: 'Ditto',
              symbol: 'DITTO',
              address: '0x233d91A0713155003fc4DcE0AFa871b508B3B715',
              chainId: 56,
              decimals: 9,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x233d91A0713155003fc4DcE0AFa871b508B3B715.png',
            },
            {
              name: 'Math',
              symbol: 'MATH',
              address: '0xf218184af829cf2b0019f8e6f0b2423498a36983',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xf218184af829cf2b0019f8e6f0b2423498a36983.png',
            },
            {
              name: 'Fuel',
              symbol: 'FUEL',
              address: '0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A.png',
            },
            {
              name: 'Nuls',
              symbol: 'NULS',
              address: '0x8cd6e29d3686d24d3c2018cee54621ea0f89313b',
              chainId: 56,
              decimals: 8,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x8cd6e29d3686d24d3c2018cee54621ea0f89313b.png',
            },
            {
              name: 'NerveNetwork',
              symbol: 'NVT',
              address: '0xf0e406c49c63abf358030a299c0e00118c4c6ba5',
              chainId: 56,
              decimals: 8,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xf0e406c49c63abf358030a299c0e00118c4c6ba5.png',
            },
            {
              name: 'Reef',
              symbol: 'REEF',
              address: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e.png',
            },
            {
              name: 'OG',
              symbol: 'OG',
              address: '0xf05e45ad22150677a017fbd94b84fbb63dc9b44c',
              chainId: 56,
              decimals: 2,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xf05e45ad22150677a017fbd94b84fbb63dc9b44c.png',
            },
            {
              name: 'Atletico de Madrid',
              symbol: 'ATM',
              address: '0x25e9d05365c867e59c1904e7463af9f312296f9e',
              chainId: 56,
              decimals: 2,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x25e9d05365c867e59c1904e7463af9f312296f9e.png',
            },
            {
              name: 'AS Roma',
              symbol: 'ASR',
              address: '0x80d5f92c2c8c682070c95495313ddb680b267320',
              chainId: 56,
              decimals: 2,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x80d5f92c2c8c682070c95495313ddb680b267320.png',
            },
            {
              name: 'AllianceBlock',
              symbol: 'bALBT',
              address: '0x72faa679e1008ad8382959ff48e392042a8b06f7',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x72faa679e1008ad8382959ff48e392042a8b06f7.png',
            },
            {
              name: 'Tenet',
              symbol: 'TEN',
              address: '0xdff8cb622790b7f92686c722b02cab55592f152c',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xdff8cb622790b7f92686c722b02cab55592f152c.png',
            },
            {
              name: 'Helmet.insure',
              symbol: 'Helmet',
              address: '0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8.png',
            },
            {
              name: 'BSCEX',
              symbol: 'BSCX',
              address: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x5ac52ee5b2a633895292ff6d8a89bb9190451587.png',
            },
            {
              name: 'Standard BTC Hashrate Token',
              symbol: 'BTCST',
              address: '0x78650b139471520656b9e7aa7a5e9276814a38e9',
              chainId: 56,
              decimals: 17,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x78650b139471520656b9e7aa7a5e9276814a38e9.png',
            },
            {
              name: 'Frontier Token',
              symbol: 'FRONT',
              address: '0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b.png',
            },
            {
              name: 'Soteria',
              symbol: 'wSOTE',
              address: '0x541e619858737031a1244a5d0cd47e5ef480342c',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x541e619858737031a1244a5d0cd47e5ef480342c.png',
            },
            {
              name: 'Mirror TSLA Token',
              symbol: 'mTSLA',
              address: '0xF215A127A196e3988C09d052e16BcFD365Cd7AA3',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xF215A127A196e3988C09d052e16BcFD365Cd7AA3.png',
            },
            {
              name: 'Mirror AMZN Token',
              symbol: 'mAMZN',
              address: '0x3947B992DC0147D2D89dF0392213781b04B25075',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x3947B992DC0147D2D89dF0392213781b04B25075.png',
            },
            {
              name: 'Mirror NFLX Token',
              symbol: 'mNFLX',
              address: '0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc.png',
            },
            {
              name: 'Mirror GOOGL Token',
              symbol: 'mGOOGL',
              address: '0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f.png',
            },
            {
              name: 'UST Token',
              symbol: 'UST',
              address: '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x23396cF899Ca06c4472205fC903bDB4de249D6fC.png',
            },
            {
              name: 'b.earnfi',
              symbol: 'BFI',
              address: '0x81859801b01764D4f0Fa5E64729f5a6C3b91435b',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x81859801b01764D4f0Fa5E64729f5a6C3b91435b.png',
            },
            {
              name: 'bDollar',
              symbol: 'BDO',
              address: '0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454.png',
            },
            {
              name: 'bDollar Share',
              symbol: 'sBDO',
              address: '0x0d9319565be7f53CeFE84Ad201Be3f40feAE2740',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x0d9319565be7f53CeFE84Ad201Be3f40feAE2740.png',
            },
            {
              name: 'Elrond',
              symbol: 'EGLD',
              address: '0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe.png',
            },
            {
              name: 'AUTOv2',
              symbol: 'AUTO',
              address: '0xa184088a740c695e156f91f5cc086a06bb78b827',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xa184088a740c695e156f91f5cc086a06bb78b827.png',
            },
            {
              name: 'Hedget',
              symbol: 'HGET',
              address: '0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731',
              chainId: 56,
              decimals: 6,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731.png',
            },
            {
              name: 'Litentry',
              symbol: 'LIT',
              address: '0xb59490ab09a0f526cc7305822ac65f2ab12f9723',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xb59490ab09a0f526cc7305822ac65f2ab12f9723.png',
            },
            {
              name: 'Linear Finance',
              symbol: 'LINA',
              address: '0x762539b45a1dcce3d36d080f74d1aed37844b878',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x762539b45a1dcce3d36d080f74d1aed37844b878.png',
            },
            {
              name: 'Beacon ETH',
              symbol: 'BETH',
              address: '0x250632378e573c6be1ac2f97fcdf00515d0aa91b',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x250632378e573c6be1ac2f97fcdf00515d0aa91b.png',
            },
            {
              name: 'lUSD',
              symbol: 'lUSD',
              address: '0x23e8a70534308a4AAF76fb8C32ec13d17a3BD89e',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x23e8a70534308a4AAF76fb8C32ec13d17a3BD89e.png',
            },
            {
              name: 'SafePal Token',
              symbol: 'SFP',
              address: '0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb.png',
            },
            {
              name: 'Compound Finance',
              symbol: 'COMP',
              address: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x52ce071bd9b1c4b00a0b92d298c512478cad67e8.png',
            },
            {
              name: 'Swirge Pay',
              symbol: 'SWGb',
              address: '0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb.png',
            },
            {
              name: 'renBTC',
              symbol: 'renBTC',
              address: '0xfCe146bF3146100cfe5dB4129cf6C82b0eF4Ad8c',
              chainId: 56,
              decimals: 8,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xfCe146bF3146100cfe5dB4129cf6C82b0eF4Ad8c.png',
            },
            {
              name: 'renDOGE',
              symbol: 'renDOGE',
              address: '0xc3fed6eb39178a541d274e6fc748d48f0ca01cc3',
              chainId: 56,
              decimals: 8,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xc3fed6eb39178a541d274e6fc748d48f0ca01cc3.png',
            },
            {
              name: 'anyMTLX',
              symbol: 'anyMTLX',
              address: '0x5921dee8556c4593eefcfad3ca5e2f618606483b',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x5921dee8556c4593eefcfad3ca5e2f618606483b.png',
            },
            {
              name: 'ZeroSwapToken',
              symbol: 'ZEE',
              address: '0x44754455564474a89358b2c2265883df993b12f0',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x44754455564474a89358b2c2265883df993b12f0.png',
            },
            {
              name: 'Berry',
              symbol: 'BRY',
              address: '0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830.png',
            },
            {
              name: 'Swingby',
              symbol: 'SWINGBY',
              address: '0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739.png',
            },
            {
              name: 'Dodo',
              symbol: 'DODO',
              address: '0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2.png',
            },
            {
              name: 'Sushi',
              symbol: 'SUSHI',
              address: '0x947950bcc74888a40ffa2593c5798f11fc9124c4',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x947950bcc74888a40ffa2593c5798f11fc9124c4.png',
            },
            {
              name: 'OPEN Governance Token',
              symbol: 'bOPEN',
              address: '0xF35262a9d427F96d2437379eF090db986eaE5d42',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xF35262a9d427F96d2437379eF090db986eaE5d42.png',
            },
            {
              name: 'BoringDAO',
              symbol: 'BOR',
              address: '0x92d7756c60dcfd4c689290e8a9f4d263b3b32241',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x92d7756c60dcfd4c689290e8a9f4d263b3b32241.png',
            },
            {
              name: 'renZEC',
              symbol: 'renZEC',
              address: '0x695FD30aF473F2960e81Dc9bA7cB67679d35EDb7',
              chainId: 56,
              decimals: 8,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x695FD30aF473F2960e81Dc9bA7cB67679d35EDb7.png',
            },
            {
              name: 'Multiplier',
              symbol: 'bMXX',
              address: '0x4131b87f74415190425ccd873048c708f8005823',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x4131b87f74415190425ccd873048c708f8005823.png',
            },
            {
              name: 'IoTeX',
              symbol: 'IOTX',
              address: '0x9678e42cebeb63f23197d726b29b1cb20d0064e5',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x9678e42cebeb63f23197d726b29b1cb20d0064e5.png',
            },
            {
              name: 'xMARK',
              symbol: 'xMARK',
              address: '0x26a5dfab467d4f58fb266648cae769503cec9580',
              chainId: 56,
              decimals: 9,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x26a5dfab467d4f58fb266648cae769503cec9580.png',
            },
            {
              name: 'TokenPocket',
              symbol: 'TPT',
              address: '0xeca41281c24451168a37211f0bc2b8645af45092',
              chainId: 56,
              decimals: 4,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xeca41281c24451168a37211f0bc2b8645af45092.png',
            },
            {
              name: 'Yieldwatch',
              symbol: 'WATCH',
              address: '0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0.png',
            },
            {
              name: 'Bella Protocol',
              symbol: 'BEL',
              address: '0x8443f091997f06a61670b735ed92734f5628692f',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x8443f091997f06a61670b735ed92734f5628692f.png',
            },
            {
              name: 'DeXe',
              symbol: 'DEXE',
              address: '0x039cb485212f996a9dbb85a9a75d898f94d38da6',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x039cb485212f996a9dbb85a9a75d898f94d38da6.png',
            },
            {
              name: 'Ramp DEFI',
              symbol: 'RAMP',
              address: '0x8519ea49c997f50ceffa444d240fb655e89248aa',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x8519ea49c997f50ceffa444d240fb655e89248aa.png',
            },
            {
              name: 'Belt',
              symbol: 'BELT',
              address: '0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f.png',
            },
            {
              name: 'Basic Attention Token',
              symbol: 'BAT',
              address: '0x101d82428437127bf1608f699cd651e6abf9766e',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x101d82428437127bf1608f699cd651e6abf9766e.png',
            },
            {
              name: 'BUX',
              symbol: 'BUX',
              address: '0x211ffbe424b90e25a15531ca322adf1559779e45',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x211ffbe424b90e25a15531ca322adf1559779e45.png',
            },
            {
              name: 'ForTube',
              symbol: 'FOR',
              address: '0x658A109C5900BC6d2357c87549B651670E5b0539',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x658A109C5900BC6d2357c87549B651670E5b0539.png',
            },
            {
              name: 'My Neigbor Alice',
              symbol: 'ALICE',
              address: '0xac51066d7bec65dc4589368da368b212745d63e8',
              chainId: 56,
              decimals: 6,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xac51066d7bec65dc4589368da368b212745d63e8.png',
            },
            {
              name: 'Pancake Bunny',
              symbol: 'BUNNY',
              address: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51.png',
            },
            {
              name: 'Dego.Finance',
              symbol: 'DEGO',
              address: '0x3fda9383a84c05ec8f7630fe10adf1fac13241cc',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x3fda9383a84c05ec8f7630fe10adf1fac13241cc.png',
            },
            {
              name: 'LTO Network',
              symbol: 'LTO',
              address: '0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd.png',
            },
            {
              name: 'Contentos',
              symbol: 'COS',
              address: '0x96dd399f9c3afda1f194182f71600f1b65946501',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x96dd399f9c3afda1f194182f71600f1b65946501.png',
            },
            {
              name: 'Tixl',
              symbol: 'TXL',
              address: '0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5.png',
            },
            {
              name: 'Alpaca',
              symbol: 'ALPACA',
              address: '0x8f0528ce5ef7b51152a59745befdd91d97091d2f',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x8f0528ce5ef7b51152a59745befdd91d97091d2f.png',
            },
            {
              name: 'Dusk',
              symbol: 'DUSK',
              address: '0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c.png',
            },
            {
              name: 'bDIGG',
              symbol: 'bDIGG',
              address: '0x5986d5c77c65e5801a5caa4fae80089f870a71da',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x5986d5c77c65e5801a5caa4fae80089f870a71da.png',
            },
            {
              name: 'bBADGER',
              symbol: 'bBADGER',
              address: '0x1f7216fdb338247512ec99715587bb97bbf96eae',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x1f7216fdb338247512ec99715587bb97bbf96eae.png',
            },
            {
              name: 'Unitrade',
              symbol: 'TRADE',
              address: '0x7af173f350d916358af3e218bdf2178494beb748',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x7af173f350d916358af3e218bdf2178494beb748.png',
            },
            {
              name: 'PNT',
              symbol: 'PNT',
              address: '0x7a1da9f49224ef98389b071b8a3294d1cc5e3e6a',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x7a1da9f49224ef98389b071b8a3294d1cc5e3e6a.png',
            },
            {
              name: 'pBTC',
              symbol: 'pBTC',
              address: '0xed28a457a5a76596ac48d87c0f577020f6ea1c4c',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xed28a457a5a76596ac48d87c0f577020f6ea1c4c.png',
            },
            {
              name: 'Mirror Finance',
              symbol: 'MIR',
              address: '0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9.png',
            },
            {
              name: 'PolyCrowns',
              symbol: 'pCWS',
              address: '0xbcf39f0edda668c58371e519af37ca705f2bfcbd',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xbcf39f0edda668c58371e519af37ca705f2bfcbd.png',
            },
            {
              name: 'Zilliqa',
              symbol: 'ZIL',
              address: '0xb86abcb37c3a4b64f74f59301aff131a1becc787',
              chainId: 56,
              decimals: 12,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xb86abcb37c3a4b64f74f59301aff131a1becc787.png',
            },
            {
              name: 'Lien',
              symbol: 'LIEN',
              address: '0x5d684adaf3fcfe9cfb5cede3abf02f0cdd1012e3',
              chainId: 56,
              decimals: 8,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x5d684adaf3fcfe9cfb5cede3abf02f0cdd1012e3.png',
            },
            {
              name: 'Switcheo',
              symbol: 'SWTH',
              address: '0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C',
              chainId: 56,
              decimals: 8,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C.png',
            },
            {
              name: 'Ellipsis',
              symbol: 'EPS',
              address: '0xa7f552078dcc247c2684336020c03648500c6d9f',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xa7f552078dcc247c2684336020c03648500c6d9f.png',
            },
            {
              name: 'DFuture',
              symbol: 'DFT',
              address: '0x42712dF5009c20fee340B245b510c0395896cF6e',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x42712dF5009c20fee340B245b510c0395896cF6e.png',
            },
            {
              name: 'Gourmet Galaxy',
              symbol: 'GUM',
              address: '0xc53708664b99DF348dd27C3Ac0759d2DA9c40462',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xc53708664b99DF348dd27C3Ac0759d2DA9c40462.png',
            },
            {
              name: 'Harmony One',
              symbol: 'ONE',
              address: '0x03ff0ff224f904be3118461335064bb48df47938',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x03ff0ff224f904be3118461335064bb48df47938.png',
            },
            {
              name: 'Nerve Finance',
              symbol: 'NRV',
              address: '0x42f6f551ae042cbe50c739158b4f0cac0edb9096',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x42f6f551ae042cbe50c739158b4f0cac0edb9096.png',
            },
            {
              name: 'Easyfi Network',
              symbol: 'EASY',
              address: '0x7c17c8bed8d14bacce824d020f994f4880d6ab3b',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x7c17c8bed8d14bacce824d020f994f4880d6ab3b.png',
            },
            {
              name: 'SafeMoon',
              symbol: 'SAFEMOON',
              address: '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3',
              chainId: 56,
              decimals: 9,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3.png',
            },
            {
              name: 'Tau Bitcoin',
              symbol: '𝜏BTC',
              address: '0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c',
              chainId: 56,
              decimals: 9,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c.png',
            },
            {
              name: 'Hoo',
              symbol: 'HOO',
              address: '0xe1d1f66215998786110ba0102ef558b22224c016',
              chainId: 56,
              decimals: 8,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xe1d1f66215998786110ba0102ef558b22224c016.png',
            },
            {
              name: 'Oddz',
              symbol: 'ODDZ',
              address: '0xcd40f2670cf58720b694968698a5514e924f742d',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xcd40f2670cf58720b694968698a5514e924f742d.png',
            },
            {
              name: 'APYSwap',
              symbol: 'APYS',
              address: '0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7.png',
            },
            {
              name: 'Bondly',
              symbol: 'BONDLY',
              address: '0x96058f8c3e16576d9bd68766f3836d9a33158f89',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x96058f8c3e16576d9bd68766f3836d9a33158f89.png',
            },
            {
              name: 'TokoCrypto',
              symbol: 'TKO',
              address: '0x9f589e3eabe42ebc94a44727b3f3531c0c877809',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x9f589e3eabe42ebc94a44727b3f3531c0c877809.png',
            },
            {
              name: 'Itam',
              symbol: 'ITAM',
              address: '0x04c747b40be4d535fc83d09939fb0f626f32800b',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x04c747b40be4d535fc83d09939fb0f626f32800b.png',
            },
            {
              name: 'ARPA',
              symbol: 'ARPA',
              address: '0x6f769e65c14ebd1f68817f5f1dcdb61cfa2d6f7e',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x6f769e65c14ebd1f68817f5f1dcdb61cfa2d6f7e.png',
            },
            {
              name: 'Perlin X',
              symbol: 'PERL',
              address: '0x0f9e4d49f25de22c2202af916b681fbb3790497b',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x0f9e4d49f25de22c2202af916b681fbb3790497b.png',
            },
            {
              name: 'Juggernaut Finance',
              symbol: 'JGN',
              address: '0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75',
              chainId: 56,
              decimals: 18,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75.png',
            },
            {
              name: 'Alien Worlds',
              symbol: 'TLM',
              address: '0x2222227e22102fe3322098e4cbfe18cfebd57c95',
              chainId: 56,
              decimals: 4,
              logoURI:
                'https://exchange.pancakeswap.finance/images/coins/0x2222227e22102fe3322098e4cbfe18cfebd57c95.png',
            },
          ],
        },
        loadingRequestId: null,
        pendingUpdate: null,
      },
    },
    selectedListUrl: 'pancakeswap',
  },
}

export const StaticStore = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
