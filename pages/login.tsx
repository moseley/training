import { Authenticator } from '@aws-amplify/ui-react'
import { Box, Button, Typography } from '@mui/material'
import type { NextPage } from 'next'
import * as React from 'react'

const SignInPage: NextPage = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => {
        return (
          <>
            <Typography variant='body1' component='p' gutterBottom>
              Welcome
            </Typography>
            <Box sx={{ display: 'none' }}>{JSON.stringify(user, null, 2)}</Box>
            <Button onClick={signOut}>Sign out</Button>
          </>
        )
      }}
    </Authenticator>
  )
}

export default SignInPage
