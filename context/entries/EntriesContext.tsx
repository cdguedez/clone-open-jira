import { type Entry } from '@/interfaces'
import { createContext } from 'react'

interface EntriesContextProps {
  entries: Entry[]
}

export const EntriesContext = createContext({} as EntriesContextProps)
