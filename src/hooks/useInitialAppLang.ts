import { useMemo } from 'react'

import AppLang from '@interfaces/AppLang'
import { DEFAULT_LANG } from '@utils/Config'
import { useAppContext } from '@contexts/AppContext'

/**
 * useInitialAppLang
 * Application language initialization hooks
 *
 * @param
 * @returns
 */
const useInitialAppLang = () => {
  const { lang, setLang } = useAppContext()

  useMemo(() => {
    const currentLang = lang || (DEFAULT_LANG as AppLang)
    setLang(currentLang)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useInitialAppLang
