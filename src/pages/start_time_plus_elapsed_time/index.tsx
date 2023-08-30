import { Box, Toolbar, Typography, Link as MuiLink, TextField } from '@mui/material'
import Head from 'next/head'
import NextLink from 'next/link'
import { useForm, Controller } from 'react-hook-form'
import DrawerAppBar from '@/components/drawer_app_bar'

interface StartTimePlusElapsedTimePageFormValues {
  startTime: string
}

export default function StartTimePlusElapsedTimePage() {
  const { control, handleSubmit } = useForm<StartTimePlusElapsedTimePageFormValues>({
    defaultValues: {
      startTime: '', // TODO:
    },
  })

  const onSubmit = (formValues: StartTimePlusElapsedTimePageFormValues): void => {}

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='startTime'
            control={control}
            render={({ field }) => <TextField label='開始日時' variant='standard' {...field} />}
          />
        </form>
      </Box>
    </>
  )
}
