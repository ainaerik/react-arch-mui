import { FC } from 'react'

import ThemeProvider from '../ThemeProvider'
import AppContext from '../../contexts/AppContext'

const AppProvider: FC = (props) => {
  return (
    <AppContext.Provider value={{}}>
      <ThemeProvider>{props.children}</ThemeProvider>
    </AppContext.Provider>
  )
}

export default AppProvider
