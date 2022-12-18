import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { botApiSlice } from '../api/botApi'
import botReducer from './botReducer'

export const store = configureStore({
   reducer: {
      bot: botReducer,
      [botApiSlice.reducerPath]: botApiSlice.reducer
   },
   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(botApiSlice.middleware)
})

setupListeners(store.dispatch)
