import React, { Suspense, useContext, useMemo } from 'react'
import { Switch, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import routes from '@routes/routes'
import CustomRoute from '@routes/CustomRoute'
import PrivateRoute from '@routes/PrivateRoute'
import NotFound from '@pages/NotFound'
import FullPageLoading from '@components/FullPageLoading'
import ThemeContext from '@contexts/ThemeContext'
import useInitialAppLang from '@hooks/useInitialAppLang'
import { DarkTheme, LightTheme } from '@themes/index'

/**
 * Main App
 * @returns
 */
const App = () => {
  const { mode } = useContext(ThemeContext)

  /**
   * Initialize app language
   */
  useInitialAppLang()

  /**
   * Toggle theme
   */
  const theme = useMemo(
    () => (mode === 'dark' ? DarkTheme : LightTheme),
    [mode]
  )

  /**
   * Routes
   *
   * @param
   * @returns
   */
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
      <CssBaseline />
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
