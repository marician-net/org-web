import { createReducer } from '@reduxjs/toolkit'
import { getNames, updateOne, clear } from './actions'

export interface ZapLabsState {
  readonly registered: { [key: string]: { [key: string]: any } }
}

const initialState: ZapLabsState = {
  registered: {},
}

export default createReducer<ZapLabsState>(initialState, (builder) =>
  builder
    .addCase(getNames, (state, { payload: { names } }) => {
      const toSet: { [key: string]: any } = { ...state.registered }
      names.forEach((e) => {
        const old = state.registered[e.providerAddress + e.name]
        toSet[e.providerAddress + e.name] = { ...old, ...e }
      })
      return {
        ...state,
        registered: toSet,
      }
    })
    .addCase(updateOne, (state, { payload: { one } }) => {
      const toSet: { [key: string]: any } = { ...state.registered }
      const old = state.registered[one.providerAddress + one.name]
      toSet[one.providerAddress + one.name] = { ...old, ...one }
      return {
        ...state,
        registered: toSet,
      }
    })
    .addCase(clear, (state) => {
      return {
        ...state,
        registered: {},
      }
    }),
)
