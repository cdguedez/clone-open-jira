import React, { useReducer } from 'react'
import { UIContext, uiRecuder } from './'

interface UIProviderProps {
  children: React.ReactNode
}

export interface UIState {
  sidebarOpen: boolean
  theme: any
  toggleTheme: () => void
}

const UI_INITIAL_STATE: UIState = {
  sidebarOpen: false,
  theme: {} as any,
  toggleTheme: () => {}
}

export const UIProvider = ({ children }: UIProviderProps) => {
  const [state, dispatch] = useReducer(uiRecuder, UI_INITIAL_STATE)

  return (
    <UIContext.Provider value={{
      sidebarOpen: false,
      theme: {} as any,
      toggleTheme: () => {}
    }}>
      { children }
    </UIContext.Provider>
  )
}
