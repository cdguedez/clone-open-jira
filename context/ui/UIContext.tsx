import { createContext } from 'react'

interface UIContextProps {
  sidebarOpen: boolean
  selectTheme: string
}

export const UIContext = createContext({} as UIContextProps)
