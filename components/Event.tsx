import { Role, Voice, Apparatus } from '@/components/scene/FireCommand'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'

export interface IEvent {
  id: string
  title: string
  role: Role
  phraseMatch: string[]
  unitMatch?: {
    apparatus: Apparatus
    number: number
  }
  response: string
  speaker: string
  voice: Voice
}

const Event = (props: IEvent) => {
  const { id, title, role, phraseMatch, unitMatch, response, speaker, voice } = props
  return (
    <Card sx={{ maxWidth: 575, backgroundColor: '#f2f2f2' }} key={id}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          <CircularProgress size={10} /> {title}
        </Typography>
        <Typography variant='h5' component='div'>
          {speaker} ({role})
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {voice}
        </Typography>
        <Typography variant='body2'>{phraseMatch.join(', ')}</Typography>
      </CardContent>
    </Card>
  )
}

export default Event
