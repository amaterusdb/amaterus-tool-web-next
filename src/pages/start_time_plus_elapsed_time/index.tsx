import {
  Box,
  Toolbar,
  Typography,
  Link as MuiLink,
  TextField,
  Button,
  FormControl,
  MenuItem,
  Grid,
  Stack,
} from '@mui/material'
import { formatISO } from 'date-fns'
import Head from 'next/head'
import NextLink from 'next/link'
import { useMemo } from 'react'
import { useForm, Controller } from 'react-hook-form'
import DrawerAppBar from '@/components/drawer_app_bar'

interface StartTimePlusElapsedTimePageFormValues {
  startTime: string
  outputTimezone: string
  elapsedTimeLines: string
  outputTimeLines: string
}

export default function StartTimePlusElapsedTimePage() {
  const currentDateString = formatISO(new Date())
  const availableTimezones = useMemo(() => Intl.supportedValuesOf('timeZone'), [])
  const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone

  const { control, handleSubmit, setValue } = useForm<StartTimePlusElapsedTimePageFormValues>({
    defaultValues: {
      startTime: currentDateString,
      outputTimezone: currentTimezone,
      elapsedTimeLines: '',
      outputTimeLines: '',
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
        <Box sx={{ mt: 3 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ mt: 3 }}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 2, sm: 2 }}
                alignItems={{ xs: 'stretch', sm: 'center' }}
              >
                <FormControl sx={{ width: '40ch' }}>
                  <Controller
                    name='startTime'
                    control={control}
                    render={({ field }) => (
                      <TextField
                        label='開始日時'
                        placeholder={currentDateString}
                        helperText='ISO 8601 (RFC 3339) 拡張形式のタイムゾーン付き日時'
                        {...field}
                      />
                    )}
                  />
                </FormControl>
                <Button
                  onClick={() => {
                    const currentDateString = formatISO(new Date())

                    setValue('startTime', currentDateString)
                  }}
                  variant='contained'
                  sx={{ ml: 2, mt: 1 }}
                >
                  現在時刻を入力
                </Button>
              </Stack>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 2, sm: 2 }}
                alignItems={{ xs: 'stretch', sm: 'center' }}
              >
                <FormControl sx={{ width: '40ch' }}>
                  <Controller
                    name='outputTimezone'
                    control={control}
                    render={({ field }) => (
                      <TextField
                        select
                        label='出力のタイムゾーン'
                        placeholder={currentTimezone}
                        helperText='IANA タイムゾーン識別子'
                        {...field}
                      >
                        {availableTimezones.map((timezone) => (
                          <MenuItem key={timezone} value={timezone}>
                            {timezone}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}
                  />
                </FormControl>
                <Button
                  onClick={() => {
                    setValue('outputTimezone', currentTimezone)
                  }}
                  variant='contained'
                  sx={{ ml: 2, mt: 1 }}
                >
                  現在のタイムゾーンを入力
                </Button>
              </Stack>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                <FormControl sx={{ width: '40ch' }}>
                  <Controller
                    name='elapsedTimeLines'
                    control={control}
                    render={({ field }) => (
                      <TextField
                        multiline
                        minRows={3}
                        label='経過時間'
                        placeholder={`00:12:34\n01:23:45`}
                        helperText='HH:mm:ss 形式の経過時間（複数行）'
                        {...field}
                      />
                    )}
                  />
                </FormControl>
                <FormControl sx={{ width: '40ch' }}>
                  <Controller
                    name='outputTimeLines'
                    control={control}
                    render={({ field }) => (
                      <TextField
                        multiline
                        minRows={3}
                        label='出力時間'
                        placeholder={`${currentDateString}\n${currentDateString}`}
                        InputProps={{
                          readOnly: true,
                        }}
                        {...field}
                      />
                    )}
                  />
                </FormControl>
              </Stack>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  )
}
