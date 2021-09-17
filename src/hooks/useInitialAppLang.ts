import { useContext, useMemo } from 'react'

import AppContext from '@contexts/AppContext'

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
    const currentLang = lang || 'en'
    setLang(currentLang)
  }, [])
}

export default useInitialAppLang
