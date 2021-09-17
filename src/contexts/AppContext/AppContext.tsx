import { createContext } from 'react'

import AppLang from '@interfaces/AppLang'
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

export default AppContext
