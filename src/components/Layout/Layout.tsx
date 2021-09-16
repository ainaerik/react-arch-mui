import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import Header from '../Header'
import Footer from '../Footer'
import HelmetHeader from '../HelmetHeader'
import { MainContent, MainLayout } from './styles'

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
