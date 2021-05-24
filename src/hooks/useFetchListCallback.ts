import { nanoid } from '@reduxjs/toolkit'
import { ChainId } from '@pancakeswap-libs/sdk'
import { TokenList } from '@uniswap/token-lists'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { getNetworkLibrary, NETWORK_CHAIN_ID } from '../connectors'
import { AppDispatch } from '../state'
import { fetchTokenList } from '../state/lists/actions'
import getTokenList from '../utils/getTokenList'
import resolveENSContentHash from '../utils/resolveENSContentHash'
import { useActiveWeb3React } from './index'

export function useFetchListCallback(): (listUrl: string) => Promise<TokenList> {
    
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

  const dispatch = useDispatch<AppDispatch>()

  const ensResolver = useCallback(
    (ensName: string) => {
      if (!library || chainId !== ChainId.MAINNET) {
        if (NETWORK_CHAIN_ID === ChainId.MAINNET) {
          const networkLibrary = getNetworkLibrary()
          if (networkLibrary) {
            return resolveENSContentHash(ensName, networkLibrary)
          }
        }
        throw new Error('Could not construct mainnet ENS resolver')
      }
      return resolveENSContentHash(ensName, library)
    },
    [chainId, library]
  )

  return useCallback(
    async (listUrl: string) => {
      const requestId = nanoid()
      dispatch<any>(fetchTokenList.pending({ requestId, url: listUrl }))
      return getTokenList(listUrl, ensResolver)
        .then((tokenList) => {
          dispatch<any>(fetchTokenList.fulfilled({ url: listUrl, tokenList, requestId }))
          return tokenList
        })
        .catch((error) => {
          console.error(`Failed to get list at url ${listUrl}`, error)
          dispatch<any>(fetchTokenList.rejected({ url: listUrl, requestId, errorMessage: error.message }))
          throw error
        })
    },
    [dispatch, ensResolver]
  )
}

export default useFetchListCallback
