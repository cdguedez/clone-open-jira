import { MainLayout } from '@/components/layouts'
import { Typography } from '@mui/material'

export default function Home () {
  return (
      <MainLayout title='My App with MUI and Nextjs'>
        <Typography variant='h1' component='h1'>Hosting Page</Typography>
      </MainLayout>
  )
}
