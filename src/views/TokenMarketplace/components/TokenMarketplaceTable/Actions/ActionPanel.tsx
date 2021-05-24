import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import { Button, LinkExternal, Text, Flex, useMatchBreakpoints } from 'toolkitUI'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'

const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  width: 100%;
  padding: 24px;
  flex-wrap: wrap;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    padding: 16px 32px;
    flex-wrap: nowrap;
  }
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const ActionContainer = styled.div`
  width: 100%;
  margin: 16px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${({ theme }) => theme.colors.primaryBright};
  border-radius: 28px;
  flex-grow: 1;
  padding: 8px 16px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: calc(50% - 10px);
    margin-right: 10px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0 16px 0 0;
  }
`

const InfoContainer = styled.div`
  min-width: 200px;
  width: 50%;
`

const ActionPanel: React.FunctionComponent<any> = ({ details }) => {
  const TranslateString = useI18n()
  const { isXl } = useMatchBreakpoints()

  return (
    <Container>
      <InfoContainer>
        <StyledLinkExternal href='https://exchange.pancakeswap.finance/#/dda'>
          {TranslateString(999, `View Description`)}
        </StyledLinkExternal>
        <StyledLinkExternal href='https://exchange.pancakeswap.finance/#/dda'>{TranslateString(999, 'View JSON Schema')}</StyledLinkExternal>
        <StyledLinkExternal href='https://exchange.pancakeswap.finance/#/dda'>{TranslateString(999, 'View Contract')}</StyledLinkExternal>
        <StyledLinkExternal href='https://exchange.pancakeswap.finance/#/dda'>{TranslateString(999, 'View Provider')}</StyledLinkExternal>
      </InfoContainer>
      <ActionContainer>
        <Text color="primary" fontSize="16px">ZAP VALUE</Text>
        <Text bold color="primaryDark" fontSize="24px">{ details.price }</Text>
      </ActionContainer>
      {
        !isXl &&
        <ActionContainer>
          <Flex height="100%" justifyContent='space-between' alignItems='center'>
            <Flex height="100%" flexDirection='column' justifyContent='space-between' mr="12px">
              <Flex>
                <Text color="primary" fontSize="16px">{ details.symbol }</Text>
                <Text ml="4px" color="primaryDark" fontSize="16px">Owned</Text>
              </Flex>
              <Text bold color="primaryDark" fontSize="24px">{ details.bondedSupply }</Text>
            </Flex>
            <Button variant="primary" width= "100%" size="sm">Unlock Wallet</Button>
          </Flex>
        </ActionContainer>
      }
      <ActionContainer>
        <Text color="primary" fontSize="16px">Bond to Mint</Text>
        <Button variant="bubblegum" width= "100%">Bond</Button>
      </ActionContainer>
    </Container>
  )
}

export default ActionPanel
