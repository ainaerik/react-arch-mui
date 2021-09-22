import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import useStyles from './styles'
import HelmetHeader from '@components/HelmetHeader'

interface UnauthorizedProps {}

/**
 * Unauthorized
 * @param props UnauthorizedProps
 * @returns
 */
const Unauthorized: FC<UnauthorizedProps> = (props) => {
  const { t } = useTranslation('common')
  const classes = useStyles()
  const theme = useTheme()

  return (
    <>
      <HelmetHeader title={t('tabs.unauthorized')} />
      <Box className={classes.root}>
        <Box textAlign="center">
          <Typography variant="h4" color={theme.palette.text.primary}>
            {t('pages.unauthorized.text')}
          </Typography>
          <Typography variant="subtitle1">{t('pages.unauthorized.description')}</Typography>
        </Box>
      </Box>
    </>
  )
}

export default Unauthorized
