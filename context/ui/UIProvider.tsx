import React, { useReducer } from 'react'
import { UIContext, reducer } from './'

interface UIProviderProps {
  children: React.ReactNode
}

export interface UIState {
  sidebarOpen: boolean
}

const UI_INITIAL_STATE: UIState = {
  sidebarOpen: false
}

export const UIProvider = ({ children }: UIProviderProps) => {
  const [state, dispatch] = useReducer(reducer, UI_INITIAL_STATE)

  return (
    <UIContext.Provider value={{
      sidebarOpen: false
    }}>
      { children }
    </UIContext.Provider>
  )
}
