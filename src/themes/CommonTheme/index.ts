import { ThemeOptions } from '@mui/material'

import SpacingOptions from '@themes/CommonTheme/Spacing'
import BreakpointsOptions from '@themes/CommonTheme/Breakpoints'
import TypographyOptions from '@themes/CommonTheme/Typography'
import ComponentOptions from '@themes/CommonTheme/Component'
import TransitionOptions from '@themes/CommonTheme/Transition'
import CommonOptions from '@themes/CommonTheme/Common'

/**
 * Common theme options
 */
const CommonThemeOptions: ThemeOptions = {
  ...SpacingOptions,
  ...BreakpointsOptions,
  ...TypographyOptions,
  ...ComponentOptions,
  ...TransitionOptions,
  ...CommonOptions,
}

export default CommonThemeOptions
