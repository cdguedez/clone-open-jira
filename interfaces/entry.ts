export interface Entry {
  _id: string
  title: string
  description: string
  createdAt: string
  status: EntryStatus
}

export type EntryStatus = 'pending' | 'in-progress' | 'completed'
