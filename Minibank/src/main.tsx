import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import theme from './styles/theme'
import { FontSizeProvider } from './context/FontSizeContext'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <FontSizeProvider>
          <App />
        </FontSizeProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)