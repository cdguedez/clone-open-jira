import { createContext } from 'react'

interface UIContextProps {
  sidebarOpen: boolean
}

export const UIContext = createContext({} as UIContextProps)
