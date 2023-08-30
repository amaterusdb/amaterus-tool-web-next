import { Box, Toolbar, Typography, Link as MuiLink, TextField, Button, FormControl } from '@mui/material'
import Head from 'next/head'
import NextLink from 'next/link'
import { useForm, Controller } from 'react-hook-form'
import DrawerAppBar from '@/components/drawer_app_bar'

interface StartTimePlusElapsedTimePageFormValues {
  startTime: string
  elapsedTimeLines: string
}

export default function StartTimePlusElapsedTimePage() {
  const { control, handleSubmit, setValue } = useForm<StartTimePlusElapsedTimePageFormValues>({
    defaultValues: {
      startTime: '',
      elapsedTimeLines: '',
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
          開始日時＋経過時間
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mt: 3 }}>
            <FormControl sx={{ width: '27.5ch' }}>
              <Controller
                name='startTime'
                control={control}
                render={({ field }) => (
                  <TextField
                    label='開始日時'
                    placeholder='2023-01-01T00:00:00+09:00'
                    helperText='ISO 8601 (RFC 3339)の時刻形式'
                    {...field}
                  />
                )}
              />
            </FormControl>
            <Button onClick={() => {
              setValue("startTime", "")
            }} variant='contained' sx={{ ml: 2, mt: 1 }}>
              現在時刻を入力
            </Button>
          </Box>
        </form>
      </Box>
    </>
  )
}
