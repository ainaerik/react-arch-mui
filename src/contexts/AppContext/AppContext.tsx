import { createContext } from 'react'

interface AppContextInterface {}

/**
 * AppContext
 */
const AppContext = createContext<AppContextInterface>({})

export default AppContext
