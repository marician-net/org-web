import { Contract } from 'web3-eth-contract'
import { getBondageContract, getRegistryContract, getTokenDotFactoryContract, getErc20 } from 'utils/contractHelpers'

import Web3 from 'web3'
import useWeb3 from 'hooks/useWeb3'
import { connectorLocalStorageKey } from 'toolkitUI'
import ZapLabToken from '../entities/zapLabToken'

function removeNullChars(s: string): string {
  return s.replace(/\u0000/g, '')
}

export async function useZapLabTokens(): Promise<ZapLabToken[]> {
  const retVal = []
  try {
    const web3 = useWeb3()
    const chainId = await web3.eth.getChainId()
    const registry = getRegistryContract(web3, chainId)
    const bondage = getBondageContract(web3, chainId)

    const ethereum = window.web3.currentProvider
    const account = (await ethereum.request({ method: 'eth_accounts' }))[0]
    const allOracles = await registry.methods.getAllOracles().call()
    for (let i = 1; i < allOracles.length; i++) {
      const provider = allOracles[i]
      const ofProvider = await getAllOfProviderJustNames(provider, registry, bondage, web3)
      retVal.push(...ofProvider)
    }
  } catch (e) {
    console.error('ISSUE WITH GETTING ALL ORACLES', e)
  }
  return retVal
}

export async function getAllOfProviderJustNames(
  provider: string,
  registry: Contract,
  bondage: Contract,
  web3: Web3,
): Promise<ZapLabToken[]> {
  const retVal: ZapLabToken[] = []
  try {
    const title = await registry.methods.getTitle(provider).call()
    const endpoints = await registry.methods.getProviderEndpoints(provider).call()
    const account = (await web3.eth.getAccounts())[0]
    let userBound

    for (let i = 1; i < endpoints.length; i++) {
      const endpoint = endpoints[i]

      const toAdd = new ZapLabToken()
      const curve = await registry.methods.getProviderCurve(provider, endpoint).call()
      const broker = await registry.methods.getEndpointBroker(provider, endpoint).call()
      const dotsIssued = await bondage.methods.getDotsIssued(provider, endpoint).call()
      const dotLimit = await bondage.methods.dotLimit(provider, endpoint).call()
      const cost = await bondage.methods.calcZapForDots(provider, endpoint, 1).call()
      const zapBound = await bondage.methods.getZapBound(provider, endpoint).call()
      if (window.localStorage.getItem(connectorLocalStorageKey)) {
        userBound = await bondage.methods.getBoundDots(account, provider, endpoint).call()
      }
      const tokenCheck = await checkIsToken(provider, endpoint, web3)
      toAdd.providerTitle = removeNullChars(Web3.utils.hexToAscii(title))
      toAdd.totalBound = dotsIssued
      toAdd.spotPrice = Web3.utils.fromWei(cost)
      toAdd.providerAddress = provider
      toAdd.name = removeNullChars(Web3.utils.hexToAscii(endpoint))
      toAdd.brokerAddress = broker
      toAdd.curve = curve
      toAdd.json = ''
      toAdd.markdown = ''
      toAdd.dotLimit = dotLimit
      toAdd.userBound = tokenCheck.isToken ? tokenCheck.balance : userBound
      toAdd.zapBound = zapBound
      toAdd.isToken = tokenCheck.isToken
      toAdd.symbol = tokenCheck.symbol
      toAdd.tokenAddress = tokenCheck.tokenAdd
      toAdd.isTDFOwner = tokenCheck.isTDFOwner

      retVal.push(toAdd)
    }
  } catch (e) {
    console.error(`ISSUE WITH PROVIDER ${provider}`, e)
  }
  return retVal
}

export async function useSingleLabToken(
  provider: string,
  endpoint: string,
  registry: Contract,
  bondage: Contract,
  web3: Web3,
): Promise<ZapLabToken> {
  const retVal: ZapLabToken = new ZapLabToken()
  retVal.name = endpoint
  retVal.providerAddress = provider

  try {
    const account = (await web3.eth.getAccounts())[0]

    const name = Web3.utils.asciiToHex(endpoint)

    const title = await registry.methods.getTitle(provider).call()
    const params = await registry.methods.getAllProviderParams(provider).call()
    const paramLinks = []
    for (let i = 1; i < params.length; i++) {
      const current = await registry.methods.getProviderParameter(provider, params[i]).call()
      paramLinks.push(current)
    }

    const curve = await registry.methods.getProviderCurve(provider, name).call()
    const broker = await registry.methods.getEndpointBroker(provider, name).call()

    const dotsIssued = await bondage.methods.getDotsIssued(provider, name).call()
    const dotLimit = await bondage.methods.dotLimit(provider, name).call()
    const userBound = await bondage.methods.getBoundDots(account, provider, name).call()

    const cost = await bondage.methods.calcZapForDots(provider, name, 1).call()
    const zapBound = await bondage.methods.getZapBound(provider, name).call()

    const tokenCheck = await checkIsToken(provider, name, web3)

    retVal.providerTitle = removeNullChars(Web3.utils.hexToAscii(title))
    retVal.curve = curve
    retVal.providerParams = {}
    for (let i = 1; i < params.length; i++) {
      try {
        const k = removeNullChars(Web3.utils.hexToAscii(params[i]))
        retVal.providerParams[k] = Web3.utils.isHex(paramLinks[i]) ? Web3.utils.hexToAscii(paramLinks[i]) : ''
      } catch (e) {
        console.error(e)
      }
    }
    retVal.brokerAddress = broker
    retVal.totalBound = dotsIssued
    retVal.dotLimit = dotLimit
    retVal.spotPrice = Web3.utils.fromWei(cost)
    retVal.markdown = ''
    retVal.json = ''
    retVal.userBound = tokenCheck.isToken ? tokenCheck.balance : userBound
    retVal.zapBound = zapBound
    retVal.isToken = tokenCheck.isToken
    retVal.symbol = tokenCheck.symbol
    retVal.tokenAddress = tokenCheck.tokenAdd
    retVal.isTDFOwner = tokenCheck.isToken

    console.log(retVal)
  } catch (e) {
    console.error(`ISSUE WITH ${endpoint} BY ${provider}`, e)
  }
  return retVal
}

const checkIsToken = async (tdfAddress: string, tokenAsBytes32: string, web3: Web3) => {
  const retVal = {
    isToken: false,
    symbol: '',
    tokenAdd: '',
    balance: 0,
    isTDFOwner: false,
  }

  const wallet = (await web3.eth.getAccounts())[0]

  try {
    // Connection to the released Token Dot Facotry
    const tokenDotFactory = getTokenDotFactoryContract(tdfAddress, web3)

    const tokenAdd = await tokenDotFactory.methods.curves(tokenAsBytes32).call() // Returns an address

    const isToken = Web3.utils.isAddress(tokenAdd)

    if (!isToken) {
      return retVal
    }

    retVal.isToken = true
    retVal.tokenAdd = tokenAdd
    retVal.isTDFOwner = wallet === (await tokenDotFactory.methods.owner().call())
  } catch (e) {
    console.error("Not a token",e)
    return retVal
  }

  try {
    const token = getErc20(retVal.tokenAdd, web3)
    const symbol = await token.methods.symbol().call()
    retVal.symbol = removeNullChars(symbol)
    retVal.balance = await token.methods.balanceOf(wallet).call()
  } catch (e) {
    console.error("Not a token",e)
  }
  return retVal
}
