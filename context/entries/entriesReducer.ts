import { type Entry } from '@/interfaces'
import { type EntriesState } from './'

type EntriesActionType = | { type: 'ADD_ENTRIES', payload: Entry }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case 'ADD_ENTRIES':
      return {
        ...state,
        entries: [...state.entries, action.payload]
      }
    default:
      return state
  }
}
