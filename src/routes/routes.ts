import { lazy } from 'react'

import { ROLE } from '@utils/Role'

export interface RouteInterface {
  key: string
  path: string
  isExact: boolean
  isPrivate: boolean
  roles: Array<ROLE>
  component: React.ComponentType<any> | React.LazyExoticComponent<React.ComponentType<any>>
}

/**
 * Lazy loading components
 */
const Home = lazy(() => import('@pages/Home'))
const Login = lazy(() => import('@pages/Login'))
const NotFound = lazy(() => import('@pages/NotFound'))
const Unauthorized = lazy(() => import('@pages/Unauthorized'))

/**
 * Routes definition
 */
const routes: RouteInterface[] = [
  {
    key: 'home',
    path: '/',
    isExact: true,
    isPrivate: true,
    roles: [ROLE.USER],
    component: Home,
  },
  {
    key: 'login',
    path: '/login',
    isExact: true,
    isPrivate: false,
    roles: [],
    component: Login,
  },
  {
    key: 'notfound',
    path: '/notfound',
    isExact: true,
    isPrivate: false,
    roles: [],
    component: NotFound,
  },
  {
    key: 'unauthorized',
    path: '/unauthorized',
    isExact: true,
    isPrivate: false,
    roles: [],
    component: Unauthorized,
  },
]

export default routes
