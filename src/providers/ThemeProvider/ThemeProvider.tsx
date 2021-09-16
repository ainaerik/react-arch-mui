import { FC } from 'react'

import ThemeContext from '@contexts/ThemeContext'
import useLocalStorage from '@hooks/useLocalStorage'

const ThemeProvider: FC = (props) => {
  const [mode, setMode] = useLocalStorage<string>('theme', 'light')

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
