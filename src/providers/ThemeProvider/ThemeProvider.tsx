import { FC } from 'react'
import { PaletteMode } from '@mui/material'

import ThemeContext from '@contexts/ThemeContext'
import useLocalStorage from '@hooks/useLocalStorage'
import { DEFAULT_THEME } from '@utils/Config'

const ThemeProvider: FC = (props) => {
  const [mode, setMode] = useLocalStorage<PaletteMode>('theme', DEFAULT_THEME as PaletteMode)

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleMode,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
