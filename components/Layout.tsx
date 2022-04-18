import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import CssBaseline from '@mui/material/CssBaseline'

interface LayoutProps {
  title?: string
  description?: string
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}>
        <Container component='main' sx={{ mt: 8, mb: 2 }} maxWidth='lg'>
          <>{children}</>
        </Container>
        <Footer />
      </Box>
    </>
  )
}

export default Layout
