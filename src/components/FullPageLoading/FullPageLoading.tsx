import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface FullPageLoadingProps {}

const FullPageLoading: FC<FullPageLoadingProps> = (props) => {
  const { t } = useTranslation('common')

  return <>FullPageLoading...</>
}

export default FullPageLoading
