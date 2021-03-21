const typography = {
  typography: {
    h4: {
      fontSize: '1.4375rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.4375rem',
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 400,
    },
  },
}

export const lightTheme = {
  palette: {
    type: 'light',
  },
  ...typography,
}

export const darkTheme = {
  palette: {
    type: 'dark',
  },
  ...typography,
}
