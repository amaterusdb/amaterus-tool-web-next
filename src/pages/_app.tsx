import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline, createTheme, useMediaQuery } from '@mui/material'
import type { AppProps } from 'next/app'
import React from 'react'
import GoogleAnalytics from '@/components/google_analytics'
import { createApolloClient } from '@/lib/apollo'

export default function App({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  )

  const client = createApolloClient()

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GoogleAnalytics />
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  )
}
