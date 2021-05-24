import React from 'react'
import { Story, Meta } from '@storybook/react'
import Swap from './index'


export default {
  title: 'ExchangeSwap/Components/Swap',
  component: Swap,
  argTypes: {},
} as Meta

export const Default: React.FC = () => {
  return (
    <div>
        <>
          <Swap />  
        </>
    </div>
  );
};