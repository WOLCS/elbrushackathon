import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { botApiSlice } from './api/botApi'
import { MantineProvider } from '@mantine/core'
import { store } from './store/store'
import { GlobalStyles } from './styles/GlobalStyles'
import { App } from './App'
import { theme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <StoreProvider store={store}>
         <BrowserRouter>
            <ApiProvider api={botApiSlice}>
               <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
                  <GlobalStyles />
                  <App />
               </MantineProvider>
            </ApiProvider>
         </BrowserRouter>
      </StoreProvider>
   </React.StrictMode>
)
