import { type Entry } from '@/interfaces'
import { type EntriesState } from './'

type EntriesActionType = | { type: 'ADD_ENTRIES', payload: Entry } | { type: 'REMOVE_ENTRIES', payload: { id: string } } | { type: 'UPDATE_ENTRY', payload: Entry }

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
    case 'UPDATE_ENTRY':
      return {
        ...state,
        entries: state.entries.map(entry => entry._id === action.payload._id ? action.payload : entry)
      }
    default:
      return state
  }
}
