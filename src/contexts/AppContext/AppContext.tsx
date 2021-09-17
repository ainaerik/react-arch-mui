import { createContext } from 'react'

import AppLang from '@interfaces/AppLang'

interface AppContextInterface {
  lang: AppLang
  setLang: (lang: AppLang) => void
}

/**
 * AppContext
 */
const AppContext = createContext<AppContextInterface>({
  lang: 'en',
  setLang: () => {},
})

export default AppContext
