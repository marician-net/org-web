/* eslint-disable spaced-comment */
import React from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import { Text, Flex, LinkExternal } from 'toolkitUI'

export interface ExpandableSectionProps {
  bscScanAddress?: string
  infoAddress?: string
  removed?: boolean
  //totalValueFormatted?: string
  marketCap?: number
  //lpLabel?: string
  //addLiquidityUrl?: string
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  bscScanAddress,
  infoAddress,
  removed,
  marketCap,
  //lpLabel,
  //addLiquidityUrl,
}) => {
  const TranslateString = useI18n()

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Text color="primaryDark">{TranslateString(354, 'Implicit Market Cap')}:</Text>
        <Text color="primaryDark">{marketCap}</Text>
      </Flex>
      {/* 
      {!removed && (
        <StyledLinkExternal href={addLiquidityUrl}>
          {TranslateString(999, `Get ${lpLabel}`, { name: lpLabel })}
        </StyledLinkExternal>
      )} */}
      <StyledLinkExternal href={bscScanAddress}>{TranslateString(999, 'View Description')}</StyledLinkExternal>
      <StyledLinkExternal href={infoAddress}>{TranslateString(999, 'View Contract')}</StyledLinkExternal>
      <StyledLinkExternal href={infoAddress}>{TranslateString(999, 'View Provider')}</StyledLinkExternal>
    </Wrapper>
  )
}

export default DetailsSection
