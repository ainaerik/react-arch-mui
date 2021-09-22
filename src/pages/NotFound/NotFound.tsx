import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import useStyles from './styles'
import Layout from '@components/Layout/Layout'
import HelmetHeader from '@components/HelmetHeader'

interface NotFoundProps {}

/**
 * NotFound
 * @param props NotFoundProps
 * @returns
 */
const NotFound: FC<NotFoundProps> = (props) => {
  const { t } = useTranslation('common')
  const classes = useStyles()
  const history = useHistory()
  const theme = useTheme()

  const onHandleGoBack = () => {
    history.push('/')
  }

  return (
    <>
      <HelmetHeader title={t('tabs.notfound')} />
      <Box className={classes.root}>
        <Box textAlign="center">
          <Box sx={{ my: 3 }}>
            <Typography variant="h4" color={theme.palette.text.primary}>
              {t('pages.notfound.text')}
            </Typography>
            <Typography variant="subtitle1">{t('pages.notfound.description')}</Typography>
          </Box>
          <Button size="large" variant="contained" color="primary" onClick={onHandleGoBack}>
            {t('pages.notfound.action')}
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default NotFound
