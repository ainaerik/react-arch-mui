import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { HomeSection } from './styles'
import Layout from '../../components/Layout/Layout'

interface HomeProps {}

/**
 * Home
 * @param props HomeProps
 * @returns
 */
const Home: FC<HomeProps> = (props) => {
  const { t } = useTranslation('common')

  return (
    <Layout title={t('tabs.home')}>
      <HomeSection>Home</HomeSection>
    </Layout>
  )
}

export default Home
