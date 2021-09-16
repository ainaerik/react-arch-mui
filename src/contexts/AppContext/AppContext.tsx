import { createContext } from 'react'

interface AppContextInterface {}

const AppContext = createContext<AppContextInterface>({})

export default AppContext
