import { Box, Toolbar, Typography, Link as MuiLink } from '@mui/material'
import Head from 'next/head'
import NextLink from 'next/link'
import DrawerAppBar from '@/components/drawer_app_bar'

export default function StartTimePlusElapsedTimePage() {
  return (
    <>
      <Head>
        <title>開始日時＋経過時間 - Amaterus Tool</title>
      </Head>
      <DrawerAppBar />
      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />
        <Typography variant='h4' component='h2'>
          Amaterus Tool
        </Typography>
      </Box>
    </>
  )
}
