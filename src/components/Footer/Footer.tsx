import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface FooterProps {}

const Footer: FC<FooterProps> = (props) => {
  const { t } = useTranslation('common')

  return <>Footer</>
}

export default Footer
