import { useMemo, useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { darkTheme, lightTheme } from '../theme'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { getLocalStorageValue, setLocalStorageValue } from '../utils'
import { THEME } from '../constants/constants'

function useTheme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const [colorScheme, setColorScheme] = useState(() => {
    const theme = getLocalStorageValue('theme')

    if (!theme) {
      const mode = prefersDarkMode ? THEME.DARK : THEME.LIGHT
      // if there so no theme in local storage we check color scheme
      setLocalStorageValue('theme', mode)
      return mode
    }
    return theme
  })

  function switchTheme() {
    const scheme = colorScheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
    setLocalStorageValue('theme', scheme)
    setColorScheme(scheme)
  }

  const theme = useMemo(() => {
    return createMuiTheme(colorScheme === THEME.LIGHT ? lightTheme : darkTheme)
  }, [colorScheme])

  return {
    theme,
    switchTheme,
    isDarkTheme: colorScheme === THEME.DARK,
    colorScheme,
  }
}

export default useTheme
