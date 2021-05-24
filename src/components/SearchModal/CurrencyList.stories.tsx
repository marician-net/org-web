import React from 'react'
import { Story, Meta } from '@storybook/react'
import CurrencyList from './CurrencyList'

export default {
  title: 'ExchangeSwap/Components/CurrencyList',
  component: CurrencyList,
  argTypes: {},
} as Meta

export const Default: React.FC = () => {
  return (
    <div>
      <>
        <CurrencyList />
      </>
    </div>
  )
}
