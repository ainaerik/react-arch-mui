import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { MainContent, MainLayout } from './styles'
import Header from '@components/Header'
import Footer from '@components/Footer'
import HelmetHeader from '@components/HelmetHeader'

interface LayoutProps {
  title: string
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
  const { t } = useTranslation('common')

  return (
    <>
      <HelmetHeader title={title} />
      <MainLayout>
        <Header />
        <MainContent>{children}</MainContent>
        <Footer />
      </MainLayout>
    </>
  )
}

export default Layout
