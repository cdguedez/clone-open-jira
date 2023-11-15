import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

export const Navbar = () => {
  return (
    <AppBar position='sticky' component='nav'>
      <Toolbar>
        <IconButton size='medium' edge='start'>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant='h4'>
          OpenJira
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
