/* eslint-disable default-case */
/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import { Contract } from '@ethersproject/contracts'
import { ChainId, WETH } from '@pancakeswap-libs/sdk'
import { abi as IUniswapV2PairABI } from '@uniswap/v2-core/build/IUniswapV2Pair.json'
import { useMemo } from 'react'
import useWeb3 from 'hooks/useWeb3'


import {
  getBep20Contract,
  getCakeContract,
  getBunnyFactoryContract,
  getBunnySpecialContract,
  getPancakeRabbitContract,
  getProfileContract,
  getIfoContract,
  getLotteryContract,
  getLotteryTicketContract,
  getMasterchefContract,
  getPointCenterIfoContract,
  getSouschefContract,
  getClaimRefundContract,
  getTradingCompetitionContract,
  getEasterNftContract,
} from 'utils/contractHelpers'
import ENS_ABI from '../constants/abis/ens-registrar.json'
import ENS_PUBLIC_RESOLVER_ABI from '../constants/abis/ens-public-resolver.json'
import { ERC20_BYTES32_ABI } from '../constants/abis/erc20'
import ERC20_ABI from '../constants/abis/erc20.json'
import WETH_ABI from '../constants/abis/weth.json'
import { MULTICALL_ABI, MULTICALL_NETWORKS } from '../constants/multicall'
import { getContract } from '../utils'
import { useActiveWeb3React } from './index'


// returns null on errors
function useContract(address: string | undefined, ABI: any, withSignerIfPossible = true): Contract | null {
     let account; let chainId; let library;
  try{
    ({account} = useActiveWeb3React())
  }catch(error){
    account = null 
    console.log(error)
  }
  try{
    ({chainId} = useActiveWeb3React())
  }catch(error){
    chainId = null 
    console.log(error)
  }
  try{
    ({library} = useActiveWeb3React())
  }catch(error){
    library = null 
    console.log(error)
  }

  return useMemo(() => {
    if (!address || !ABI || !library) return null
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [address, ABI, library, withSignerIfPossible, account])
}

export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  console.log('inside use toKen contract')
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible)
}

export function useWETHContract(withSignerIfPossible?: boolean): Contract | null {
     let account; let chainId; let library;
  try{
    ({account} = useActiveWeb3React())
  }catch(error){
    account = null 
    console.log(error)
  }
  try{
    ({chainId} = useActiveWeb3React())
  }catch(error){
    chainId = null 
    console.log(error)
  }
  try{
    ({library} = useActiveWeb3React())
  }catch(error){
    library = null 
    console.log(error)
  }
  return useContract(chainId ? WETH[chainId].address : undefined, WETH_ABI, withSignerIfPossible)
}

export function useENSRegistrarContract(withSignerIfPossible?: boolean): Contract | null {
     let account; let chainId; let library;
  try{
    ({account} = useActiveWeb3React())
  }catch(error){
    account = null 
    console.log(error)
  }
  try{
    ({chainId} = useActiveWeb3React())
  }catch(error){
    chainId = null 
    console.log(error)
  }
  try{
    ({library} = useActiveWeb3React())
  }catch(error){
    library = null 
    console.log(error)
  }
  let address: string | undefined
  if (chainId) {
    switch (chainId) {
      case ChainId.MAINNET:
      case ChainId.BSCTESTNET:
    }
  }
  return useContract(address, ENS_ABI, withSignerIfPossible)
}

export function useENSResolverContract(address: string | undefined, withSignerIfPossible?: boolean): Contract | null {
  return useContract(address, ENS_PUBLIC_RESOLVER_ABI, withSignerIfPossible)
}

export function useBytes32TokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_BYTES32_ABI, withSignerIfPossible)
}

export function usePairContract(pairAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(pairAddress, IUniswapV2PairABI, withSignerIfPossible)
}

export function useMulticallContract(): Contract | null {
  //    let account; let chainId; let library;
  // try{
  //   ({account} = useActiveWeb3React())
  // }catch(error){
  //   account = null 
  //   console.log(error)
  // }
  // try{
  //   ({chainId} = useActiveWeb3React())
  // }catch(error){
  //   chainId = null 
  //   console.log(error)
  // }
  // try{
  //   ({library} = useActiveWeb3React())
  // }catch(error){
  //   library = null 
  //   console.log(error)
  // }
  // return useContract(chainId && MULTICALL_NETWORKS[chainId], MULTICALL_ABI, false)
  return null
}
/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useIfoContract = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getIfoContract(address, web3), [address, web3])
}

export const useERC20 = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getBep20Contract(address, web3), [address, web3])
}

export const useCake = () => {
  const web3 = useWeb3()
  return useMemo(() => getCakeContract(web3), [web3])
}

export const useBunnyFactory = () => {
  const web3 = useWeb3()
  return useMemo(() => getBunnyFactoryContract(web3), [web3])
}

export const usePancakeRabbits = () => {
  const web3 = useWeb3()
  return useMemo(() => getPancakeRabbitContract(web3), [web3])
}

export const useProfile = () => {
  const web3 = useWeb3()
  return useMemo(() => getProfileContract(web3), [web3])
}

export const useLottery = () => {
  const web3 = useWeb3()
  return useMemo(() => getLotteryContract(web3), [web3])
}

export const useLotteryTicket = () => {
  const web3 = useWeb3()
  return useMemo(() => getLotteryTicketContract(web3), [web3])
}

export const useMasterchef = () => {
  const web3 = useWeb3()
  return useMemo(() => getMasterchefContract(web3), [web3])
}

export const useSousChef = (id) => {
  const web3 = useWeb3()
  return useMemo(() => getSouschefContract(id, web3), [id, web3])
}

export const usePointCenterIfoContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getPointCenterIfoContract(web3), [web3])
}

export const useBunnySpecialContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getBunnySpecialContract(web3), [web3])
}

export const useClaimRefundContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getClaimRefundContract(web3), [web3])
}

export const useTradingCompetitionContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getTradingCompetitionContract(web3), [web3])
}

export const useEasterNftContract = () => {
  const web3 = useWeb3()
  return useMemo(() => getEasterNftContract(web3), [web3])
}
