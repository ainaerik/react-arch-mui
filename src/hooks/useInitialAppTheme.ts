import { useMemo } from 'react'

import { DarkTheme, LightTheme } from '@themes/index'
import { useThemeContext } from '@contexts/ThemeContext'

/**
 * useInitialAppTheme
 * Application theme initialization hooks
 *
 * @param
 * @returns
 */
const useInitialAppTheme = () => {
  const { mode } = useThemeContext()

  const theme = useMemo(() => (mode === 'dark' ? DarkTheme : LightTheme), [mode])
  return theme
}

export default useInitialAppTheme
