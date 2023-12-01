import { type NextPage } from 'next'
import { Card, CardHeader, Grid } from '@mui/material'

import { MainLayout } from '@/components/layouts'
import { EntryList, NewEntry } from '@/components/ui'

const Home: NextPage = () => {
  return (
      <MainLayout title='Home Open Jira'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: 'calc(100vh - 100px)' }}>
              <CardHeader title='Pendientes' />
              <NewEntry />
              <EntryList status='pending' />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: 'calc(100vh - 100px)' }}>
              <CardHeader title='En Desarrollo' />
              <EntryList status='in-progress' />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: 'calc(100vh - 100px)' }}>
              <CardHeader title='Completadas' />
              <EntryList status='completed'/>
            </Card>
          </Grid>
        </Grid>
      </MainLayout>
  )
}

export default Home
