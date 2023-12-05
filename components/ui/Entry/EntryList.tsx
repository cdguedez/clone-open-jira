import { List, Paper } from '@mui/material'
import React, { useContext, useMemo } from 'react'
import { EntryCard } from '../'
import { EntriesContext } from '@/context/entries'
import { type EntryStatus } from '@/interfaces'

interface EntryListProps {
  status: EntryStatus
}

export const EntryList = ({ status }: EntryListProps) => {
  const { entries } = useContext(EntriesContext)

  const entriesRenderByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])

  return (
    <div>
      <Paper sx={{
        height: 'calc(100vh - 200px)',
        overflow: 'auto',
        backgroundColor: 'transparent'
      }}>
        <List sx={{ opacity: 1 }}>
          {entriesRenderByStatus.map(entry => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  )
}
