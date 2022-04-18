import type { NextPage } from 'next'
import Head from 'next/head'
import Typography from '@mui/material/Typography'

const Terms: NextPage = () => {
  return (
    <>
      <Head>
        <title>Terms of Service | Command Tactical Training</title>
        <meta name='description' content='Terms of Service for Command Tactical Training' />
      </Head>
      <Typography variant='h2' component='h1' gutterBottom>
        Terms of Service
      </Typography>
      <p>Terms of Service displayed here...</p>
    </>
  )
}

export default Terms
