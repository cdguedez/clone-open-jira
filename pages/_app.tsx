import '@/styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

import { useTheme } from '@/hooks/useTheme'
import { UIContext } from '@/context/ui'

export default function App ({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme, sidebarOpen } = useTheme()

  return (
    <UIContext.Provider value={{ theme, toggleTheme, sidebarOpen }}>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIContext.Provider>
  )
}
