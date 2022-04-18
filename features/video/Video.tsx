import { Box } from '@mui/material'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Player from './Player'
import Stage from './Stage'
import { selectDisplay, start } from './videoSlice'

const Video = () => {
  const dispatch = useAppDispatch()
  const display = useAppSelector(selectDisplay)

  const startVideo = () => {
    dispatch(start())
  }

  return (
    <Stage>
      <Box sx={{ position: 'relative' }}>
        <>
          {display ? (
            <Player />
          ) : (
            <Image
              src='/black1080p.png'
              alt=''
              width={1920}
              height={1080}
              layout='responsive'
            />
          )}
        </>
      </Box>
    </Stage>
  )
}
export default Video
