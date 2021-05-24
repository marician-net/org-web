import React from 'react'
import { Story, Meta } from '@storybook/react'
import CurrencySearch from './CurrencySearch'

export default {
  title: 'ExchangeSwap/Components/CurrencySearch',
  component: CurrencySearch,
  argTypes: {},
} as Meta

export const Default: React.FC = () => {
  return (
    <div>
      <>
        <CurrencySearch />
      </>
    </div>
  )
}
