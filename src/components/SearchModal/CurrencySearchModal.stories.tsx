import React from 'react'
import { Story, Meta } from '@storybook/react'
import CurrencySearchModal from './CurrencySearchModal'

export default {
  title: 'ExchangeSwap/Components/CurrencySearchModal',
  component: CurrencySearchModal,
  argTypes: {},
} as Meta

export const Default: React.FC = () => {
  return (
    <div>
      <>
        <CurrencySearchModal />
      </>
    </div>
  )
}
