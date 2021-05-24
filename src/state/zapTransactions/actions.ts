import { createAction } from '@reduxjs/toolkit'

export const getTransactions = createAction<{ transactions: { [key: string]: any }[] }>('zaptransactions/get_transactions')
export const updateOne = createAction<{ one: { [key: string]: any } }>('zaptransactions/update_one')
export const clear = createAction('zaptransactions/clear')
