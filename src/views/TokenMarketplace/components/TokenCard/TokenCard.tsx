import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import { communityFarms } from 'config/constants'
import { Farm, RaiseToken } from 'state/types'
import { provider as ProviderType } from 'web3-core'
import useI18n from 'hooks/useI18n'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { Flex, Text, Skeleton } from 'toolkitUI'
import DetailsSection from './DetailsSection'
import CardHeading from './CardHeading'
import CardActionsContainer from './CardActionsContainer'
import ApyButton from './ApyButton'
import BondAction from './BondAction'

export interface RaiseTokenBonded extends RaiseToken {
  owned?: number
}

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

const FCard = styled.div`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 32px;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
  /*  */
  min-width: 280px;
  max-width: 31.5%;
  width: 100%;
  margin: 0px 8px 32px;
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.borderColor};
  height: 1px;
  margin: 20px auto;
  width: 100%;
`

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`

interface TokenCardProps {
  //  farm: FarmWithStakedValue
  token: RaiseTokenBonded
  removed: boolean
  cakePrice?: BigNumber
  provider?: ProviderType
  account?: string
}

const TokenCard: React.FC<TokenCardProps> = ({ token, removed, account }) => {
  const TranslateString = useI18n()

  const [showExpandableSection, setShowExpandableSection] = useState(false)

  // const isCommunityFarm = communityFarms.includes(farm.token.symbol)
  const isNewToken = token.isNewToken; // Add condition here
  // We assume the token name is coin pair + lp e.g. CAKE-BNB LP, LINK-BNB LP,
  // NAR-CAKE LP. The images should be cake-bnb.svg, link-bnb.svg, nar-cake.svg
  const farmImage = "*provider curve here*" // farm.lpSymbol.split(' ')[0].toLocaleLowerCase()

  const totalValueFormatted = /* farm.liquidity
    ? `$${farm.liquidity.toNumber().toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    : */ '-'

  // const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('PANCAKE', '')
  // const earnLabel = farm.dual ? farm.dual.earnLabel : 'ZAP'

  // const farmAPY = farm.apy && farm.apy.toLocaleString('en-US', { maximumFractionDigits: 2 })

  /* const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: farm.quoteToken.address,
    tokenAddress: farm.token.address,
  })
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  const lpAddress = farm.lpAddresses[process.env.REACT_APP_CHAIN_ID] */

  return (
    <FCard>
      {/* {farm.token.symbol === 'CAKE' && <StyledCardAccent />} */}
      {<CardHeading
        name={token.name}
        // multiplier={farm.multiplier}
        isNewToken={isNewToken}
        // farmImage={farmImage}
        tokenSymbol={token.symbol}
      />}
      {!removed && (
        <Flex justifyContent="space-between" alignItems="center">
          {/* <Text>{TranslateString(736, 'APR')}:</Text>
          <Text bold style={{ display: 'flex', alignItems: 'center' }}>
            {farm.apy ? (
              <>
                <ApyButton lpLabel={lpLabel} addLiquidityUrl={addLiquidityUrl} cakePrice={cakePrice} apy={farm.apy} />
                {farmAPY}%
              </>
            ) : (
              <Skeleton height={24} width={80} />
            )}
          </Text> */}
        </Flex>
      )}
      <CardActionsContainer token={token} account={account} /* addLiquidityUrl={addLiquidityUrl} */ />
      <BondAction />
      <Divider />
      <ExpandableSectionButton
        onClick={() => setShowExpandableSection(!showExpandableSection)}
        expanded={showExpandableSection}
      />
      <ExpandingWrapper expanded={showExpandableSection}>
        <DetailsSection
          removed={removed}
          marketCap={token.marketCap}
        />
      </ExpandingWrapper>
    </FCard>
  )
}

export default TokenCard
