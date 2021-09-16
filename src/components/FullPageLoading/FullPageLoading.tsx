import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'

import useStyles from './styles'

interface FullPageLoadingProps {}

/**
 * FullPageLoading
 * @param props FullPageLoadingProps
 * @returns
 */
const FullPageLoading: FC<FullPageLoadingProps> = (props) => {
  const { t } = useTranslation('common')
  const classes = useStyles()

  return <Box className={classes.root}>FullPageLoading...</Box>
}

export default FullPageLoading
