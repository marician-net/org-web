import React from 'react'
import { Story, Meta } from '@storybook/react'

const Test = () => {
  return(
    <h1> hello </h1>
  )
}
  
export default {
  title: 'ExchangeSwap/Components/Test',
  component: Test,
  argTypes: {},
} as Meta

export const Default: React.FC = () => {
  return (
    <div>
        <>
          <Test />  
        </>
    </div>
  );
};