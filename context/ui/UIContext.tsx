import { createContext } from 'react'
import { type Theme } from '@mui/material/styles'

interface UIContextProps {
  sidebarOpen: boolean
  theme: Theme
  toggleTheme: () => void
}

export const UIContext = createContext<UIContextProps>({
  sidebarOpen: false,
  theme: {} as Theme,
  toggleTheme: () => {}
})
