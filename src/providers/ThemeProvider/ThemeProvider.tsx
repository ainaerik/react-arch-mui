import { FC } from 'react'
import { PaletteMode } from '@mui/material'

import ThemeContext from '@contexts/ThemeContext'
import useLocalStorage from '@hooks/useLocalStorage'

const ThemeProvider: FC = (props) => {
  const [mode, setMode] = useLocalStorage<PaletteMode>('theme', 'light')

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
