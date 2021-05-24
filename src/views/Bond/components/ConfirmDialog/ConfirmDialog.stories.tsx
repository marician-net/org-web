import React from 'react'
import styled from 'styled-components'
/* eslint-disable import/no-unresolved */
import { Meta } from '@storybook/react/types-6-0'
import ConfirmDialog from './ConfirmDialog'
import { tsxStatus } from '../BondCard/BondUICard'

const Row = styled.div`
  display: flex;
  margin-bottom: 32px;

  & > input + input {
    margin-left: 16px;
  }
`

export default {
  title: 'View/Bond/Components/ConfirmDialog',
  component: ConfirmDialog,
  argTypes: {},
} as Meta

export const Standby: React.FC = () => {
  return (
    <div>
      <>
        <ConfirmDialog
          to="432 🌊"
          from="543 ZAP"
          average={'0.7956'}
          tsxHash={'0xa7ea6cdb4ce3b68c4acc2c303ab90563c38e1ec322b976798db828c29da0680a'}
          tsxState={tsxStatus.STANDBY}
          handleSendTsx={() => {}}
          handleAverageChange={() => {}}
        />
      </>
    </div>
  )
}

export const Sent: React.FC = () => {
  return (
    <div>
      <>
        <ConfirmDialog
          to="432 🌊"
          from="543 ZAP"
          average={'0.7956'}
          tsxHash={'0xa7ea6cdb4ce3b68c4acc2c303ab90563c38e1ec322b976798db828c29da0680a'}
          tsxState={tsxStatus.SENT}
          handleDismiss={() => {}}
          handleSendTsx={() => {}}
          handleAverageChange={() => {}}
        />
      </>
    </div>
  )
}
export const Confirmed: React.FC = () => {
  return (
    <div>
      <>
        <ConfirmDialog
          to="432 🌊"
          from="543 ZAP"
          average={'0.7956'}
          tsxHash={'0xa7ea6cdb4ce3b68c4acc2c303ab90563c38e1ec322b976798db828c29da0680a'}
          tsxState={tsxStatus.CONFIRMED}
          handleSendTsx={() => {}}
          handleAverageChange={() => {}}
        />
      </>
    </div>
  )
}

export const Error: React.FC = () => {
  return (
    <div>
      <>
        <ConfirmDialog
          to="432 🌊"
          from="543 ZAP"
          average={'0.7956'}
          tsxHash={'0xa7ea6cdb4ce3b68c4acc2c303ab90563c38e1ec322b976798db828c29da0680a'}
          tsxState={tsxStatus.ERROR}
          handleSendTsx={() => {}}
          handleAverageChange={() => {}}
        />
      </>
    </div>
  )
}
