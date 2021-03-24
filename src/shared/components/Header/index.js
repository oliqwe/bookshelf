import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Logo from '../Logo'
import ThemeSwitcher from '../ThemeSwitcher'
import { bool, func } from 'prop-types'

function Header({ isDarkTheme, switchTheme }) {
  return (
    <Box mt={2} mb={5}>
      <Grid container justify="space-between" alignItems="center" spacing={2}>
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

Header.propTypes = {
  isDarkTheme: bool,
  switchTheme: func,
}

export default Header
