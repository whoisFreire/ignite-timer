import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './global'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />

        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
