import React, { PropsWithChildren, useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { ROLE } from '@utils/Role'

interface PrivateRouteInterface {
  component:
    | React.ComponentType<any>
    | React.LazyExoticComponent<React.ComponentType<any>>
  roles: Array<ROLE>
  [key: string]: any
}

/**
 * PrivateRoute
 * @param param PropsWithChildren<PrivateRouteInterface>
 * @returns
 */
const PrivateRoute = ({
  component: Component,
  roles,
  ...rest
}: PropsWithChildren<PrivateRouteInterface>) => {
  const [isGranted, setIsGranted] = useState<boolean>(false)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    // Check user authentication ...
    const authenticatedUserRole = ROLE.USER
    setIsAuthenticated(true)
    // Check user roles ...
    const userHasRequiredRole = roles.includes(authenticatedUserRole)
    setIsGranted(userHasRequiredRole)
    //
    setIsLoading(false)
  }, [])

  const redirectTo = () => {
    if (isAuthenticated && !isGranted) {
      return <Redirect to="/unauthorized" />
    }
    return <Redirect to="/login" />
  }

  return isLoading ? (
    <div>Checking auth...</div>
  ) : (
    <Route
      {...rest}
      render={(props) =>
        isGranted && isAuthenticated ? <Component {...props} /> : redirectTo()
      }
    />
  )
}

export default PrivateRoute
