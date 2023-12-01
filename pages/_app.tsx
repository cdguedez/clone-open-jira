import '@/styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

import { UIProvider } from '@/context/ui'
import { EntriesProvider } from '@/context/entries'
import { useTheme } from '@/hooks/useTheme'

export default function App ({ Component, pageProps }: AppProps) {
  const { theme } = useTheme()

  return (
      <EntriesProvider>
        <UIProvider>
          <ThemeProvider theme={ theme }>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
  )
}
