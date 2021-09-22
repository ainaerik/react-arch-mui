import { FC } from 'react'
import Button, { ButtonProps } from '@mui/material/Button'

import useStyles from './styles'

interface EnhancedButtonProps extends ButtonProps {}

/**
 * EnhancedButton
 * @param props EnhancedButtonProps
 * @returns
 */
const EnhancedButton: FC<EnhancedButtonProps> = ({ children, ...props }) => {
  const classes = useStyles()

  return (
    <Button {...props} className={classes.root}>
      {children}
    </Button>
  )
}

export default EnhancedButton
