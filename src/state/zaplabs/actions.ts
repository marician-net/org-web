import { createAction } from '@reduxjs/toolkit'

export const getNames = createAction<{ names: { [key: string]: any }[] }>('zaplabs/get_names')
export const updateOne = createAction<{ one: { [key: string]: any } }>('zaplabs/update_one')
export const clear = createAction('zaplabs/clear')
