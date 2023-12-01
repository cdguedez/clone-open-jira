import { type Entry } from '@/interfaces'
import { createContext } from 'react'

interface EntriesContextProps {
  entries: Entry[]
  addNewEntry: (description: string, title: string) => void
}

export const EntriesContext = createContext({} as EntriesContextProps)
