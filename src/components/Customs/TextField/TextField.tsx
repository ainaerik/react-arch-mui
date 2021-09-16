import { FC } from 'react'
import TextField, { OutlinedTextFieldProps } from '@mui/material/TextField'

import useStyles from './styles'

interface EnhancedTextFieldProps extends OutlinedTextFieldProps {}

/**
 * EnhancedTextField
 * @param props EnhancedTextFieldProps
 * @returns
 */
const EnhancedTextField: FC<EnhancedTextFieldProps> = (props) => {
  const classes = useStyles()

  return (
    <TextField {...props} className={classes.root}>
      {props.children}
    </TextField>
  )
}

export default EnhancedTextField
