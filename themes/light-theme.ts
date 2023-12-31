import { createTheme } from '@mui/material'
import { blueGrey, red, lightBlue } from '@mui/material/colors'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: lightBlue[50]
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
      styleOverrides: {
        colorPrimary: {
          backgroundColor: lightBlue[500]
        }
      },
      defaultProps: {
        elevation: 0
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: lightBlue[500],
          color: 'white'
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: 'white'
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'white'
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'white'
        }
      }
    }
  }
})
