import { deepmerge } from '@mui/utils'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

import LightThemeOptions from '@themes/LightTheme'
import DarkThemeOptions from '@themes/DarkTheme'
import CommonThemeOptions from '@themes/CommonTheme'

/**
 * Create MUI light theme
 */
const LightTheme = responsiveFontSizes(createTheme(deepmerge(LightThemeOptions, CommonThemeOptions)))

/**
 * Create MUI dark theme
 */
const DarkTheme = responsiveFontSizes(createTheme(deepmerge(DarkThemeOptions, CommonThemeOptions)))

/**
 * Module augmentation for Palette
 */
declare module '@mui/material/styles' {
  interface PaletteOptions {
    textSecondary?: string
  }
  interface Palette {
    textSecondary?: string
  }
}

export { LightTheme, DarkTheme }
