interface Source {
  src: string
  type: 'video/mp4' | 'application/x-mpegURL'
}

interface PlaylistItem {
  sources: Source[]
  poster?: string
  textTracks?: string[]
}

const playlistItemFromS3 = ({
  bucket = defaultBucket,
  prefix,
  name
}: {
  bucket: string
  prefix?: string
  name: string
}) => {
  const playlistItem: PlaylistItem = {
    sources: [
      {
        src: `${bucket}/${prefix ? `${prefix}/` : ''}${name}/playlist.m3u8`,
        type: 'application/x-mpegURL'
      },
      {
        src: `${bucket}/${prefix ? `${prefix}/` : ''}${name}/${name}.mp4`,
        type: 'video/mp4'
      }
    ]
  }
}

interface SimulationPlaylistProps {
  category: string
  id: number
  approach: 1 | 2 | 3 | 4 | 5 | 6
}

const defaultBucket = 'https://comtac.s3-us-west-2.amazonaws.com'

const simulationPlaylist = ({
  category,
  id,
  approach = 1
}: SimulationPlaylistProps): PlaylistItem[] => {
  const items = [
    { prefix: `${category}/${id}/intro`, name: 'intro' },
    { prefix: `approach/${approach}`, name: approach.toString() },
    { prefix: `${category}/${id}/loop`, name: 'loop' },
    { prefix: `${category}/${id}/bravo`, name: 'bravo' },
    { prefix: `${category}/${id}/charlie`, name: 'charlie' },
    { prefix: `${category}/${id}/delta`, name: 'delta' },
    { prefix: `${category}/${id}/alpha`, name: 'alpha' },
    { prefix: `${category}/${id}/loop`, name: 'loop' }
  ]
  const playlistItems: PlaylistItem[] = items.map(item => getS3Source(item))
  return playlistItems
}

interface GetS3SourceProps {
  bucket?: string
  prefix: string
  name: string
  mp4?: boolean
}

const getS3Source = ({
  bucket = defaultBucket,
  prefix,
  name,
  mp4 = false
}: GetS3SourceProps): PlaylistItem => {
  const hlsSource: Source = {
    src: `${bucket}/${prefix}/playlist.m3u8`,
    type: 'application/x-mpegURL'
  }
  const sources = [hlsSource]
  if (mp4) {
    const mp4Source: Source = {
      src: `${bucket}/${prefix}/${name}.mp4`,
      type: 'video/mp4'
    }
    sources.push(mp4Source)
  }
  return {
    sources
  }
}

export { simulationPlaylist }
