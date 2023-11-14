import { createTheme } from '@mui/material'
import { blueGrey } from '@mui/material/colors'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: blueGrey[300]
    },
    text: {
      primary: '#fff',
      secondary: blueGrey[300]
    }
  }
})
