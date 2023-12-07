import { type DragEvent, useState, useContext } from 'react'

import { Card, CardActionArea, CardContent, CardHeader, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'

import { type Entry } from '@/interfaces'
import { DateTime } from 'luxon'
import { UIContext } from '@/context/ui'

interface EntryCardProps {
  entry: Entry
}

export const EntryCard = ({ entry }: EntryCardProps) => {
  const [expandMore, setExpandMore] = useState(false)
  const { startDragging, endDragging } = useContext(UIContext)

  const handleClickExpand = () => { setExpandMore(!expandMore) }

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData('entry_id', entry._id)
    startDragging()
  }

  const onDragEnd = (event: DragEvent) => {
    endDragging()
  }

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable={entry.status !== 'completed'}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardHeader
          subheader={DateTime.fromISO(entry.createdAt).setLocale('es').toFormat('dd LLL, yyyy')}
          action={<IconButton onClick={handleClickExpand}><MoreVertIcon /></IconButton>}
          title={entry.title}
        />
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }} >{entry.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
