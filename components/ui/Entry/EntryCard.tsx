import { Card, CardActionArea, CardActions, CardContent, CardHeader, Typography } from '@mui/material'
import { type Entry } from '@/interfaces'

interface EntryCardProps {
  entry: Entry
}

export const EntryCard = ({ entry }: EntryCardProps) => {
  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardActionArea>
        <CardHeader title={entry.title}></CardHeader>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }} >{entry.description}</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant='body2' >Hace 30 min</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
