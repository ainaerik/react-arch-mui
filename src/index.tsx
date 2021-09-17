import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import i18next from 'i18next'
import { HelmetProvider } from 'react-helmet-async'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import resources from '@assets/i18next'
import AppProvider from '@providers/AppProvider'
import { DEFAULT_LANG } from '@utils/Config'

// Internationalization
i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: DEFAULT_LANG,
  resources,
})

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <HelmetProvider>
          <AppProvider>
            <App />
          </AppProvider>
        </HelmetProvider>
      </I18nextProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
