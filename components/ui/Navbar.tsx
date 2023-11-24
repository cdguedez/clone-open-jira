import React, { type FC, useContext } from 'react'

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'

import { UIContext } from '@/context/ui/UIContext'

interface NavbarProps {
  handleOpenSidebar: () => void
}

export const Navbar: FC<NavbarProps> = ({ handleOpenSidebar }) => {
  const { toggleTheme, theme } = useContext(UIContext)

  return (
    <AppBar position='static' component='nav' color='primary'>
      <Toolbar>
        <IconButton size='large' edge='start' aria-label='menu' onClick={handleOpenSidebar} sx={{ mr: 2 }}>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant='h4' component='span' sx={{ flexGrow: 1 }}>
          openJiraCG
        </Typography>
        <IconButton size='medium' edge='end' onClick={toggleTheme}>
          { theme.palette.mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon /> }
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
