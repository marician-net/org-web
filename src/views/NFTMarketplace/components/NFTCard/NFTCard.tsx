import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import { RaiseNFT } from 'state/types'
import { provider as ProviderType } from 'web3-core'
import { Flex, Image, Text } from 'toolkitUI'
import { NewTag } from 'components/Tags'
import CardAction from './CardAction'

const NCard = styled.div`
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
  min-width: 160px;
  max-width: 23.5%;
  width: 100%;
  margin: 0px 8px 32px;
`

const NftImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 32px;
`;


interface NFTCardProps {  
  token: RaiseNFT
  removed: boolean
  cakePrice?: BigNumber
  provider?: ProviderType
  account?: string
}

const NFTCard: React.FC<NFTCardProps> = ({ token, removed, account }) => {
  return (
    <NCard>
      <div style={{width: '100%', paddingTop: '120%', position: 'relative', borderRadius: '32px'}}>
        <NftImage alt={token.name} src={token.tokenURI} />
      </div>
      <Text color="primaryDark" textAlign="left">{token.name}</Text>
      <Flex mt="8px" mb="8px" justifyContent="space-between">
        <Flex>
          <img alt="Zap" src="/images/nfts/zap.svg" style={{maxHeight: '25px', marginRight: '5px'}}/>
          <Text color="primaryDark" textAlign="left">{token.price}</Text>
        </Flex>
        {token.isNewToken ? <NewTag /* style={{background: 'linear-gradient(119.91deg, #3480F6 36.36%, #0DD8D0 84.22%)'}} */ /> : null}
      </Flex>
      <CardAction/>
    </NCard>
  )
}

export default NFTCard
