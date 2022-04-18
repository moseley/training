import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#5c0115'
    },
    secondary: {
      main: '#debb8c'
    },
    error: {
      main: red.A400
    }
  }
})

export default theme
