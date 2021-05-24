import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AiOutlineArrowDown, AiOutlineSwap, AiOutlineCheckCircle, AiOutlineExclamationCircle } from 'react-icons/ai'
import ModalActions from 'components/ModalActions'
import { Button, Modal, BalanceInput, IconButton, Text, LinkExternal } from 'toolkitUI'
import { Handler, InjectedProps } from 'toolkitUI/widgets/Modal/types'
import { tsxStatus } from 'views/Bond/components/BondCard/BondUICard'

export interface ConfirmDialogProps extends InjectedProps {
  from: string
  to: string
  average: string
  tsxState: string
  tsxHash?: string
  handleAverageChange: Handler
  handleSendTsx: Handler
  handleClose: Handler
  chainId: number
}

const SpanButton = styled(Button)`
  width: 100%;
`

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Space = styled.div`
  margin: 12px;
  width: 100%;
`

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  onDismiss,
  from,
  to,
  handleSendTsx,
  handleAverageChange,
  average,
  tsxState,
  tsxHash,
  handleClose,
  chainId,
}) => {
  const title =
    tsxState === tsxStatus.STANDBY
      ? 'Confirm Transaction'
      : `Transaction  ${
          tsxState === tsxStatus.SENT ? 'Pending' : tsxState === tsxStatus.CONFIRMED ? 'Confirmed' : 'Error'
        }`

  const tsxEllipsis = tsxHash ? `${tsxHash.substring(0, 4)}...${tsxHash.substring(tsxHash.length - 4)}` : null

  const tsxLink = chainId === 1 ? `https://etherscan.io/tx/${tsxHash}` : `https://kovan.etherscan.io/tx/${tsxHash}`
  const txLinkComp = (
    <Text>
      Transaction Hash: <LinkExternal href={tsxLink}>{tsxEllipsis}</LinkExternal>
    </Text>
  )

  const standbyState = (
    <>
      <BalanceInput value={from} />
      <Space>
        <Center>
          <AiOutlineArrowDown size={21} />
        </Center>
      </Space>
      <BalanceInput value={to} />
      <Text textAlign="right">
        {average}
        <IconButton scale="sm" variant="text" onClick={handleAverageChange}>
          <AiOutlineSwap size={14} />
        </IconButton>
      </Text>
      <ModalActions>
        <SpanButton onClick={handleClose} variant="secondary">
          Cancel
        </SpanButton>
        <SpanButton onClick={handleSendTsx} variant="buttongum">
          Confirm
        </SpanButton>
      </ModalActions>
    </>
  )

  const sentState = (
    <>
      {txLinkComp}
      <ModalActions>
        <SpanButton onClick={handleClose} variant="buttongum">
          Close
        </SpanButton>
      </ModalActions>
    </>
  )

  const confirmedState = (
    <>
      <Center>
        <AiOutlineCheckCircle size={64} />
      </Center>
      {txLinkComp}
      <ModalActions>
        <SpanButton onClick={handleClose} variant="buttongum">
          Close
        </SpanButton>
      </ModalActions>
    </>
  )

  const errorState = (
    <>
      <Center>
        <AiOutlineExclamationCircle size={64} />
      </Center>
      {txLinkComp}
      <ModalActions>
        <SpanButton onClick={handleClose} variant="buttongum">
          Close
        </SpanButton>
      </ModalActions>
    </>
  )

  return (
    <Modal title={title} onDismiss={handleClose}>
      {tsxState === tsxStatus.STANDBY && standbyState}
      {tsxState === tsxStatus.SENT && sentState}
      {tsxState === tsxStatus.CONFIRMED && confirmedState}
      {tsxState === tsxStatus.ERROR && errorState}
    </Modal>
  )
}

export default ConfirmDialog
