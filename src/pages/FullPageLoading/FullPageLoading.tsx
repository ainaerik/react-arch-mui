import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

import useStyles from './styles'
import HelmetHeader from '@components/HelmetHeader'

interface FullPageLoadingProps {}

/**
 * FullPageLoading
 * @param props FullPageLoadingProps
 * @returns
 */
const FullPageLoading: FC<FullPageLoadingProps> = ({}) => {
  const { t } = useTranslation('common')
  const classes = useStyles()
  const theme = useTheme()

  return (
    <>
      <HelmetHeader title={t('pages.fullpageLoading.text')} />
      <Box className={classes.root}>
        <Box textAlign="center">
          <CircularProgress sx={{ my: 2, fontSize: 32 }} />
          <Typography variant="subtitle1" color={theme.palette.text.primary}>
            {t('pages.fullpageLoading.text')}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default FullPageLoading
