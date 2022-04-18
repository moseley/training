import { VideoJsPlayerOptions } from 'video.js'

const options: VideoJsPlayerOptions = {
  // sources: [
  //   {
  //     src: 'https://comtac.s3-us-west-2.amazonaws.com/sfm23/intro/playlist.m3u8',
  //     // src: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
  //     type: 'application/x-mpegURL'
  //   },
  //   {
  //     src: 'https://comtac.s3-us-west-2.amazonaws.com/sfm23/intro/intro.mp4',
  //     type: 'video/mp4'
  //   }
  // ],
  autoplay: false,
  controls: true,
  fluid: true,
  aspectRatio: '16:9',
  preload: 'auto',
  controlBar: {
    playToggle: false,
    volumePanel: true,
    pictureInPictureToggle: false,
    currentTimeDisplay: false,
    timeDivider: false,
    durationDisplay: false,
    progressControl: false,
    liveDisplay: false,
    seekToLive: false,
    remainingTimeDisplay: false,
    customControlSpacer: false,
    playbackRateMenuButton: false,
    chaptersButton: false,
    descriptionsButton: false,
    subsCapsButton: false,
    audioTrackButton: false,
    fullscreenToggle: true
  },
  userActions: {
    doubleClick: false
  }
}

export default options
