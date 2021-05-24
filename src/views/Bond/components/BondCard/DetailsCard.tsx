import React from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import { Farm } from 'state/types'
import { Heading } from 'toolkitUI/components/Heading'
import { Text } from 'toolkitUI/components/Text'
import { LinkExternal } from 'toolkitUI/components/Link/index'
import { Flex } from 'toolkitUI/components/Box'
import { GiRapidshareArrow } from 'react-icons/gi'
import Web3 from 'web3'
import { IconButton } from 'toolkitUI/components/Button'
import ZapLabToken from 'entities/zapLabToken'

const RainbowLight = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 32px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

const DCard = styled.div`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  border-radius: 32px;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  width: 100%;
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.borderColor};
  height: 1px;
  margin: 28px auto;
  width: 100%;
`

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`

interface DetailsCardProps {
  // title: string
  // symbol: string
  // supply: string
  // marketCap: string
  // price: string
  // description: string
  // schema: string
  // contract: string
  // provider: string
  baseTokenSymbol?: string
  token: ZapLabToken
  handleFlip?: () => void
}

const DetailsCard: React.FC<DetailsCardProps> = ({ token, handleFlip, baseTokenSymbol = 'ZAP' }) => {
  const { name, symbol, totalBound, dotLimit, spotPrice, markdown, json, tokenAddress, providerAddress } = token
  const marketData = [
    {
      type: 'Current Bonded Supply',
      data: `${totalBound} ${symbol}`,
    },
    {
      type: 'Implicit Market Cap',
      data: `${dotLimit} ${symbol}`,
    },
    {
      type: 'Spot Price',
      data: `${(spotPrice)} ${(baseTokenSymbol)}`,
    },
  ]

  const links = [
    {
      type: 'Description',
      link: markdown,
    },
    {
      type: 'JSON Schema',
      link: json,
    },
    {
      type: 'Contract',
      link: tokenAddress,
    },
    {
      type: 'Provider',
      link: providerAddress,
    },
  ]

  return (
    <DCard>
      <Flex justifyContent="space-between">
        <span>
          <Heading size="xl">{name}</Heading>
        </span>
        <span>
          <p>
            <IconButton onClick={handleFlip} variant="text">
              <GiRapidshareArrow
                size={24}
                style={{
                  transform: `rotate(290deg)`,
                }}
              />
            </IconButton>
          </p>
        </span>
      </Flex>
      {marketData.map((e, i) => {
        return (
          <>
            <Text key={e.type}>{e.type}</Text>
            <Text key={e.data} bold fontSize="24px" textAlign="right">
              {e.data}
            </Text>
          </>
        )
      })}
      {links.map((e, i) => {
        return (
          <LinkExternal key={e.type} small href={e.link}>
            {e.type}
          </LinkExternal>
        )
      })}
    </DCard>
  )
}

export default DetailsCard
