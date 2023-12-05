import { type Entry } from '@/interfaces'
import { type EntriesState } from './'

type EntriesActionType = | { type: 'ADD_ENTRIES', payload: Entry } | { type: 'REMOVE_ENTRIES', payload: { id: string } }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case 'ADD_ENTRIES':
      return {
        ...state,
        entries: [...state.entries, action.payload]
      }
    case 'REMOVE_ENTRIES':
      return {
        ...state,
        entries: state.entries.filter(entry => entry._id !== action.payload.id)
      }
    default:
      return state
  }
}
