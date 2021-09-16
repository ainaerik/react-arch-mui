import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface HeaderProps {}

const Header: FC<HeaderProps> = (props) => {
  const { t } = useTranslation('common')

  return <>Header</>
}

export default Header
