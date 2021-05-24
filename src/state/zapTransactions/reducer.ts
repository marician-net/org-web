import { createReducer } from '@reduxjs/toolkit'
import { getTransactions, updateOne, clear } from './actions'

export interface ZapTransactionsState {
  // readonly transactionsList: { [key: string]: { [key: string]: any } }
  readonly transactionsList: { [key: string]: any}
}

const initialState: ZapTransactionsState = {
  transactionsList: {},
}

export default createReducer<ZapTransactionsState>(initialState, (builder) =>
  builder
    .addCase(getTransactions, (state, { payload: { transactions } }) => {
      const toSet: { [key: string]: any } = {}
      transactions.forEach((e) => {
        toSet[e.txHash] = e
      })
      return {
        ...state,
        transactionsList: toSet,
      }
    })
    .addCase(updateOne, (state, { payload: { one } }) => {
      const toSet: { [key: string]: any } = state.transactionsList

      toSet[one.txHash] = one
      return {
        ...state,
        transactionsList: toSet,
      }
    })
    .addCase(clear, (state) => {
      return {
        ...state,
        transactionsList: {},
      }
    }),
)
