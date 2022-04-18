import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Image from 'next/image'
import Link from '@/components/Link'

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <Image src='/logo.svg' alt='' width='40' height='40' />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Command Tactical Training
          </Typography>
          <Button component={Link} color='inherit' href='/login'>
            {/* <Link linkAs={Button} href='/login' sx={{ color: 'white' }}> */}
            Login
            {/* </Link> */}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
