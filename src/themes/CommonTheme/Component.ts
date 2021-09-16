import { ThemeOptions } from '@mui/material/styles'
import { green, grey } from '@mui/material/colors'

/**
 * Components
 */
const ComponentOptions: ThemeOptions = {
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: { border: `2px dashed ${green[500]}`, color: green[500] },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: { border: `2px dashed ${grey[500]}`, color: grey[500] },
        },
      ],
      defaultProps: {
        disableElevation: true,
        disableRipple: false,
        size: 'medium',
      },
    },
    // MuiFilledInput: {
    //   defaultProps: {
    //     margin: 'dense',
    //   },
    // },
    // MuiFormControl: {
    //   defaultProps: {
    //     margin: 'dense',
    //   },
    // },
    // MuiFormHelperText: {
    //   defaultProps: {
    //     margin: 'dense',
    //   },
    // },
    // MuiIconButton: {
    //   defaultProps: {
    //     size: 'small',
    //   },
    //   styleOverrides: {
    //     sizeSmall: {
    //       // Adjust spacing to reach minimal touch target hitbox
    //       marginLeft: 4,
    //       marginRight: 4,
    //       padding: 12,
    //     },
    //   },
    // },
    // MuiInputBase: {
    //   defaultProps: {
    //     margin: 'dense',
    //   },
    // },
    // MuiInputLabel: {
    //   defaultProps: {
    //     margin: 'dense',
    //   },
    // },
    // MuiListItem: {
    //   defaultProps: {
    //     dense: true,
    //   },
    // },
    // MuiOutlinedInput: {
    //   defaultProps: {
    //     margin: 'dense',
    //   },
    // },
    // MuiFab: {
    //   defaultProps: {
    //     size: 'small',
    //   },
    // },
    // MuiTable: {
    //   defaultProps: {
    //     size: 'small',
    //   },
    // },
    // MuiTextField: {
    //   defaultProps: {
    //     margin: 'dense',
    //   },
    // },
    // MuiToolbar: {
    //   defaultProps: {
    //     variant: 'dense',
    //   },
    // },
  },
}

/**
 * Module augmentation for Button
 */
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true
  }
}

export default ComponentOptions
