import { useContext } from 'react'
import NextLink from 'next/link'
import { Dns, People, PermMedia, Public } from '@mui/icons-material'
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography, Link as MUILink } from '@mui/material'
import { UIContext } from '@/context/ui'

const menuItems = [
  { icon: <People />, label: 'Dashboard', path: '/dashboard' },
  { icon: <Dns />, label: 'Database', path: '/database' },
  { icon: <PermMedia />, label: 'Storage', path: '/storage' },
  { icon: <Public />, label: 'Hosting', path: '/hosting' }
]

export const Sidebar = () => {
  const { sidebarOpen, closeSideBar } = useContext(UIContext)

  return (
    <Drawer
      anchor='left'
      open={sidebarOpen}
      onClose={closeSideBar}
      color='primary'
    >
      <Box sx={{ width: 300 }} component='aside'>
        <Box sx={{ padding: '.5rem' }}>
          <Typography variant='h4'>
            Menú
          </Typography>
          <List aria-label='menu'>
            {
              menuItems.map(({ icon, label, path }) => (
                <NextLink href={path} passHref key={path} style={{ textDecoration: 'none' }}>
                  <MUILink>
                  <ListItemButton component='a'>
                    <ListItemIcon>
                      { icon }
                    </ListItemIcon>
                        <ListItemText primary={label} />
                  </ListItemButton>
                  </MUILink>
                </NextLink>
              ))
            }
          </List>
        </Box>
      </Box>
    </Drawer>
  )
}
