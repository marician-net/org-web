import React from 'react'
import styled from 'styled-components'
/* eslint-disable import/no-unresolved */
import { Meta } from '@storybook/react/types-6-0'
import Bond from './Bond'

const Row = styled.div`
  display: flex;
  margin-bottom: 32px;

  & > input + input {
    margin-left: 16px;
  }
`

export default {
  title: 'View/Bond',
  component: Bond,
  argTypes: {},
} as Meta

export const Default: React.FC = () => {
  return (
    <div>
      <>
        <Bond />
      </>
    </div>
  )
}
