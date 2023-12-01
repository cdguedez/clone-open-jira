import { useReducer } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { EntriesContext, entriesReducer } from './'
import { type Entry } from '@/interfaces'

interface EntriesProviderProps {
  children: React.ReactNode
}

export interface EntriesState {
  entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: []
}

export const EntriesProvider = ({ children }: EntriesProviderProps) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

  const addNewEntry = (description: string, title: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      title,
      description,
      createdAt: Date.now(),
      status: 'pending'
    }

    dispatch({ type: 'ADD_ENTRIES', payload: newEntry })
  }

  return (
    <EntriesContext.Provider value={{
      ...state,
      addNewEntry
    }}>
      { children }
    </EntriesContext.Provider>
  )
}
