import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'

export const botSlice = createSlice({
   name: 'bot',
   initialState,
   reducers: {}
})

// TODO: refactor with memoized selector
export const selectSchemes = state => Object.values(state.bot).map(({ title }) => title)
export const selectScreensOfScheme = schemeId => state => state.bot[schemeId]
export const selectSchemeNode = (schemeId, schemeNodeId) => state => state.bot[schemeId]?.schemeNodes?.[schemeNodeId]

export default botSlice.reducer
