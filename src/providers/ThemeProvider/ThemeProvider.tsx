import { FC } from 'react'

import ThemeContext from '../../contexts/ThemeContext'

const ThemeProvider: FC = (props) => {
  return (
    <ThemeContext.Provider value={{}}>{props.children}</ThemeContext.Provider>
  )
}

export default ThemeProvider
