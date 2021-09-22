import { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

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
  const classes = useStyles()

  return (
    <>
      <HelmetHeader title={title} />
      <Header />
      <Container maxWidth={false}>
        <Box className={classes.root}>{children}</Box>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
