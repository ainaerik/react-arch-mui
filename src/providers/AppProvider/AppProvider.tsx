import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import AppContext from '@contexts/AppContext'
import ThemeProvider from '@providers/ThemeProvider'
import useLocalStorage from '@hooks/useLocalStorage'
import { DEFAULT_LANG } from '@utils/Config'
import { AppLang } from '@interfaces/AppLang'

const AppProvider: FC = (props) => {
  const { i18n } = useTranslation()
  const [lang, setLang] = useLocalStorage<AppLang>('lang', DEFAULT_LANG as AppLang)

  const handleChangeLang = (lang: AppLang) => {
    i18n.changeLanguage(lang)
    setLang(lang)
  }

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang: handleChangeLang,
      }}
    >
      <ThemeProvider>{props.children}</ThemeProvider>
    </AppContext.Provider>
  )
}

export default AppProvider
