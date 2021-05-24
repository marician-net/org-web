import React, { useState } from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import { useMatchBreakpoints, Image, Flex, Heading, Text } from 'toolkitUI'

import { RaiseToken } from 'state/types'
import BigNumber from 'bignumber.js'
import { NewTag } from 'components/Tags'
import Details from './Details'
import ActionPanel from './Actions/ActionPanel'
import CellLayout from './CellLayout'

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

const StyledTd = styled.td`
  padding: 20px;
  position: relative;
`

const DetailsContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
`

const Row: React.FunctionComponent<any> = (props) => {
  const { details } = props
  const [actionPanelToggled, setActionPanelToggled] = useState(false)
  const TranslateString = useI18n()

  const toggleActionPanel = () => {
    setActionPanelToggled(!actionPanelToggled)
  }

  const { isXl, isXs } = useMatchBreakpoints()

  const isMobile = !isXl

  const handleRenderRow = () => {
    if (!isMobile) {
      return (
        <StyledTr onClick={toggleActionPanel}>
          <StyledTd>
            <Flex alignItems='center'>
              <Image alt="Provider Curve" src={null} width={100} height={60} />
              <Heading ml="8px" mr="8px" color="primaryDark">{details.name}</Heading>
              <NewTag />
            </Flex>
          </StyledTd>
          <StyledTd>
            <Text color="primary" fontSize="16px">Spot Price</Text>
            <Text bold color="primaryDark" fontSize="24px">{details.price} ZAP</Text>
          </StyledTd>
          <StyledTd>
            <Flex>
              <Text color="primary" fontSize="16px">
                { details.symbol }
              </Text>
              <Text ml="4px" color="primary" fontSize="16px">
                OWNED
              </Text>
            </Flex>
            <Text bold color="primaryDark" fontSize="24px">{details.bondedSupply}</Text>
          </StyledTd>
          <StyledTd>
            <CellInner>
              <CellLayout>
                <Details actionPanelToggled={actionPanelToggled} />
              </CellLayout>
            </CellInner>
          </StyledTd>
        </StyledTr>
      )
    }

    return (
      <StyledTr onClick={toggleActionPanel}>
        <StyledTd>
          <Flex alignItems='center'>
            <Image alt="Provider Curve" src={null} width={45} height={45} />
            <Heading ml="8px" color="primaryDark">{details.name}</Heading>
          </Flex>
        </StyledTd>
        <StyledTd>
          <Text color="primaryDark" fontSize="16px">Spot Price</Text>
          <Text bold color="primaryDark" fontSize="24px">{details.price} ZAP</Text>
          <DetailsContainer>
            <Details actionPanelToggled={actionPanelToggled} />
          </DetailsContainer>
        </StyledTd>
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
