import { GuestAuth } from '@/features/authentication/Authentication'
import Annoucement from '@/components/Announcement'
import { annoucements } from '@/lib/announcements'
import type { NextPage } from 'next'
import Typography from '@mui/material/Typography'
import * as React from 'react'

const Demo: NextPage = () => {
  return (
    <GuestAuth>
      <Typography variant='h2' component='h1' gutterBottom>
        Demo
      </Typography>
      {annoucements.map((a) => (
        <Annoucement key={a.id} {...a} />
      ))}
    </GuestAuth>
  )
}

export default Demo
