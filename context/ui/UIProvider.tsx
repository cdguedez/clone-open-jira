import React, { type FC, useReducer } from 'react'
import { UIContext, uiRecuder } from './'

interface UIProviderProps {
  children: React.ReactNode
}

export interface UIState {
  sidebarOpen: boolean
  isAddEntry: boolean
  isDragging: boolean
}

const UI_INITIAL_STATE: UIState = {
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
    dispatch({ type: 'START_DRAGGING' })
  }

  return (
    <UIContext.Provider value={{ ...state, openSideBar, closeSideBar, openNewEntry, startDragging, endDragging }}>
      { children }
    </UIContext.Provider>
  )
}
