import { createContext } from 'react'
import { PaletteMode } from '@mui/material'

import { DEFAULT_THEME } from '@utils/Config'

interface ThemeContextInterface {
  mode: PaletteMode
  toggleMode: () => void
}

/**
 * ThemeContext
 */
const ThemeContext = createContext<ThemeContextInterface>({
  mode: DEFAULT_THEME as PaletteMode,
  toggleMode: () => {},
})

export default ThemeContext
