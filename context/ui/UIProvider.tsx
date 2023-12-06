import React, { type FC, useReducer } from 'react'
import { UIContext, uiRecuder } from './'

interface UIProviderProps {
  children: React.ReactNode
}

export interface UIState {
  sidebarOpen: boolean
  isAddEntry: boolean
}

const UI_INITIAL_STATE: UIState = {
  sidebarOpen: false,
  isAddEntry: false
}

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiRecuder, UI_INITIAL_STATE)

  const openSideBar = () => {
    dispatch({ type: 'OPEN_SIDEBAR' })
  }

  const closeSideBar = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' })
  }

  const openNewEntry = (status: boolean) => {
    dispatch({ type: 'ADD_NEW_ENTRY', payload: status })
  }

  return (
    <UIContext.Provider value={{ ...state, openSideBar, closeSideBar, openNewEntry }}>
      { children }
    </UIContext.Provider>
  )
}
