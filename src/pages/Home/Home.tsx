import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import DarkIcon from '@mui/icons-material/Brightness7'
import LightIcon from '@mui/icons-material/Brightness4'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

import useStyles from './styles'
import Layout from '@components/Layout/Layout'
import ToggleLanguage from '@components/ToggleLanguage'
import LanguageMaps from '@utils/Languages'
import { useAppContext } from '@contexts/AppContext'
import { useThemeContext } from '@contexts/ThemeContext'
import { AppLang } from '@interfaces/AppLang'

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
        <Stack>
          <IconButton onClick={handleChangeTheme} sx={{ ml: 2 }}>
            {mode === 'light' ? <LightIcon /> : <DarkIcon />}
          </IconButton>
          <ToggleLanguage lang={lang} languages={LanguageMaps} handleChangeLang={handleChangeLang} />
        </Stack>
      </Box>
    </Layout>
  )
}

export default Home
