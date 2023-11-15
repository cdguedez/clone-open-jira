import { createTheme } from '@mui/material'
import { blueGrey, red, lightBlue } from '@mui/material/colors'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: lightBlue[100]
    },
    secondary: {
      main: blueGrey[300]
    },
    error: {
      main: red[500]
    }
  },

  typography: {
    h1: {
      fontSize: '4rem'
    },
    h2: {
      fontSize: '3rem'
    },
    h3: {
      fontSize: '2rem'
    },
    h4: {
      fontSize: '1.5rem'
    },
    h5: {
      fontSize: '1.25rem'
    },
    h6: {
      fontSize: '1rem'
    }
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          backgroundColor: lightBlue[500]
        }
      }
    }
  }
})
