import React from 'react'
import { Story, Meta } from '@storybook/react'
import RemoveLiquidty from './index'
// import Currency from '@pancakeswap-libs/sdk'
// import { RouteComponentProps } from 'react-router'


export default {
  title: 'ExchangeSwap/Components/RemoveLiquidty',
  component: RemoveLiquidty,
  argTypes: {},
} as Meta

const Template: React.FC = (args) => {
  return (
    <div>
      <>
        <RemoveLiquidty {...args} />
      </>
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  history: null,
  match: { params: { currencyIdA: "BNB", currencyIdB: "ETHER" } },
}