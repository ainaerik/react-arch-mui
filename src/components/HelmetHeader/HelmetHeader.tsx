import React, { FC, useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

import AppContext from '@contexts/AppContext'
import { BASE_URL } from '@utils/Config'

interface HelmetHeaderProps {
  title: string
}

/**
 * HelmetHeader
 * @param param HelmetHeaderProps
 * @returns
 */
const HelmetHeader: FC<HelmetHeaderProps> = ({ title }) => {
  const { t } = useTranslation('common')
  const { lang } = useContext(AppContext)

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{`${title} - ${t('app.name')}`}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href={t('app.url') || BASE_URL} />
    </Helmet>
  )
}

export default HelmetHeader
