import { useContext, useMemo } from 'react'

import AppContext from '@contexts/AppContext'
import AppLang from '@interfaces/AppLang'
import { DEFAULT_LANG } from '@utils/Config'

/**
 * useInitialAppLang
 * Application language initialization hooks
 *
 * @param
 * @returns
 */
const useInitialAppLang = () => {
  const { lang, setLang } = useContext(AppContext)

  useMemo(() => {
    const currentLang = lang || (DEFAULT_LANG as AppLang)
    setLang(currentLang)
  }, [])
}

export default useInitialAppLang
