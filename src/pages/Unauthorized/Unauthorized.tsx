import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { UnauthorizedSection } from './styles'
import Layout from '@components/Layout/Layout'

interface UnauthorizedProps {}

/**
 * Unauthorized
 * @param props UnauthorizedProps
 * @returns
 */
const Unauthorized: FC<UnauthorizedProps> = (props) => {
  const { t } = useTranslation('common')

  return (
    <Layout title={t('tabs.unauthorized')}>
      <UnauthorizedSection>Unauthorized</UnauthorizedSection>
    </Layout>
  )
}

export default Unauthorized
