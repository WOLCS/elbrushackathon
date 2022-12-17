import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { botApiSlice } from './api/botApi'
import { MantineProvider } from '@mantine/core'
import { store } from './store/store'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <StoreProvider store={store}>
         <BrowserRouter>
            <ApiProvider api={botApiSlice}>
               <MantineProvider withGlobalStyles withNormalizeCSS>
                  <App />
               </MantineProvider>
            </ApiProvider>
         </BrowserRouter>
      </StoreProvider>
   </React.StrictMode>
)
