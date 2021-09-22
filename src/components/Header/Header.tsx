import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'

import useStyles from './styles'

interface HeaderProps {}

/**
 * Header
 * @param props HeaderProps
 * @returns
 */
const Header: FC<HeaderProps> = ({}) => {
  const { t } = useTranslation('common')
  const classes = useStyles()

  return <Box className={classes.root}></Box>
}

export default Header
