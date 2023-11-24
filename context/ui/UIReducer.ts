import { type UIState } from './'

type UIActionType = | { type: 'OPEN_SIDEBAR' } | { type: 'CLOSE_SIDEBAR' }

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
    default:
      return state
  }
}
