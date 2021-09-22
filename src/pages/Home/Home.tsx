import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import DarkIcon from '@mui/icons-material/Brightness7'
import LightIcon from '@mui/icons-material/Brightness4'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

import useStyles from './styles'
import AppLang from '@interfaces/AppLang'
import Layout from '@components/Layout/Layout'
import { useAppContext } from '@contexts/AppContext'
import { useThemeContext } from '@contexts/ThemeContext'

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
   * NOTE :
   * The content of this page is just to
   * simulate a theme mode and app lang
   */
  const { lang, setLang } = useAppContext()
  const { mode, toggleMode } = useThemeContext()

  const handleChangeTheme = () => {
    toggleMode()
  }

  const handleChangeLang = (event: React.MouseEvent<HTMLElement>, lang: AppLang) => {
    setLang(lang)
  }

  return (
    <Layout title={t('tabs.home')}>
      <Box className={classes.root}>
        <Typography variant="h4">{t('pages.home.text')}</Typography>
        <Box sx={{ mt: 2 }} display="flex" alignItems="center" justifyContent="center">
          <IconButton onClick={handleChangeTheme} sx={{ ml: 2 }}>
            {mode === 'light' ? <LightIcon /> : <DarkIcon />}
          </IconButton>
          <ToggleButtonGroup size="small" value={lang} exclusive onChange={handleChangeLang} aria-label="app language">
            <ToggleButton value="en" aria-label="en language">
              EN
            </ToggleButton>
            <ToggleButton value="fr" aria-label="fr language">
              FR
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
    </Layout>
  )
}

export default Home
