import { createContext } from 'react'

interface UIContextProps {
  sidebarOpen: boolean
  isAddEntry: boolean

  // methods
  openSideBar: () => void
  closeSideBar: () => void
  openNewEntry: (status: boolean) => void
}

export const UIContext = createContext({} as UIContextProps)
