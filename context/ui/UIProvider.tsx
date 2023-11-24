import React, { type FC, useReducer } from 'react'
import { UIContext, uiRecuder } from './'

interface UIProviderProps {
  children: React.ReactNode
}

export interface UIState {
  sidebarOpen: boolean
}

const UI_INITIAL_STATE: UIState = {
  sidebarOpen: false
}

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiRecuder, UI_INITIAL_STATE)

  const openSideBar = () => {
    dispatch({ type: 'OPEN_SIDEBAR' })
  }

  const closeSideBar = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' })
  }

  return (
    <UIContext.Provider value={{ ...state, openSideBar, closeSideBar }}>
      { children }
    </UIContext.Provider>
  )
}
