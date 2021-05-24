import addresses from 'config/constants/contracts'
import tokens from 'config/constants/tokens'
import { Address } from 'config/constants/types'

export const getAddress = (address: Address, chainID?: number): string => {
  const mainNetChainId = 1
  const chainId = chainID || process.env.REACT_APP_CHAIN_ID
  return address[chainId] ? address[chainId] : address[mainNetChainId]
}

/**
 *  Zap Addresses
 */

export const getZapAddress = (chainId?: number) => {
  return getAddress(tokens.zap.address, chainId)
}
export const getRegistryAddress = (chainId?: number) => {
  return getAddress(addresses.registry, chainId)
}
export const getBondageAddress = (chainId?: number) => {
  return getAddress(addresses.bondage, chainId)
}
export const getCurrentCostAddress = (chainId?: number) => {
  return getAddress(addresses.currentCost, chainId)
}
export const getTokenFactoryAddress = () => {
  return getAddress(addresses.tokenFactory)
}

/**
 * Pancakeswap Addresses
 */

export const getCakeAddress = () => {
  return getAddress(tokens.cake.address)
}
export const getMasterChefAddress = () => {
  return getAddress(addresses.masterChef)
}
export const getMulticallAddress = () => {
  return getAddress(addresses.mulltiCall)
}
export const getWbnbAddress = () => {
  return getAddress(tokens.wbnb.address)
}
export const getLotteryAddress = () => {
  return getAddress(addresses.lottery)
}
export const getLotteryTicketAddress = () => {
  return getAddress(addresses.lotteryNFT)
}
export const getPancakeProfileAddress = () => {
  return getAddress(addresses.pancakeProfile)
}
export const getPancakeRabbitsAddress = () => {
  return getAddress(addresses.pancakeRabbits)
}
export const getBunnyFactoryAddress = () => {
  return getAddress(addresses.bunnyFactory)
}
export const getClaimRefundAddress = () => {
  return getAddress(addresses.claimRefund)
}
export const getPointCenterIfoAddress = () => {
  return getAddress(addresses.pointCenterIfo)
}
export const getBunnySpecialAddress = () => {
  return getAddress(addresses.bunnySpecial)
}
export const getTradingCompetitionAddress = () => {
  return getAddress(addresses.tradingCompetition)
}
export const getEasterNftAddress = () => {
  return getAddress(addresses.easterNft)
}
