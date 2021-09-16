import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { NotFoundSection } from './styles'
import Layout from '../../components/Layout/Layout'

interface NotFoundProps {}

/**
 * NotFound
 * @param props NotFoundProps
 * @returns
 */
const NotFound: FC<NotFoundProps> = (props) => {
  const { t } = useTranslation('common')

  return (
    <Layout title={t('tabs.notfound')}>
      <NotFoundSection>NotFound</NotFoundSection>
    </Layout>
  )
}

export default NotFound
