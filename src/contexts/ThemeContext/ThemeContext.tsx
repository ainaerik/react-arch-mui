import { createContext } from 'react'

interface ThemeContextInterface {}

const ThemeContext = createContext<ThemeContextInterface>({})

export default ThemeContext
