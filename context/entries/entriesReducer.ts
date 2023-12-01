import { type EntriesState } from './'

type EntriesActionType = | { type: 'ENTRIES_ADDD' }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case 'ENTRIES_ADDD':
      return {
        ...state
      }
    default:
      return state
  }
}
