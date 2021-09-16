import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'

import useStyles from './styles'

interface FooterProps {}

/**
 * Footer
 * @param props FooterProps
 * @returns
 */
const Footer: FC<FooterProps> = (props) => {
  const { t } = useTranslation('common')
  const classes = useStyles()

  return <Box className={classes.root}>Footer</Box>
}

export default Footer
