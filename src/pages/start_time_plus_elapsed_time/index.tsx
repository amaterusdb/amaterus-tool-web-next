import {
  Box,
  Toolbar,
  Typography,
  Link as MuiLink,
  TextField,
  Button,
  FormControl,
  MenuItem,
  Stack,
} from '@mui/material'
import { parseISO, add as dateAdd } from 'date-fns'
import { utcToZonedTime, format as formatTZ, getTimezoneOffset } from 'date-fns-tz'
import Head from 'next/head'
import NextLink from 'next/link'
import { useEffect, useMemo } from 'react'
import { useForm, Controller } from 'react-hook-form'
import DrawerAppBar from '@/components/drawer_app_bar'

interface StartTimePlusElapsedTimePageFormValues {
  startTime: string
  outputTimezone: string
  elapsedTimeLines: string
  resultTimeLines: string
}

function addElapsedTimeStringToDuration(date: Date, elapsedTimeString: string): Date {
  const hhmmssMatch = elapsedTimeString.match(/^(\d{2}):(\d{2}):(\d{2})$/)
  if (hhmmssMatch != null) {
    const hours = Number.parseInt(hhmmssMatch[1])
    const minutes = Number.parseInt(hhmmssMatch[2])
    const seconds = Number.parseInt(hhmmssMatch[3])

    return dateAdd(date, {
      hours,
      minutes,
      seconds,
    })
  }

  throw Error(`Invalid elapsed time string format. Use HH:mm:ss. Given: ${elapsedTimeString}`)
}

function formatTZISO(date: Date, timezone: string): string {
  const zonedResultTime = utcToZonedTime(date, timezone)

  return formatTZ(zonedResultTime, "yyyy-MM-dd'T'HH:mm:ssxxx", {
    timeZone: timezone,
  })
}

function getTimezoneOffsetString(timezone: string): string {
  const zonedCurrentTime = utcToZonedTime(new Date(), timezone)

  return formatTZ(zonedCurrentTime, 'xxx', {
    timeZone: timezone,
  })
}

export default function StartTimePlusElapsedTimePage() {
  const availableTimezones = useMemo(() => {
    const timezones = Intl.supportedValuesOf('timeZone')

    if (!timezones.includes('UTC')) {
      timezones.push('UTC')
    }

    return timezones
  }, [])

  const displayAvailableTimezones = useMemo(() => {
    return availableTimezones.map(
      (timezone) => `${timezone} (${getTimezoneOffsetString(timezone)})`,
    )
  }, [availableTimezones])

  const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const currentDateString = formatTZISO(new Date(), currentTimezone)

  const elapsedTimePlaceholders = ['00:12:34', '01:23:45']
  const resultTimePlaceholders = elapsedTimePlaceholders.map((elapsedTimePlaceholder) =>
    formatTZISO(
      addElapsedTimeStringToDuration(parseISO(currentDateString), elapsedTimePlaceholder),
      currentTimezone,
    ),
  )

  const { control, handleSubmit, setValue, watch } =
    useForm<StartTimePlusElapsedTimePageFormValues>({
      defaultValues: {
        startTime: currentDateString,
        outputTimezone: currentTimezone,
        elapsedTimeLines: '',
        resultTimeLines: '',
      },
    })

  const startTimeValue = watch('startTime')
  const timezoneValue = watch('outputTimezone')
  const elapsedTimeLinesValue = watch('elapsedTimeLines')
  const resultTimeLinesValue = watch('resultTimeLines')

  useEffect(() => {
    const startTime = parseISO(startTimeValue)
    const elapsedTimeLines = elapsedTimeLinesValue
      .split('\n')
      .map((elapsedTimeLine) => elapsedTimeLine.trim())

    const resultTimes = []
    for (const elapsedTimeLine of elapsedTimeLines) {
      let resultTimeLine = ''

      try {
        const utcResultTime = addElapsedTimeStringToDuration(startTime, elapsedTimeLine)
        resultTimeLine = formatTZISO(utcResultTime, timezoneValue)
      } catch {}

      resultTimes.push(resultTimeLine)
    }

    setValue('resultTimeLines', resultTimes.join('\n'))
  }, [startTimeValue, timezoneValue, elapsedTimeLinesValue, setValue])

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
        <Box sx={{ mt: 5 }}>
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
                    const currentDateString = formatTZISO(new Date(), timezoneValue)

                    setValue('startTime', currentDateString)
                  }}
                  variant='contained'
                  sx={{ ml: 2, mt: 1 }}
                >
                  現在時刻を入力
                </Button>
              </Stack>
            </Box>
            <Box sx={{ mt: 5 }}>
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
                        {availableTimezones.map((timezone, index) => (
                          <MenuItem key={timezone} value={timezone}>
                            {displayAvailableTimezones[index]}
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
                <Button
                  onClick={() => {
                    setValue('outputTimezone', 'UTC')
                  }}
                  variant='contained'
                  sx={{ ml: 2, mt: 1 }}
                >
                  UTCを入力
                </Button>
              </Stack>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Stack
                direction={{ xs: 'column', sm: 'column', md: 'row' }}
                spacing={{ xs: 4, sm: 4, md: 2 }}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row', md: 'column' }}
                  spacing={{ xs: 2, sm: 2, md: 2 }}
                  alignItems={{ xs: 'stretch', sm: 'center', md: 'stretch' }}
                >
                  <FormControl sx={{ width: '40ch' }}>
                    <Controller
                      name='elapsedTimeLines'
                      control={control}
                      render={({ field }) => (
                        <TextField
                          multiline
                          minRows={3}
                          label='経過時間'
                          placeholder={elapsedTimePlaceholders.join('\n')}
                          helperText='HH:mm:ss 形式の経過時間（複数行）'
                          {...field}
                        />
                      )}
                    />
                  </FormControl>
                  <Button
                    onClick={async () => {
                      const clipboardText = await navigator.clipboard.readText()

                      setValue('elapsedTimeLines', clipboardText)
                    }}
                    variant='contained'
                    sx={{ ml: 2, mt: 1 }}
                  >
                    クリップボードの内容を入力
                  </Button>
                </Stack>
                <Stack
                  direction={{ xs: 'column', sm: 'row', md: 'column' }}
                  spacing={{ xs: 2, sm: 2, md: 2 }}
                  alignItems={{ xs: 'stretch', sm: 'center', md: 'stretch' }}
                >
                  <FormControl sx={{ width: '40ch' }}>
                    <Controller
                      name='resultTimeLines'
                      control={control}
                      render={({ field }) => (
                        <TextField
                          multiline
                          minRows={3}
                          label='出力時間'
                          placeholder={resultTimePlaceholders.join('\n')}
                          helperText='ISO 8601 (RFC 3339) 拡張形式のタイムゾーン付き日時'
                          InputProps={{
                            readOnly: true,
                          }}
                          onClick={(e) => {
                            if (
                              e.target instanceof HTMLInputElement ||
                              e.target instanceof HTMLTextAreaElement
                            ) {
                              e.target.select()
                            }
                          }}
                          {...field}
                        />
                      )}
                    />
                  </FormControl>
                  <Button
                    onClick={async () => {
                      await navigator.clipboard.writeText(resultTimeLinesValue)
                    }}
                    variant='contained'
                    sx={{ ml: 2, mt: 1 }}
                  >
                    内容をクリップボードに出力
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  )
}
