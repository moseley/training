import type { NextPage } from 'next'
import Head from 'next/head'
import Typography from '@mui/material/Typography'

const Refund: NextPage = () => {
  return (
    <>
      <Head>
        <title>Refund Policy | Command Tactical Training</title>
        <meta name='description' content='Refund Policy for Command Tactical Training' />
      </Head>
      <Typography variant='h2' component='h1' gutterBottom>
        Refund Policy
      </Typography>
      <p>Refund Policy displayed here...</p>
    </>
  )
}

export default Refund
