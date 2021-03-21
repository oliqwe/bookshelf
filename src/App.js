import React from 'react'

import Container from '@material-ui/core/Container'
import Header from './shared/components/Header'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import useTheme from './shared/hooks/useTheme'
import AppRoutes from './routes/AppRoutes'
import Navigation from './shared/components/Navigation'
import Grid from '@material-ui/core/Grid'
import { BookShelfProvider } from './shared/context/book-shelf-context'

function App() {
  const { theme, isDarkTheme, switchTheme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BookShelfProvider>
        <Container maxWidth="lg">
          <Header isDarkTheme={isDarkTheme} switchTheme={switchTheme} />
          <Grid container spacing={4}>
            <Grid item xs={2}>
              <Navigation />
            </Grid>
            <Grid item xs={10}>
              <AppRoutes />
            </Grid>
          </Grid>
        </Container>
      </BookShelfProvider>
    </ThemeProvider>
  )
}

export default App
