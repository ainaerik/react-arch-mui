import React, { FC, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import DarkIcon from '@mui/icons-material/Brightness7'
import LightIcon from '@mui/icons-material/Brightness4'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import useStyles from './styles'
import Layout from '@components/Layout/Layout'
import ThemeContext from '@contexts/ThemeContext'

interface HomeProps {}

/**
 * Home
 * @param props HomeProps
 * @returns
 */
const Home: FC<HomeProps> = (props) => {
  const { t } = useTranslation('common')
  const classes = useStyles()

  /**
   * INFO:
   * The content of this page is just to simulate a theme mode
   */
  const { mode, toggleMode } = useContext(ThemeContext)
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  const handleChangeTheme = () => {
    toggleMode()
  }

  const handleToggle = () => {
    setIsDisabled(!isDisabled)
  }

  return (
    <Layout title={t('tabs.home')}>
      <Box className={classes.root}>
        <Typography variant="h1">Welcome Home </Typography>
        <Typography variant="h2">Welcome Home H2</Typography>
        <Typography variant="h3">Welcome Home H3</Typography>
        <Typography variant="h4">Welcome Home H4</Typography>
        <Typography variant="h5">Welcome Home H5</Typography>
        <Typography variant="h6">Welcome Home H6</Typography>
        <br />
        <br />
        <Typography variant="body1">Body 1</Typography>
        <Typography variant="body2">Body 2</Typography>
        <Typography variant="subtitle1">Sub Title 1</Typography>
        <Typography variant="subtitle2">Sub Title 2</Typography>
        <Typography variant="button">Button</Typography>
        <br />
        <br />
        <Button variant="outlined" onClick={handleChangeTheme}>
          {mode === 'light' ? <LightIcon /> : <DarkIcon />}
        </Button>
        <Button variant="outlined" onClick={handleToggle}>
          Toggle Button
        </Button>
        <br />
        <Button variant="contained" color="primary" disabled={isDisabled}>
          Button Contained
        </Button>
        <Button variant="contained" color="secondary" disabled={isDisabled}>
          Button Contained
        </Button>
        <br />
        <Button variant="outlined" color="primary" disabled={isDisabled}>
          Button Outlined
        </Button>
        <Button variant="outlined" color="secondary" disabled={isDisabled}>
          Button Outlined
        </Button>
        <br />
        <Button variant="text" color="primary" disabled={isDisabled}>
          Button Text
        </Button>
        <Button variant="text" color="secondary" disabled={isDisabled}>
          Button Text
        </Button>
        <br />
        <Button variant="dashed" color="primary" disabled={isDisabled}>
          Button Dashed
        </Button>
        <Button variant="dashed" color="secondary" disabled={isDisabled}>
          Button Dashed
        </Button>
      </Box>
    </Layout>
  )
}

export default Home
