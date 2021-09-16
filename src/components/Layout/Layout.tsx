import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'

import useStyles from './styles'
import Header from '@components/Header'
import Footer from '@components/Footer'
import HelmetHeader from '@components/HelmetHeader'

interface LayoutProps {
  title: string
}

/**
 * Layout
 * @param param LayoutProps
 * @returns
 */
const Layout: FC<LayoutProps> = ({ children, title }) => {
  const { t } = useTranslation('common')
  const classes = useStyles()

  return (
    <>
      <HelmetHeader title={title} />
      <Box className={classes.layout}>
        <Header />
        <Box className={classes.content}>{children}</Box>
        <Footer />
      </Box>
    </>
  )
}

export default Layout
