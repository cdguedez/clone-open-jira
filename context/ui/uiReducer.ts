import { type UIState } from './'

type UIActionType = | { type: 'OPEN_SIDEBAR' } | { type: 'CLOSE_SIDEBAR' } | { type: 'ADD_NEW_ENTRY', payload: boolean }

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
    default:
      return state
  }
}
