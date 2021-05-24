import React from 'react'
import { Story, Meta } from '@storybook/react'
import PoolFinder from './index'

export default {
  title: 'ExchangeSwap/Components/PoolFinder',
  component: PoolFinder,
  argTypes: {},
} as Meta

export const Default: React.FC = () => {
  return (
    <div>
      <>
        <PoolFinder />
      </>
    </div>
  )
}
