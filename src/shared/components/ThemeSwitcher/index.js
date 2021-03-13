import React from 'react'
import PropTypes from 'prop-types'

import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import NightsStayRoundedIcon from '@material-ui/icons/NightsStayRounded'

function ThemeSwitcher({ isDarkTheme, switchTheme }) {
  return (
    <div>
      {isDarkTheme ? (
        <WbSunnyRoundedIcon onClick={switchTheme} />
      ) : (
        <NightsStayRoundedIcon onClick={switchTheme} />
      )}
    </div>
  )
}

ThemeSwitcher.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  switchTheme: PropTypes.func.isRequired,
}

export default ThemeSwitcher
