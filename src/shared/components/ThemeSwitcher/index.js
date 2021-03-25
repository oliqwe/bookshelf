import React from 'react'
import PropTypes from 'prop-types'

import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import NightsStayRoundedIcon from '@material-ui/icons/NightsStayRounded'
import { IconButton } from '@material-ui/core'

function ThemeSwitcher({ isDarkTheme, switchTheme }) {
  return (
    <div>
      {isDarkTheme ? (
        <IconButton aria-label="light-theme" onClick={switchTheme}>
          <WbSunnyRoundedIcon />
        </IconButton>
      ) : (
        <IconButton aria-label="dark-theme" onClick={switchTheme}>
          <NightsStayRoundedIcon />
        </IconButton>
      )}
    </div>
  )
}

ThemeSwitcher.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  switchTheme: PropTypes.func.isRequired,
}

export default ThemeSwitcher
