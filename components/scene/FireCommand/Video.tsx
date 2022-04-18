import { Box, Typography } from '@mui/material'

const Video = ({ playlist, loop }: { playlist?: string[]; loop: boolean }) => {
  return (
    <Box sx={{ backgroundColor: 'black', color: 'white', width: '100%', height: 0, paddingBottom: '56.25%' }}>
      {playlist && (
        <>
          <Typography>{playlist.join(', ')}</Typography>
          <Typography>{loop && '[loop]'}</Typography>
        </>
      )}
    </Box>
  )
}
export default Video
