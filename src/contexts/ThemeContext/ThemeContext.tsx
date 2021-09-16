import { createContext } from 'react'
import { PaletteMode } from '@mui/material'

interface ThemeContextInterface {
  mode: PaletteMode
  toggleMode: () => void
}

/**
 * ThemeContext
 */
const ThemeContext = createContext<ThemeContextInterface>({
  mode: 'light',
  toggleMode: () => {},
})

export default ThemeContext
