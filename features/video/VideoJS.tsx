import * as React from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-playlist'
import { simulationPlaylist } from './playlist'

interface VideoJSProps {
  options: videojs.PlayerOptions
  onReady: any
}

const VideoJS = (props: VideoJSProps) => {
  const videoRef = React.useRef(null)
  const playerRef = React.useRef(null)
  const { options, onReady } = props

  const demoPlaylist = simulationPlaylist({
    category: 'sfm',
    id: 23,
    approach: 1
  })

  React.useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current
      if (!videoElement) return
      const player = (playerRef.current = videojs(videoElement, options, () => {
        console.log('player is ready')
        onReady && onReady(player)
      }))
    } else {
      // update player props here
      const player = playerRef.current
      player.autoplay(options.autoplay)
      player.playlist(demoPlaylist)
      // player.src(options.sources)
      const debugOptions = {
        debugAds: false,
        logClasses: true,
        showPlayerClasses: true,
        verbose: true,
        logType: 'table',
        showPosterStyles: false
      }
      player.playerDebugger(debugOptions)
    }
  }, [options])

  React.useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose()
        playerRef.current = null
      }
    }
  }, [])

  return (
    <div data-vjs-player>
      <video ref={videoRef} className='video-js vjs-big-play-centered' />
    </div>
  )
}

export default VideoJS
