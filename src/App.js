import React from 'react'

import Container from '@material-ui/core/Container'
import Header from './modules/Header'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import useTheme from './shared/hooks/useTheme'

function App() {
  const { theme, isDarkTheme, switchTheme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header isDarkTheme={isDarkTheme} switchTheme={switchTheme} />
      </Container>
    </ThemeProvider>
  )
}

export default App
