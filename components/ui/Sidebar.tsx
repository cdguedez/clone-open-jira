import { Box, Drawer, Typography } from '@mui/material'

export const Sidebar = () => {
  return (
    <Drawer
      anchor='left'
      open={true}
      onClose={() => { console.log('CLOSE DRWAER') }}
    >
      <Box sx={{ width: 300 }}>
        <Box sx={{ padding: '.5rem' }}>
          <Typography variant='h4'>
            Menú
          </Typography>
        </Box>
      </Box>
    </Drawer>
  )
}
