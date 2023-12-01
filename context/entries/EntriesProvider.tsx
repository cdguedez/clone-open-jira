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
  entries: [
    {
      _id: uuidv4(),
      title: 'First entry',
      description: 'This is the first entry',
      status: 'completed',
      createdAt: Date.now()
    },
    {
      _id: uuidv4(),
      title: 'Second entry',
      description: 'This is the second entry',
      status: 'in-progress',
      createdAt: Date.now() - 1000
    },
    {
      _id: uuidv4(),
      title: 'Third entry',
      description: 'This is the third entry',
      status: 'completed',
      createdAt: Date.now() - 3000
    }
  ]
}

export const EntriesProvider = ({ children }: EntriesProviderProps) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

  return (
    <EntriesContext.Provider value={{
      ...state
    }}>
      { children }
    </EntriesContext.Provider>
  )
}
