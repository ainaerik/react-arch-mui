import React, { FC, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import DarkIcon from '@mui/icons-material/Brightness7'
import LightIcon from '@mui/icons-material/Brightness4'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography'

import useStyles from './styles'
import ThemeContext from '@contexts/ThemeContext'
import AppContext from '@contexts/AppContext'
import Layout from '@components/Layout/Layout'
import AppLang from '@interfaces/AppLang'

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
  const { lang, setLang } = useContext(AppContext)

  const handleChangeTheme = () => {
    toggleMode()
  }

  const handleChangeLang = (lang: AppLang) => {
    setLang(lang)
  }

  return (
    <Layout title={t('tabs.home')}>
      <Box className={classes.root}>
        <Typography variant="h1">{t('pages.home.text')}</Typography>
        <Button variant="contained" onClick={handleChangeTheme}>
          {mode === 'light' ? <LightIcon /> : <DarkIcon />}
        </Button>{' '}
        <ButtonGroup disableElevation variant="contained">
          <Button
            disabled={lang === 'en'}
            onClick={() => handleChangeLang('en')}
          >
            EN
          </Button>
          <Button
            disabled={lang === 'fr'}
            onClick={() => handleChangeLang('fr')}
          >
            FR
          </Button>
        </ButtonGroup>
        <br />
        <br />
      </Box>
    </Layout>
  )
}

export default Home
