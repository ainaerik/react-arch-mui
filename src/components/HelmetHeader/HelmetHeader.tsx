import React, { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

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

  return (
    <Helmet>
      <title>{`${title} - ${t('app.name')}`}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href={t('app.url')} />
    </Helmet>
  )
}

export default HelmetHeader
