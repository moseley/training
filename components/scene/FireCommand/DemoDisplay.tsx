import { Box, Button, Stack, TextField } from '@mui/material'
import Video from './Video'
import * as React from 'react'

interface PlaylistItem {
  id: number
  videos: string[]
  loopLast: boolean
}

const playlists: PlaylistItem[] = [
  { id: 1, videos: ['intro'], loopLast: false },
  { id: 2, videos: ['approach', 'loop'], loopLast: true },
  { id: 3, videos: ['bravo', 'charlie', 'delta', 'alpha', 'loop'], loopLast: true },
  { id: 4, videos: ['loop'], loopLast: true }
]

const DemoDisplay = () => {
  const [currentPlaylist, setCurrentPlaylist] = React.useState<PlaylistItem | null>(null)
  const [command, setCommand] = React.useState('')
  const [currCommand, setCurrCommand] = React.useState('')
  const [activeSpeech, setActiveSpeech] = React.useState('')

  React.useEffect(() => {
    const item = playlists.find((i) => i.id === 1)
    if (item) {
      setCurrentPlaylist(item)
    }
  }, [])

  const handleCommandCompletion = () => {
    const newCommand = command
    setCurrCommand(newCommand)
    setCommand('')
  }

  return (
    <Stack direction='column' spacing={2}>
      {currentPlaylist && <Video playlist={currentPlaylist?.videos} loop={currentPlaylist?.loopLast} />}
      <form onSubmit={handleCommandCompletion}>
        <TextField
          id='command'
          label='Command'
          variant='outlined'
          onChange={(e) => setCommand(e.target.value)}
          value={command}
          fullWidth
        />
        <Button type='submit'>Submit</Button>
        {activeSpeech && (
          <Box border={1} borderRadius={5} borderColor={'#e1e1e1'} bgcolor={'#cecece'}>
            {activeSpeech}
          </Box>
        )}
      </form>
    </Stack>
  )
}

export default DemoDisplay
