import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'

import useStyles from './styles'
import Layout from '@components/Layout/Layout'

interface UnauthorizedProps {}

/**
 * Unauthorized
 * @param props UnauthorizedProps
 * @returns
 */
const Unauthorized: FC<UnauthorizedProps> = (props) => {
  const { t } = useTranslation('common')
  const classes = useStyles()

  return (
    <Layout title={t('tabs.unauthorized')}>
      <Box className={classes.root}>{t('pages.unauthorized.text')}</Box>
    </Layout>
  )
}

export default Unauthorized
