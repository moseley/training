import type { Role, Voice } from '@/components/scene/FireCommand'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export interface IAnnoucement {
  id: string
  title: string
  role: Role
  tts: string
  speaker: string
  voice: Voice
}

const Announcement = (props: IAnnoucement) => {
  const { id, title, role, tts, speaker, voice } = props
  return (
    <Card sx={{ maxWidth: 575 }} key={id}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Announcement: {title}
        </Typography>
        <Typography variant='h5' component='div'>
          {speaker} ({role})
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {voice}
        </Typography>
        <Typography variant='body2'>{tts}</Typography>
      </CardContent>
    </Card>
  )
}

export default Announcement
