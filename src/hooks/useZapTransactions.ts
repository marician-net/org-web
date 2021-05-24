import { Contract } from 'web3-eth-contract'
import { getBondageContract, getRegistryContract } from 'utils/contractHelpers'

import Web3 from 'web3'
import useWeb3 from 'hooks/useWeb3'
import { ethers } from 'ethers'
import bondageAbi from 'config/abi/bondage.json'
import ZapTransaction from '../entities/zapTransaction'

export default async function useZapTransactionsList(): Promise<ZapTransaction[]> {
  const transactions = []
  try {
    const web3 = useWeb3()
    const chainId = await web3.eth.getChainId()
    const registry = getRegistryContract(web3, chainId)
    const bondage = getBondageContract(web3, chainId)

    const ethereum = window.web3.currentProvider
    const allTransactions = await bondage.getPastEvents("allEvents", {fromBlock: 4000, toBlock: 'latest'})
    // console.log(allTransactions)
    const transactionArraySliced = allTransactions.slice(allTransactions.length - 10, allTransactions.length).reverse()
    for (let i = 0; i < transactionArraySliced.length - 1; i++) {
      
      const newTxn = new ZapTransaction()

      newTxn.txHash = transactionArraySliced[i].transactionHash;
      newTxn.block = transactionArraySliced[i].blockNumber
      const blockObject = await web3.eth.getBlock(newTxn.block)
      const transactionDetails = await web3.eth.getTransaction(newTxn.txHash)
      const transactionReceipt = await web3.eth.getTransactionReceipt(newTxn.txHash)
      // console.log('blockObject')
      // console.log(blockObject)
      const timestampRaw = new Date(Number(blockObject.timestamp) * 1000).toISOString()
      // Remove the T, Z, and spaces to get date formatted
      newTxn.timestamp = timestampRaw.replace('T', ' ').substring(0, timestampRaw.length - 5)
      // debugger; // eslint-disable-line no-debugger
      newTxn.status = transactionReceipt.status ? "Success" : "Failure"
      newTxn.from = transactionDetails.from
      newTxn.to = transactionDetails.to

      const gasUsed = blockObject.gasUsed
      const gasLimit = blockObject.gasLimit
      const gasPrice = Number(transactionDetails.gasPrice)
      newTxn.transactionFee = gasUsed * gasPrice
      newTxn.gasInfo = `${gasUsed} Gas Used From ${gasLimit} Gas Limit @ ${gasPrice} ether (${Math.round(gasPrice * (10 ** 9))} gwei)`

      // const extraData = blockObject.extraData
// const input = web3.utils.hexToAscii(transactionDetails.input)
// console.log(input)
      
      // const inter = new ethers.utils.Interface(bondageAbi)
      // const decodedInput = inter.parseTransaction({
      //   data: transactionDetails.input,
      //   value: transactionDetails.value,
      // })

      newTxn.action = 'bond'
      newTxn.txAction = 'to'
      transactions.push(newTxn)
    }
  } catch (e) {
    console.error(`Transaction error`,e)
  }
    console.log(transactions)
    
// const web3 = new Web3()

// const typesArray = [
//   { type: 'string', name: 'messanger' },
//   { type: 'string', name: 'username' },
//   { type: 'string', name: 'nome' },
//   { type: 'string', name: 'cognome' },
//   { type: 'string', name: 'email' },
// ]

// const data =
//   '0x57cb2fc4'

// const decodedParameters = web3.eth.abi.decodeParameters(typesArray, data)

// console.log(JSON.stringify(decodedParameters, null, 4))

  return transactions
}