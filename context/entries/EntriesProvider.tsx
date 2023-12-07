import { useReducer } from 'react'

import { v4 as uuidv4 } from 'uuid'
import { DateTime } from 'luxon'
import { type Entry } from '@/interfaces'
import { EntriesContext, entriesReducer } from './'

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
      // createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_FULL, { locale: 'es-ES' }),
      createdAt: DateTime.now().toISO(),
      status: 'pending'
    }

    dispatch({ type: 'ADD_ENTRIES', payload: newEntry })
  }

  const removerEntry = (id: string) => {
    dispatch({ type: 'REMOVE_ENTRIES', payload: { id } })
  }

  const updateStatusEntry = (entry: Entry) => {
    dispatch({ type: 'UPDATE_ENTRY', payload: entry })
  }

  return (
    <EntriesContext.Provider value={{
      ...state,
      addNewEntry,
      removerEntry,
      updateStatusEntry
    }}>
      { children }
    </EntriesContext.Provider>
  )
}
