import { createContext } from 'react'

interface ThemeContextInterface {
  mode: string
  setMode: (mode: string) => void
}

const ThemeContext = createContext<ThemeContextInterface>({
  mode: 'light',
  setMode: () => {},
})

export default ThemeContext
