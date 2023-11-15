import { MainLayout } from '@/components/layouts'
import { Typography } from '@mui/material'

export default function Home () {
  return (
    <main>
      <MainLayout title='My App with MUI and Nextjs'>
        <Typography variant='h1' component='h1'>Home Page</Typography>
      </MainLayout>
    </main>
  )
}
