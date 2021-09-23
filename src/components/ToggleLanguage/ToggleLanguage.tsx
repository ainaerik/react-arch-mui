import { FC } from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

import { AppLang, Language } from '@interfaces/AppLang'

interface ToggleLanguageProps {
  lang: AppLang
  languages: Language[]
  handleChangeLang?: (event: React.MouseEvent<HTMLElement>, lang: AppLang) => void
}

/**
 * ToggleLanguage
 *
 * @param param ToggleLanguageProps
 * @returns
 */
const ToggleLanguage: FC<ToggleLanguageProps> = ({ lang, languages, handleChangeLang }) => {
  return (
    <ToggleButtonGroup size="small" value={lang} exclusive onChange={handleChangeLang} aria-label="app language">
      {languages.map((item: Language) => (
        <ToggleButton key={item.key} value={item.key} aria-label={`${item} language`}>
          {item.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

export default ToggleLanguage
