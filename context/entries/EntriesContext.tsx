import { type Entry } from '@/interfaces'
import { createContext } from 'react'

interface EntriesContextProps {
  entries: Entry[]
  addNewEntry: (description: string, title: string) => void
  removerEntry: (id: string) => void
  updateStatusEntry: (entry: Entry) => void
}

export const EntriesContext = createContext({} as EntriesContextProps)
