import { useState } from 'react'
import { darkTheme, lightTheme } from '@/themes'

export function useTheme () {
  const [theme, setTheme] = useState(darkTheme)
  const [sidebarOpen] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme)
  }

  return { theme, toggleTheme, sidebarOpen }
}
