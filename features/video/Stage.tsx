import Box from '@mui/material/Box'
import * as React from 'react'

const Stage = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        py: 0,
        px: 2,
        mt: 'auto',
        backgroundColor: theme => theme.palette.grey[900],
        position: 'relative'
      }}>
      <Box
        sx={{
          width: '100%',
          position: 'relative'
        }}>
        <Box
          sx={{
            margin: '0 auto',
            width: '100%',
            textAlign: 'center',
            overflow: 'hidden',
            maxWidth: '125vh',
            position: 'relative'
          }}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default Stage
