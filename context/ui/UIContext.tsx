import { createContext } from 'react'

interface UIContextProps {
  theme: 'light' | 'dark'
  sidebarOpen: boolean
  isAddEntry: boolean

  isDragging: boolean

  // methods
  openSideBar: () => void
  closeSideBar: () => void
  openNewEntry: (status: boolean) => void

  startDragging: () => void
  endDragging: () => void

  toggleTheme: () => void
}

export const UIContext = createContext({} as UIContextProps)
