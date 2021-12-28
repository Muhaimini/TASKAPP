import { createSlice } from '@reduxjs/toolkit'
import { initialState, reducers } from './state/index'


export const defaultData = createSlice({
    name: 'taskapp',
    initialState,
    reducers
})

export const {
    incQuantity, decQuantity, setColorMode,
    setImages, setUrl, setModal
} = defaultData.actions

export default defaultData.reducer