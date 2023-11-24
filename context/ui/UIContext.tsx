import { createContext } from 'react'

interface UIContextProps {
  sidebarOpen: boolean
  openSideBar: () => void
  closeSideBar: () => void
}

export const UIContext = createContext({} as UIContextProps)
