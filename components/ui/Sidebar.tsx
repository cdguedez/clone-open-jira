import { Dns, People, PermMedia, Public } from '@mui/icons-material'
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'

const menuItems = [
  { icon: <People />, label: 'Authentication' },
  { icon: <Dns />, label: 'Database' },
  { icon: <PermMedia />, label: 'Storage' },
  { icon: <Public />, label: 'Hosting' }
]

export const Sidebar = () => {
  return (
    <Drawer
      anchor='left'
      open={true}
      onClose={() => { console.log('CLOSE DRWAER') }}
    >
      <Box sx={{ width: 300 }} component='aside'>
        <Box sx={{ padding: '.5rem' }}>
          <Typography variant='h4'>
            Menú
          </Typography>
          <List aria-label='menu'>
            {
              menuItems.map(({ icon, label }, index) => (
                <ListItemButton component='a' key={index}>
                  <ListItemIcon>
                    { icon }
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              ))
            }
          </List>
        </Box>
      </Box>
    </Drawer>
  )
}
