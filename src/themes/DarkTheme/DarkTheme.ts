import { ThemeOptions } from '@mui/material/styles'

/**
 * Dark theme palette
 */
const DarkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    divider: 'rgba(255, 255, 255, 0.12)',
    // Used by `getContrastText()` to maximize the contrast between the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately two indexes within its tonal palette.
    tonalOffset: 0.2,
    textSecondary: '#b4b4b4',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#d4512b',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.secondary.main,
      main: '#57647f',
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
      primary: '#fafafa',
      secondary: 'rgba(29, 183, 90, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
    background: {
      default: '#22272E',
      paper: '#2D333B',
    },
    common: {
      black: '#000',
      white: '#FFF',
    },
    action: {
      activatedOpacity: 0.24,
      active: '#fff',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
    },
  },
}

export default DarkThemeOptions
