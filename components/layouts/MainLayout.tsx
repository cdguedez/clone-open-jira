import React, { type FC } from 'react'
import Head from 'next/head'
import { Box } from '@mui/material'
import { Navbar, Sidebar } from '../ui'

interface MainLayoutProps {
  title?: string
  children: React.ReactNode
}

export const MainLayout: FC<MainLayoutProps> = ({ title = 'Open Jira Software', children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>{ title }</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Box component='main' sx={{ padding: '1.2rem 2rem' }}>
        { children }
      </Box>
    </Box>
  )
}
