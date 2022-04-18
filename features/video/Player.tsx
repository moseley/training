import * as React from 'react'
import options from './options'
import VideoJS from './VideoJS'

const Player = () => {
  const playerRef = React.useRef(null)

  const handlePlayerReady = player => {
    playerRef.current = player
    player.on('waiting', () => {
      console.log('player is waiting')
    })
    player.on('dispose', () => {
      console.log('player will dispose')
    })
  }

  return (
    <>
      <VideoJS options={options} onReady={handlePlayerReady} />
    </>
  )
}

export default Player
