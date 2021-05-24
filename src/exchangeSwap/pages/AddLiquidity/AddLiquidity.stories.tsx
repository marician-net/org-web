import React from 'react'
import { Story, Meta } from '@storybook/react'
import AddLiquidity from './index'


export default {
  title: 'ExchangeSwap/Components/AddLiquidity',
  component: AddLiquidity,
  argTypes: {},
} as Meta

const Template: React.FC = (args) => {
  return (
    <div>
      <>
        <AddLiquidity {...args} />
      </>
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  history: null,
  match: { params: { currencyIdA: "BNB", currencyIdB: "ETHER" } },
}