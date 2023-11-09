import '@/styles/globals.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'

const baseTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ baseTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
