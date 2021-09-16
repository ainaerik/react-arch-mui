import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'

import useStyles from './styles'
import Layout from '@components/Layout/Layout'

interface NotFoundProps {}

/**
 * NotFound
 * @param props NotFoundProps
 * @returns
 */
const NotFound: FC<NotFoundProps> = (props) => {
  const { t } = useTranslation('common')
  const classes = useStyles()

  return (
    <Layout title={t('tabs.notfound')}>
      <Box className={classes.root}>NotFound</Box>
    </Layout>
  )
}

export default NotFound
