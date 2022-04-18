import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@/components/Link'
import { useRouter } from 'next/router'

const pages = [
  { slug: '/', title: 'Home' },
  { slug: '/privacy', title: 'Privacy Policy' },
  { slug: '/terms', title: 'Terms of Service' },
  { slug: '/refund', title: 'Refund Policy' }
]

const activeLinkStyle = {
  color: 'text.secondary',
  textDecoration: 'none',
  '&:hover': {
    color: 'text.primary'
  }
}

const linkStyle = {
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline'
  }
}

const Footer = () => {
  const router = useRouter()

  return (
    <Box
      component='footer'
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800])
      }}>
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
            m: 1
          }}>
          <Typography variant='body2' color='text.secondary'>
            {'Copyright © Command Tactical Training'} {new Date().getFullYear()}
            {'.'}
          </Typography>
          <Box sx={{ display: 'flex', typography: 'body2', color: 'text.secondary' }}>
            {pages.map((page) => (
              <Box key={page.slug} mx={1}>
                <Link href={page.slug} sx={router.asPath === page.slug ? activeLinkStyle : linkStyle}>
                  {page.title}
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
export default Footer
