import React, { type FC, useReducer } from 'react'
import { UIContext, uiRecuder } from './'

interface UIProviderProps {
  children: React.ReactNode
}

export interface UIState {
  theme: 'light' | 'dark'
  sidebarOpen: boolean
  isAddEntry: boolean
  isDragging: boolean
}

const UI_INITIAL_STATE: UIState = {
  theme: 'dark',
  sidebarOpen: false,
  isAddEntry: false,
  isDragging: false
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

  const startDragging = () => {
    dispatch({ type: 'START_DRAGGING' })
  }

  const endDragging = () => {
    dispatch({ type: 'STOP_DRAGGING' })
  }

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' })
  }

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideBar,
        closeSideBar,
        openNewEntry,
        startDragging,
        endDragging,
        toggleTheme
      }}
    >
      { children }
    </UIContext.Provider>
  )
}
