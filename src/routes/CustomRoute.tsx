import { PropsWithChildren, useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'

interface CustomRouteInterface {
  path: string
  component: React.ComponentType<any> | React.LazyExoticComponent<React.ComponentType<any>>
  [key: string]: any
}

/**
 * CustomRoute
 * @param param PropsWithChildren<CustomRouteInterface>
 * @returns
 */
const CustomRoute = ({ component: Component, ...rest }: PropsWithChildren<CustomRouteInterface>) => {
  const [isGranted, setIsGranted] = useState<boolean>(false)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    // const { path } = rest
    // if (path === '/login' || path === '/signup') {
    //    Check user authentication ...
    //    Check user roles ...
    // }
    setIsAuthenticated(true)
    setIsGranted(false)
  }, [])

  const redirectTo = () => <Redirect to="/" />

  return (
    <Route {...rest} render={(props) => (isGranted && isAuthenticated ? redirectTo() : <Component {...props} />)} />
  )
}

export default CustomRoute
