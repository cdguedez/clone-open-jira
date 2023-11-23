import { type UIState } from './'

export const uiRecuder = (state: UIState, action: any): UIState => {
  switch (action.type) {
    case 'GET_UI':
      return {
        ...state,
        ...action.payload
      }
    case 'SET_UI':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
