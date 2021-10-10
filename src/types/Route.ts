import { ROLE } from '@utils/Role'

export interface RouteInterface {
  key: string
  path: string
  isExact: boolean
  isPrivate: boolean
  roles: Array<ROLE>
  component: React.ComponentType<any> | React.LazyExoticComponent<React.ComponentType<any>>
}
