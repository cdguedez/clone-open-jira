import '@/styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

import { useTheme } from '@/hooks/useTheme'
import { UIProvider } from '@/context/ui'

export default function App ({ Component, pageProps }: AppProps) {
  const { theme } = useTheme()

  return (
    <UIProvider>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  )
}
