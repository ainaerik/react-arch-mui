import { FC } from 'react'

import AppContext from '@contexts/AppContext'
import ThemeProvider from '@providers/ThemeProvider'

const AppProvider: FC = (props) => {
  return (
    <AppContext.Provider value={{}}>
      <ThemeProvider>{props.children}</ThemeProvider>
    </AppContext.Provider>
  )
}

export default AppProvider
