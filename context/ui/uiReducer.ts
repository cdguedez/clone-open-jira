import { type UIState } from './'

type UIActionType = | { type: 'OPEN_SIDEBAR' } | { type: 'CLOSE_SIDEBAR' } | { type: 'ADD_NEW_ENTRY', payload: boolean } | { type: 'START_DRAGGING' } | { type: 'STOP_DRAGGING' }

export const uiRecuder = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'OPEN_SIDEBAR':
      return {
        ...state,
        sidebarOpen: true
      }
    case 'CLOSE_SIDEBAR':
      return {
        ...state,
        sidebarOpen: false
      }
    case 'ADD_NEW_ENTRY':
      return {
        ...state,
        isAddEntry: action.payload
      }
    case 'START_DRAGGING':
      return {
        ...state,
        isDragging: true
      }
    case 'STOP_DRAGGING':
      return {
        ...state,
        isDragging: false
      }
    default:
      return state
  }
}
