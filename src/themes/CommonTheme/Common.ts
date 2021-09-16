import { ThemeOptions } from '@mui/material/styles'

/**
 * Common
 */
const CommonOptions: ThemeOptions = {
  direction: 'ltr',
  shape: {
    borderRadius: 8,
  },
  zIndex: {
    appBar: 1100,
    drawer: 1200,
    mobileStepper: 1000,
    modal: 1300,
    snackbar: 1400,
    speedDial: 1050,
  },
}

export default CommonOptions
