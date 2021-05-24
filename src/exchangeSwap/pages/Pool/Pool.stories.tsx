import React from 'react'
import { Story, Meta } from '@storybook/react'
import Pool from './index'

export default {
  title: 'ExchangeSwap/Components/Pool',
  component: Pool,
  argTypes: {},
} as Meta

export const Default: React.FC = () => {
  return (
    <div>
      <>
        <Pool />
      </>
    </div>
  )
}
