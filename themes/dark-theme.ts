import { createTheme } from '@mui/material'
import { blueGrey, lightBlue, red } from '@mui/material/colors'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: blueGrey[300]
    },
    secondary: {
      main: lightBlue[800]
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
      }
    }
  }

})
