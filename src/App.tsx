import React, { Suspense, useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import routes from '@routes/routes'
import CustomRoute from '@routes/CustomRoute'
import PrivateRoute from '@routes/PrivateRoute'
import NotFound from '@pages/NotFound'
import FullPageLoading from '@components/FullPageLoading'
import ThemeContext from '@contexts/ThemeContext'
import { GlobalStyles } from '@themes/GlobalStyles'
import { DarkTheme, LightTheme } from '@themes/index'

const App = () => {
  const { mode } = useContext(ThemeContext)
  const theme = mode === 'dark' ? DarkTheme : LightTheme

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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Suspense fallback={<FullPageLoading />}>
        <Switch>
          {getRoutes()}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
