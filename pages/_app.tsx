import { AmplifyProvider, Theme } from '@aws-amplify/ui-react'
import { Amplify, Auth } from 'aws-amplify'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import createEmotionCache from '@/app/createEmotionCache'
import theme from '@/app/theme'
import store from '@/app/store'
import Layout from '@/components/Layout'
import awsconfig from '../aws-exports'
import '@fontsource/anton'
import '@fontsource/roboto'
import '@fontsource/inter'
import '@aws-amplify/ui-react/styles.css'
import '@/app/globals.css'
import * as React from 'react'

Amplify.configure(awsconfig)
Auth.configure(awsconfig)

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const amplifyTheme: Theme = {
  name: 'newctt',
  tokens: {
    colors: {
      font: {
        primary: {
          value: '#650f22'
        },
        secondary: {
          value: '#c6a48e'
        }
      }
    }
  }
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <AmplifyProvider theme={amplifyTheme}>
      <CacheProvider value={emotionCache}>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <meta name='viewport' content='initial-scale=1, width=device-width' />
          <meta
            name='description'
            content="Command Tactical Training's focus is on Firefighter Survival and building strong Incident Commanders."
          />
          <title>Command Tactical Training</title>
        </Head>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </Provider>
      </CacheProvider>
    </AmplifyProvider>
  )
}

export default MyApp
