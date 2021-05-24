import { parseBytes32String } from '@ethersproject/strings'
import { Currency, ETHER, Token, currencyEquals, ChainId } from '@pancakeswap-libs/sdk'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from 'state'
import { SerializedToken } from 'state/user/actions'
import { useSelectedTokenList } from '../state/lists/hooks'
import { NEVER_RELOAD, useSingleCallResult } from '../state/multicall/hooks'
// import { useUserAddedTokens } from '../state/user/hooks'
import { isAddress } from '../utils'

import { useActiveWeb3React } from './index'
import { useBytes32TokenContract, useTokenContract } from './useContract'

export function useAllTokens(): { [address: string]: Token } {
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

  const userAddedTokens = useUserAddedTokens()
  const allTokens = useSelectedTokenList()

  return useMemo(() => {
    if (!chainId) return {}
    return (
      userAddedTokens
        // reduce into all ALL_TOKENS filtered by the current chain
        .reduce<{ [address: string]: Token }>(
          (tokenMap, token) => {
            tokenMap[token.address] = token
            return tokenMap
          },
          // must make a copy because reduce modifies the map, and we do not
          // want to make a copy in every iteration
          { ...allTokens[chainId] }
        )
    )
  }, [chainId, userAddedTokens, allTokens])
}

// Check if currency is included in custom list from user storage
export function useIsUserAddedToken(currency: Currency): boolean {
  const userAddedTokens = useUserAddedTokens()
  return !!userAddedTokens.find((token) => currencyEquals(currency, token))
}

// parse a name or symbol from a token response
const BYTES32_REGEX = /^0x[a-fA-F0-9]{64}$/
function parseStringOrBytes32(str: string | undefined, bytes32: string | undefined, defaultValue: string): string {
  return str && str.length > 0
    ? str
    : bytes32 && BYTES32_REGEX.test(bytes32)
    ? parseBytes32String(bytes32)
    : defaultValue
}

// undefined if invalid or does not exist
// null if loading
// otherwise returns the token
export function useToken(tokenAddress?: string): Token | undefined | null {
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

  const tokens = useAllTokens()

  const address = isAddress(tokenAddress)

  let tokenContract
  let tokenContractBytes32
  try {
    tokenContract = useTokenContract(address || undefined, false)
  } catch (error) {
    console.log(error)
  }

  try {
    tokenContractBytes32 = useBytes32TokenContract(address || undefined, false)
  } catch (error) {
    console.log(error)
  }

  const token: Token | undefined = address ? tokens[address] : undefined

  let tokenName
  try {
    tokenName = useSingleCallResult(token ? undefined : tokenContract, 'name', undefined, NEVER_RELOAD)
  } catch (error) {
    console.log(error)
  }
 
  let tokenNameBytes32
  try {
    tokenNameBytes32 = useSingleCallResult(token ? undefined : tokenContractBytes32, 'name', undefined, NEVER_RELOAD)
  } catch (error) {
    console.log(error)
  }

  let symbol
  try {
    symbol = useSingleCallResult(token ? undefined : tokenContract, 'symbol', undefined, NEVER_RELOAD)
  } catch (error) {
    console.log(error)
  }

  let symbolBytes32
  try {
    symbolBytes32 = useSingleCallResult(token ? undefined : tokenContractBytes32, 'symbol', undefined, NEVER_RELOAD)
  } catch (error) {
    console.log(error)
  }

  let decimals
  try {
    decimals = useSingleCallResult(token ? undefined : tokenContract, 'decimals', undefined, NEVER_RELOAD)
  } catch (error) {
    console.log(error)
  }

  return useMemo(() => {
    if (token) return token
    if (!chainId || !address) return undefined
    if (decimals.loading || symbol.loading || tokenName.loading) return null
    if (decimals.result) {
      return new Token(
        chainId,
        address,
        decimals.result[0],
        parseStringOrBytes32(symbol.result?.[0], symbolBytes32.result?.[0], 'UNKNOWN'),
        parseStringOrBytes32(tokenName.result?.[0], tokenNameBytes32.result?.[0], 'Unknown Token')
      )
    }
    return undefined
  }, [
    // address,
    // chainId,
    // decimals.loading,
    // decimals.result,
    // symbol.loading,
    // symbol.result,
    // symbolBytes32.result,
    // token,
    // tokenName.loading,
    // tokenName.result,
    // tokenNameBytes32.result,
    address,
    chainId,
    decimals,
    symbol,
    symbolBytes32,
    token,
    tokenName, 
    tokenNameBytes32
  ])
}

export function useCurrency(currencyId: string | undefined): Currency | null | undefined {
  const isBNB = currencyId?.toUpperCase() === 'BNB'
  const token = useToken(isBNB ? undefined : currencyId)
  return isBNB ? ETHER : token
}

function deserializeToken(serializedToken: SerializedToken): Token {
  return new Token(
    serializedToken.chainId,
    serializedToken.address,
    serializedToken.decimals,
    serializedToken.symbol,
    serializedToken.name,
  )
}

export function useUserAddedTokens(): Token[] {
  let account
  let chainId
  let library
  try {
    ({ account } = useActiveWeb3React())
  } catch (error) {
    account = null
    console.log(error)
  }
  try {
    ({ chainId } = useActiveWeb3React())
  } catch (error) {
    chainId = null
    console.log(error)
  }
  try {
    ({ library } = useActiveWeb3React())
  } catch (error) {
    library = null
    console.log(error)
  }

  const serializedTokensMap = useSelector<AppState, AppState['user']['tokens']>(({ user: { tokens } }) => tokens)

  return useMemo(() => {
    if (!chainId) return []
    return Object.values(serializedTokensMap[chainId as ChainId] ?? {}).map(deserializeToken)
  }, [serializedTokensMap, chainId])
}
