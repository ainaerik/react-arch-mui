import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import TimePicker from '@mui/lab/TimePicker'
import DatePicker from '@mui/lab/DatePicker'
import DateTimePicker from '@mui/lab/DateTimePicker'
import DarkIcon from '@mui/icons-material/Brightness7'
import LightIcon from '@mui/icons-material/Brightness4'

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
  const [dateTime, setDateTime] = useState<Date | null>(new Date())

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
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <IconButton onClick={handleChangeTheme} sx={{ mb: 2 }}>
            {mode === 'light' ? <LightIcon /> : <DarkIcon />}
          </IconButton>

          <ToggleLanguage lang={lang} languages={LanguageMaps} handleChangeLang={handleChangeLang} />

          <Box sx={{ mt: 2 }}>
            <DateTimePicker
              value={dateTime}
              onChange={(newValue) => setDateTime(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default Home
