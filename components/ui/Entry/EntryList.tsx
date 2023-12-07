import { List, Paper } from '@mui/material'
import { type DragEvent, useContext, useMemo } from 'react'
import { EntryCard } from '../'
import { EntriesContext } from '@/context/entries'
import { type EntryStatus } from '@/interfaces'
import { UIContext } from '@/context/ui'

import styles from './EntryList.module.css'

interface EntryListProps {
  status: EntryStatus
}

export const EntryList = ({ status }: EntryListProps) => {
  const { entries, updateStatusEntry } = useContext(EntriesContext)
  const { isDragging, endDragging } = useContext(UIContext)

  const entriesRenderByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const handleDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const entryId = event.dataTransfer.getData('entry_id')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const entryDragged = entries.find(entry => entry._id === entryId)!
    updateStatusEntry({ ...entryDragged, status })
    endDragging()
  }

  return (
    <div onDrop={handleDropEntry} onDragOver={allowDrop} className={ isDragging ? styles.dragging : '' }>
      <Paper sx={{
        height: 'calc(100vh - 100px)',
        overflow: 'auto',
        backgroundColor: 'transparent'
      }}>
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
          {entriesRenderByStatus.map(entry => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  )
}
