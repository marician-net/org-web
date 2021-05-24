import React, { useState } from 'react'
import styled from 'styled-components'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import useI18n from 'hooks/useI18n'
import { useMatchBreakpoints } from 'toolkitUI'
import { Transaction } from 'state/types'
import TxHash, { TxHashProps } from './TxHash'
import Farm, { FarmProps } from './Farm'
import Status, { StatusProps } from './Status'
import Details, { DetailsProps } from './Details'
import Timestamp, { TimestampProps } from './Timestamp'
import TxAction, { TxActionProps } from './TxAction'
import Block, { BlockProps } from './Block'
import ActionPanel, { ActionPanelProps } from './Actions/ActionPanel'
import CellLayout from './CellLayout'
import { DesktopColumnSchema, MobileColumnSchema } from '../types'

export interface RowProps {
  txHash: TxHashProps
  farm: FarmProps
  status: StatusProps
  timestamp: TimestampProps
  block: BlockProps
  details: Transaction,
  txAction: TxActionProps,
  from: FromProps,
  to: ToProps
}
export interface FromProps {
  from: string
}
export interface ToProps {
  to: string
}

const cells = {
  txHash: TxHash,
  farm: Farm,
  status: Status,
  details: Details,
  timestamp: Timestamp,
  block: Block,
  txAction: TxAction
}

const CellInner = styled.div`
  padding: 24px 0px;
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 8px;

  ${({ theme }) => theme.mediaQueries.xl} {
    padding-right: 32px;
  }
`

const StyledTr = styled.tr`
  cursor: pointer;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderColor};
`

const StatusMobileCell = styled.td`
  padding: 16px 0 24px 16px;
`

const TxHashMobileCell = styled.td`
  padding-top: 16px;
  padding-bottom: 24px;
`

const FarmMobileCell = styled.td`
  padding-top: 24px;
`

const Row: React.FunctionComponent<RowProps> = (props) => {
  const { details } = props
  const [actionPanelToggled, setActionPanelToggled] = useState(false)
  const TranslateString = useI18n()

  const toggleActionPanel = () => {
    setActionPanelToggled(!actionPanelToggled)
  }

  const { isXl, isXs } = useMatchBreakpoints()

  const isMobile = !isXl
  const tableSchema = isMobile ? MobileColumnSchema : DesktopColumnSchema
  const columnNames = tableSchema.map((column) => column.name)

  const handleRenderRow = () => {
    if (!isXs) {
      return (
        <StyledTr onClick={toggleActionPanel}>
          {Object.keys(props).map((key) => {
            const columnIndex = columnNames.indexOf(key)
            if (columnIndex === -1) {
              return null
            }

            switch (key) {
              case 'details':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout>
                        <Details actionPanelToggled={actionPanelToggled} />
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              case 'txHash':
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout label={TranslateString(736, 'Transaction Hash')}>
                        <TxHash {...props.txHash} />
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              default:
                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout
                        label={TranslateString(tableSchema[columnIndex].translationId, tableSchema[columnIndex].label)}
                      >
                        {React.createElement(cells[key], props[key])}
                      </CellLayout>
                    </CellInner>
                  </td>
                )
            }
          })}
        </StyledTr>
      )
    }

    return (
      <StyledTr onClick={toggleActionPanel}>
        <td>
          <tr>
            <FarmMobileCell>
              <CellLayout>
                <Farm {...props.farm} />
              </CellLayout>
            </FarmMobileCell>
          </tr>
          <tr>
            <StatusMobileCell>
              <CellLayout label={TranslateString(1072, 'Status')}>
                <Status {...props.status} />
              </CellLayout>
            </StatusMobileCell>
            <TxHashMobileCell>
              <CellLayout label={TranslateString(736, 'TxHash')}>
                <TxHash {...props.txHash} />
              </CellLayout>
            </TxHashMobileCell>
          </tr>
        </td>
        <td>
          <CellInner>
            <CellLayout>
              <Details actionPanelToggled={actionPanelToggled} />
            </CellLayout>
          </CellInner>
        </td>
      </StyledTr>
    )
  }

  return (
    <>
      {handleRenderRow()}
      {actionPanelToggled && details && (
        <tr>
          <td colSpan={6}>
            <ActionPanel {...props} />
          </td>
        </tr>
      )}
    </>
  )
}

export default Row
