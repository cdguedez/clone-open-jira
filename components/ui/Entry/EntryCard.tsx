import { useState } from 'react'

import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'

import { type Entry } from '@/interfaces'
import { DateTime } from 'luxon'

interface EntryCardProps {
  entry: Entry
}

export const EntryCard = ({ entry }: EntryCardProps) => {
  const [expandMore, setExpandMore] = useState(false)

  const handleClickExpand = () => { setExpandMore(!expandMore) }

  return (
    <Card sx={{ marginBottom: 1 }}>
        <CardHeader subheader={DateTime.fromISO(entry.createdAt).setLocale('es').toFormat('dd LLL, yyyy')} action={<IconButton onClick={handleClickExpand}><MoreVertIcon /></IconButton>} title={entry.title} />
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }} >{entry.description}</Typography>
        </CardContent>
    </Card>
  )
}
