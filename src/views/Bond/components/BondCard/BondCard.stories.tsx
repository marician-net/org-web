import React from 'react'
import styled from 'styled-components'
/* eslint-disable import/no-unresolved */
import { Meta } from '@storybook/react/types-6-0'
import ZapLabToken from '../../../../entities/zapLabToken'
import BondCard from './BondCard'

const Row = styled.div`
  display: flex;
  margin-bottom: 32px;

  & > input + input {
    margin-left: 16px;
  }
`

const token = new ZapLabToken()
token.providerTitle = 'CoinCap.io'
token.providerAddress = '0xF02491e199565B9822ECf001eB6a336959D655C8'
token.name = 'CoinCap.io Datafeed'
token.curve = ['2', '7000000000000000000', '1000000000000000', '1000000']
token.providerParams = {
  'CoinCap.io API.md': 'https://ipfs.io/ipfs/QmUp3u4rvJTkbvJRqo1zJzjYAo1mbeihUKYAcKBmAQ2ZEy',
  'CoinCap.io Datafeed.md': 'https://gateway.ipfs.io/ipfs/QmP9t2yobZwrNcu91QR7zHXx3KjnJmaACPB3KTFnFo7RAj',
  'CoinCap.io Datafeed.json': '',
}
token.brokerAddress = '0x0000000000000000000000000000000000000000'
token.totalBound = '26407'
token.dotLimit = '1000000'
token.spotPrice = '33.408'
token.markdown = ''
token.json = ''
token.userBound = '0'
token.zapBound = '533527028000000000000000'
token.isToken = false
token.symbol = ''
token.tokenAddress = ''
token.isTDFOwner = false

export default {
  title: 'View/Bond/Components/BondCard',
  component: BondCard,
  argTypes: {},
} as Meta

export const Default: React.FC = () => {
  return (
    <div>
      <>
        <BondCard token={token} />
      </>
    </div>
  )
}

// export const Details: React.FC = () => {
//   return (
//     <div>
//       <>
//         <DetailsCard
//           title={'Wave Token'}
//           symbol={'🌊'}
//           supply={'301'}
//           marketCap={'10,000'}
//           price={'0,3020'}
//           description={''}
//           schema={''}
//           contract={'https://etherscan.io/address/0xF02491e199565B9822ECf001eB6a336959D655C8'}
//           provider={'https://etherscan.io/address/0xF02491e199565B9822ECf001eB6a336959D655C8'}
//           baseTokenSymbol={'ZAP'}
//         />
//       </>
//     </div>
//   )
// }

// export const BondUI: React.FC = () => {
//   return (
//     <div>
//       <>
//         <BondUICard title={'Wave Token'} symbol={'🌊'} baseTokenSymbol={'ZAP'} />
//       </>
//     </div>
//   )
// }
