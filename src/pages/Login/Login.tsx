import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import useStyles from './styles'

interface LoginProps {}

/**
 * Login
 * @param props LoginProps
 * @returns
 */
const Login: FC<LoginProps> = (props) => {
  const { t } = useTranslation('common')
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography variant="h1">{t('pages.login.text')}</Typography>
    </Box>
  )
}

export default Login
