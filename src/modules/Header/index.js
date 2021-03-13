import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Logo from '../../shared/components/Logo'
import ThemeSwitcher from '../../shared/components/ThemeSwitcher'

function Header({ isDarkTheme, switchTheme }) {
  return (
    <Box py={2}>
      <Grid container justify="space-between" spacing={2}>
        <Grid item>
          <Logo isDarkTheme={isDarkTheme} />
        </Grid>
        <Grid item>
          <ThemeSwitcher isDarkTheme={isDarkTheme} switchTheme={switchTheme} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Header
