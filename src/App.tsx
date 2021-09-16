import React, { Suspense } from 'react'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import i18next from 'i18next'
import { Switch, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import resources from './assets/i18next'
import routes from './routes/routes'
import CustomRoute from './routes/CustomRoute'
import PrivateRoute from './routes/PrivateRoute'
import AppProvider from './providers/AppProvider'
import NotFound from './pages/NotFound'
import FullPageLoading from './components/FullPageLoading'

// Internationalization
i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources,
})

const App = () => {
  const getRoutes = () => {
    return routes.map(({ key, path, component, isExact, isPrivate, roles }) =>
      isPrivate ? (
        <PrivateRoute
          key={key}
          exact={isExact}
          path={path}
          component={component}
          roles={roles}
        />
      ) : (
        <CustomRoute
          key={key}
          exact={isExact}
          path={path}
          component={component}
          roles={roles}
        />
      )
    )
  }

  return (
    <I18nextProvider i18n={i18next}>
      <HelmetProvider>
        <AppProvider>
          <Suspense fallback={<FullPageLoading />}>
            <Switch>
              {getRoutes()}
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </AppProvider>
      </HelmetProvider>
    </I18nextProvider>
  )
}

export default App
