import React from 'react'
import { Story, Meta } from '@storybook/react'
import FarmTable, { ITableProps } from '../../views/Farms/components/FarmTable/FarmTable'

export default {
  title: 'Components/Farm Table',
  component: FarmTable,
} as Meta

const Template: Story<ITableProps> = (args) => <FarmTable {...args} />

const foo = (): number => {
  return 0
}

export const Primary = Template.bind({})
Primary.args = {
  data: [
    {
      apr: {
        lpLabel: 'CAKE-BNB',
        tokenAddress: {
          '56': '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
          '97': '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
        },
        quoteTokenAddress: {
          '56': '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
          '97': '0xae13d989dac2f0debff460ac112a837c89baa7cd',
        },
        cakePrice: 0,
      },
      farm: { image: 'cake-bnb', label: 'CAKE-BNB', pid: 1 },
      earned: { earnings: null, pid: 1 },
      liquidity: {},
      multiplier: {},
      details: {
        pid: 1,
        lpSymbol: 'CAKE-BNB LP',
        lpAddresses: {
          '56': '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
          '97': '0xe70b7523f4bffa1f2e88d2ba709afd026030f412',
        },
        token: {
          symbol: 'CAKE',
          address: {
            '56': '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            '97': '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            '56': '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            '97': '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
    },
    {
      apr: {
        lpLabel: 'ITAM-BNB',
        tokenAddress: { '56': '0x04c747b40be4d535fc83d09939fb0f626f32800b', '97': '' },
        quoteTokenAddress: {
          '56': '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
          '97': '0xae13d989dac2f0debff460ac112a837c89baa7cd',
        },
        cakePrice: '0',
      },
      farm: { image: 'itam-bnb', label: 'ITAM-BNB', pid: 122 },
      earned: { earnings: null, pid: 122 },
      liquidity: {},
      multiplier: {},
      details: {
        pid: 122,
        lpSymbol: 'ITAM-BNB LP',
        lpAddresses: { '56': '0xCdC53345192D0e31eEAD03D7E9e008Ee659FAEbE', '97': '' },
        token: {
          symbol: 'ITAM',
          address: { '56': '0x04c747b40be4d535fc83d09939fb0f626f32800b', '97': '' },
          decimals: 18,
          projectLink: 'https://itam.network/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            '56': '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            '97': '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
    },
    {
      apr: {
        lpLabel: 'BONDLY-BNB',
        tokenAddress: { '56': '0x96058f8c3e16576d9bd68766f3836d9a33158f89', '97': '' },
        quoteTokenAddress: {
          '56': '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
          '97': '0xae13d989dac2f0debff460ac112a837c89baa7cd',
        },
        cakePrice: '0',
      },
      farm: { image: 'bondly-bnb', label: 'BONDLY-BNB', pid: 121 },
      earned: { earnings: null, pid: 121 },
      liquidity: {},
      multiplier: {},
      details: {
        pid: 121,
        lpSymbol: 'BONDLY-BNB LP',
        lpAddresses: { '56': '0x67581bfb4fc13bb73c71489b504e9b5354769063', '97': '' },
        token: {
          symbol: 'BONDLY',
          address: { '56': '0x96058f8c3e16576d9bd68766f3836d9a33158f89', '97': '' },
          decimals: 18,
          projectLink: 'https://www.bondly.finance/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            '56': '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            '97': '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
    },
    {
      apr: {
        lpLabel: 'TKO-BNB',
        tokenAddress: { '56': '0x9f589e3eabe42ebc94a44727b3f3531c0c877809', '97': '' },
        quoteTokenAddress: {
          '56': '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
          '97': '0xae13d989dac2f0debff460ac112a837c89baa7cd',
        },
        cakePrice: '0',
      },
      farm: { image: 'tko-bnb', label: 'TKO-BNB', pid: 120 },
      earned: { earnings: null, pid: 120 },
      liquidity: {},
      multiplier: {},
      details: {
        pid: 120,
        lpSymbol: 'TKO-BNB LP',
        lpAddresses: { '56': '0x496a8b716A3A3410B16e71E3c906968CE4488e52', '97': '' },
        token: {
          symbol: 'TKO',
          address: { '56': '0x9f589e3eabe42ebc94a44727b3f3531c0c877809', '97': '' },
          decimals: 18,
          projectLink: 'https://www.tokocrypto.com/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            '56': '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            '97': '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
    },
    {
      apr: {
        lpLabel: 'APYS-BNB',
        tokenAddress: { '56': '0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7', '97': '' },
        quoteTokenAddress: {
          '56': '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
          '97': '0xae13d989dac2f0debff460ac112a837c89baa7cd',
        },
        cakePrice: '0',
      },
      farm: { image: 'apys-bnb', label: 'APYS-BNB', pid: 119 },
      earned: { earnings: null, pid: 119 },
      liquidity: {},
      multiplier: {},
      details: {
        pid: 119,
        lpSymbol: 'APYS-BNB LP',
        lpAddresses: { '56': '0xE5783Cc9dFb3E7e474B81B07369a008e80F1cEdb', '97': '' },
        token: {
          symbol: 'APYS',
          address: { '56': '0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7', '97': '' },
          decimals: 18,
          projectLink: 'https://apyswap.com/',
        },
        quoteToken: {
          symbol: 'wBNB',
          address: {
            '56': '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
            '97': '0xae13d989dac2f0debff460ac112a837c89baa7cd',
          },
          decimals: 18,
          projectLink: 'https://pancakeswap.finance/',
        },
      },
    },
   
  ],
  columns: [
    {
      name: 'farm',
      label: '',
      sort: () => foo(),
    },
    {
      name: 'earned',
      label: 'Earned',
      sort: () => foo(),
    },
    {
      name: 'apr',
      label: 'APR',
      sort: () => foo(),
    },
    {
      name: 'liquidity',
      label: 'Liquidity',
      sort: () => foo(),
    },
    {
      name: 'multiplier',
      label: 'Multiplier',
      sort: () => foo(),
    },
    {
      name: 'details',
      label: '',
      sort: () => foo(),
    },
  ],
}
