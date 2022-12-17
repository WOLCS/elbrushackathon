import { configureStore } from '@reduxjs/toolkit'
import botReducer from './botReducer'

export const store = configureStore({
   reducer: {
      bot: botReducer
   }
})
