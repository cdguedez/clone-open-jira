import React, { useContext } from 'react'

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
// import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'

import { UIContext } from '@/context/ui'

export const Navbar = () => {
  const { openSideBar } = useContext(UIContext)

  return (
    <AppBar position='static' component='nav' color='primary'>
      <Toolbar>
        <IconButton size='large' edge='start' aria-label='menu' onClick={openSideBar} sx={{ mr: 2 }}>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant='h4' component='span' sx={{ flexGrow: 1 }}>
          openJiraCG
        </Typography>
        {/* <IconButton size='medium' edge='end' onClick={toggleTheme}>
          { theme.palette.mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon /> }
        </IconButton> */}
      </Toolbar>
    </AppBar>
  )
}
