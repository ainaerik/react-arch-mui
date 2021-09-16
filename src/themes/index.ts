import { deepmerge } from '@mui/utils'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

import LightThemeOptions from '@themes/LightTheme'
import DarkThemeOptions from '@themes/DarkTheme'
import CommonThemeOptions from '@themes/CommonTheme'

const LightTheme = responsiveFontSizes(
  createTheme(deepmerge(LightThemeOptions, CommonThemeOptions))
)

const DarkTheme = responsiveFontSizes(
  createTheme(deepmerge(DarkThemeOptions, CommonThemeOptions))
)

export { LightTheme, DarkTheme }
