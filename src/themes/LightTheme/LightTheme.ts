import { ThemeOptions } from '@mui/material/styles'

/**
 * Light theme palette
 */
const LightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    divider: 'rgba(0, 0, 0, 0.13)',
    // Used by `getContrastText()` to maximize the contrast between the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately two indexes within its tonal palette.
    tonalOffset: 0.2,
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#3C1BA8',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.secondary.main,
      main: '#5D5D75',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated from palette.secondary.main,
    },
    info: {
      // light: will be calculated from palette.secondary.main,
      main: '#0288d1',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated from palette.secondary.main,
    },
    success: {
      // light: will be calculated from palette.secondary.main,
      main: '#2e7d32',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated from palette.secondary.main,
    },
    warning: {
      // light: will be calculated from palette.secondary.main,
      main: '#ED6C02',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated from palette.secondary.main,
    },
    error: {
      // light: will be calculated from palette.secondary.main,
      main: '#d32f2f',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated from palette.secondary.main,
    },
    text: {
      primary: '#131313',
      disabled: 'rgba(0, 0, 0, 0.5)',
      secondary: '',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FAFAFA',
    },
    common: {
      black: '#000',
      white: '#FFF',
    },
    action: {
      activatedOpacity: 0.24,
      active: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.16,
    },
  },
}

export default LightThemeOptions
