import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { store } from './store/store'
import { GlobalStyles } from './styles/GlobalStyles'
import { App } from './App'
import { theme } from './styles/theme'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <StoreProvider store={store}>
         <BrowserRouter>
            <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
               <GlobalStyles />
               <App />
            </MantineProvider>
         </BrowserRouter>
      </StoreProvider>
   </React.StrictMode>
)
