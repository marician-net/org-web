import React from 'react'
import styled from 'styled-components'
import { NewTag, /* CommunityTag, CoreTag */ } from 'components/Tags'
import { Tag, Flex, Heading, Image } from 'toolkitUI'

export interface ExpandableSectionProps {
  name?: string
  // multiplier?: string
  // isCommunityFarm?: boolean
  isNewToken?: boolean
  // farmImage?: string
  tokenSymbol?: string
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 4px;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  name,
  // multiplier,
  // isCommunityFarm,
  isNewToken,
  tokenSymbol,
}) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <Image alt="Provider Curve" src={null} width={64} height={64} /> {/* PROVIDER CURVE HERE */}
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading mb="4px" color="primaryDark">{name}</Heading>
        <Flex justifyContent="center">
          {/* {isCommunityFarm ? <CommunityTag /> : <CoreTag />} */}
          {isNewToken ? <NewTag /* style={{background: 'linear-gradient(119.91deg, #3480F6 36.36%, #0DD8D0 84.22%)'}} */ /> : null}
          {/* <MultiplierTag variant="secondary">{multiplier}</MultiplierTag> */}
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
