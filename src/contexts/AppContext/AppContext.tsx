import { createContext, useContext } from 'react'

import { AppLang } from '@interfaces/AppLang'
import { DEFAULT_LANG } from '@utils/Config'

interface AppContextInterface {
  lang: AppLang
  setLang: (lang: AppLang) => void
}

/**
 * AppContext
 */
const AppContext = createContext<AppContextInterface>({
  lang: DEFAULT_LANG as AppLang,
  setLang: () => {},
})

const useAppContext = () => useContext(AppContext)

export { AppContext as default, useAppContext }
