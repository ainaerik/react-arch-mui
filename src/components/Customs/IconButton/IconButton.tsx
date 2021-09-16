import { FC } from 'react'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'

import useStyles from './styles'

interface EnhancedIconButtonProps extends IconButtonProps {}

/**
 * EnhancedIconButton
 * @param props EnhancedIconButtonProps
 * @returns
 */
const EnhancedIconButton: FC<EnhancedIconButtonProps> = (props) => {
  const classes = useStyles()

  return (
    <IconButton {...props} className={classes.root}>
      {props.children}
    </IconButton>
  )
}

export default EnhancedIconButton
