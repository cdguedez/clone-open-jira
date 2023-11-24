import { type NextPage } from 'next'
import { Card, CardContent, CardHeader, Grid } from '@mui/material'

import { MainLayout } from '@/components/layouts'

const Home: NextPage = () => {
  return (
      <MainLayout title='Home Open Jira'>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: 'calc(100vh - 100px)' }}>
              <CardHeader title='Pendientes' />
              <CardContent>
                <p>En esta sección se mostrarán las tareas pendientes</p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: 'calc(100vh - 100px)' }}>
              <CardHeader title='En Desarrollo' />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: 'calc(100vh - 100px)' }}>
              <CardHeader title='Listas' />
            </Card>
          </Grid>
        </Grid>
      </MainLayout>
  )
}

export default Home
