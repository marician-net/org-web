import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { save, load } from 'redux-localstorage-simple'
import farmsReducer from './farms'
import toastsReducer from './toasts'
import poolsReducer from './pools'
import pricesReducer from './prices'
import profileReducer from './profile'
import teamsReducer from './teams'
import achievementsReducer from './achievements'
import blockReducer from './block'

import application from './application/reducer'
import { updateVersion } from './global/actions'
import user from './user/reducer'
import transactions from './transactions/reducer'
import swap from './swap/reducer'
import mint from './mint/reducer'
import lists from './lists/reducer'
import burn from './burn/reducer'
import multicall from './multicall/reducer'
import zapLabs from './zaplabs/reducer'
import zapTransactions from './zapTransactions/reducer'

// import toasts from './toasts'
// import { getThemeCache } from '../utils/theme'

// type MergedState = {
//   user: {
//     [key: string]: any
//   }
//   transactions: {
//     [key: string]: any
//   }
// }
// const PERSISTED_KEYS: string[] = ['user', 'transactions']
// const loadedState = load({ states: PERSISTED_KEYS }) as MergedState
// if (loadedState.user) {
//   loadedState.user.userDarkMode = getThemeCache()
// }

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    zapLabs,
    zapTransactions,
    farms: farmsReducer,
    toasts: toastsReducer,
    pools: poolsReducer,
    prices: pricesReducer,
    profile: profileReducer,
    teams: teamsReducer,
    achievements: achievementsReducer,
    block: blockReducer,
    application,
    user,
    transactions,
    swap,
    mint,
    burn,
    multicall,
    lists
  },
})

store.dispatch(updateVersion())

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 *
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store

/// original frontend
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import farmsReducer from './farms'
import toastsReducer from './toasts'
import poolsReducer from './pools'
import pricesReducer from './prices'
import profileReducer from './profile'
import teamsReducer from './teams'
import achievementsReducer from './achievements'
import blockReducer from './block'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    farms: farmsReducer,
    toasts: toastsReducer,
    pools: poolsReducer,
    prices: pricesReducer,
    profile: profileReducer,
    teams: teamsReducer,
    achievements: achievementsReducer,
    block: blockReducer,
    
  },
})

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 *
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store



// original swap exchange
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'

import application from './application/reducer'
import { updateVersion } from './global/actions'
import user from './user/reducer'
import transactions from './transactions/reducer'
import swap from './swap/reducer'
import mint from './mint/reducer'
import lists from './lists/reducer'
import burn from './burn/reducer'
import multicall from './multicall/reducer'
import toasts from './toasts'
import { getThemeCache } from '../utils/theme'

type MergedState = {
  user: {
    [key: string]: any
  }
  transactions: {
    [key: string]: any
  }
}
const PERSISTED_KEYS: string[] = ['user', 'transactions']
const loadedState = load({ states: PERSISTED_KEYS }) as MergedState
if (loadedState.user) {
  loadedState.user.userDarkMode = getThemeCache()
}

const store = configureStore({
  reducer: {
    application,
    user,
    transactions,
    swap,
    mint,
    burn,
    multicall,
    lists,
    toasts
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), save({ states: PERSISTED_KEYS })],
  preloadedState: loadedState,
})

store.dispatch(updateVersion())

*/

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
