import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Typography from '@mui/material/Typography'
import FireCommand from '@/components/scene/FireCommand'
import DemoDisplay from '@/components/scene/FireCommand/DemoDisplay'
import { Stack } from '@mui/material'
import * as React from 'react'

const Demo: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Fire Command Demo | Command Tactical Training</title>
        <meta name='description' content='Fire Command Demo' />
      </Head>
      <Typography variant='h2' component='h1' gutterBottom>
        Cypress Demo
      </Typography>
      <Stack direction='row' spacing={2}>
        <FireCommand />
        <DemoDisplay />
      </Stack>
    </Layout>
  )
}

export default Demo
