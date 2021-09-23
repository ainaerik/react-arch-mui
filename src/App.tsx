import { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import AdapterMomentDate from '@mui/lab/AdapterMoment'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import 'moment/min/locales'

import routes from '@routes/routes'
import CustomRoute from '@routes/CustomRoute'
import PrivateRoute from '@routes/PrivateRoute'
import NotFound from '@pages/NotFound'
import FullPageLoading from '@pages/FullPageLoading'
import useInitialAppLang from '@hooks/useInitialAppLang'
import useInitialAppTheme from '@hooks/useInitialAppTheme'
import { useAppContext } from '@contexts/AppContext'

/**
 * Main App
 * @returns
 */
const App = () => {
  /**
   * Initialize app language
   */
  useInitialAppLang()
  const { lang } = useAppContext()

  /**
   * Initialize app theme
   */
  const theme = useInitialAppTheme()

  /**
   * Routes
   *
   * @param
   * @returns
   */
  const getRoutes = () => {
    return routes.map(({ key, path, component, isExact, isPrivate, roles }) =>
      isPrivate ? (
        <PrivateRoute key={key} exact={isExact} path={path} component={component} roles={roles} />
      ) : (
        <CustomRoute key={key} exact={isExact} path={path} component={component} roles={roles} />
      )
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterMomentDate} locale={lang}>
        <CssBaseline />
        <Suspense fallback={<FullPageLoading />}>
          <Switch>
            {getRoutes()}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App
