import { Button, Divider, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'
import * as React from 'react'

export type Role =
  | 'Dispatch Center'
  | 'Attack'
  | 'Salvage'
  | 'Ventilation'
  | 'Exposure'
  | 'RIC'
  | 'Medical'
  | 'Chief'
  | 'Unit'
export type Voice = 'Joanna' | 'Kendra' | 'Kimberly' | 'Salli' | 'Joey' | 'Matthew' | 'Geraint' | 'Russell' | 'Brian'
export type EventType = 'Radio Announcement' | 'Wait for Command'
export type Apparatus = 'Engine' | 'Truck'

const dispatchVoice: Voice = 'Joanna'
const chiefVoice: Voice = 'Brian'
const engine2Voice: Voice = 'Joey'
const truck1Voice: Voice = 'Kendra'
const engine3Voice: Voice = 'Geraint'

export interface Event {
  id: number
  isActive: boolean
  title: string
  matchAny?: string[]
  matchApparatus?: Apparatus
  matchUnit?: number
  response?: string
  voice?: Voice
}

export interface SceneEvent {
  id: string
  eventType: EventType
  title: string
  role: Role
  tts?: string
  phraseMatch?: string[]
  unitMatch?: {
    apparatus: Apparatus
    number: number
  }
  response?: string
  addCommand?: boolean
  voice?: Voice
}

const firstAlarm =
  'structure fire engine 1, engine 2, engine 3, truck 1, truck 2, battalion 1 623 luna park. repeating, structure fire engine 1, engine 2, engine 3, truck 1, truck 2, battalion 1 623 luna park. caller states smoke in the building.'

const scene: SceneEvent[] = [
  {
    id: '1',
    eventType: 'Radio Announcement',
    title: 'Dispatch Center',
    role: 'Dispatch Center',
    tts: firstAlarm,
    voice: dispatchVoice
  },
  {
    id: '2',
    eventType: 'Wait for Command',
    title: 'Dispatch Center Waiting for Additional Alarms',
    role: 'Dispatch Center',
    phraseMatch: [
      'second alarm',
      '2nd alarm',
      'alarm two',
      'alarm 2',
      'second box',
      '2nd box',
      'box two',
      'box 2',
      'commercial alarm',
      'third alarm',
      '3rd alarm',
      'alarm three',
      'alarm 3',
      'third box',
      '3rd box',
      'box three',
      'box 3'
    ],
    response: 'dispatch to luna command, additional alarm requested.',
    voice: dispatchVoice
  },
  {
    id: '3',
    eventType: 'Wait for Command',
    title: 'Dispatch Center Waiting for Initial Report',
    role: 'Dispatch Center',
    phraseMatch: [
      'feet',
      'story',
      'rise',
      'residential',
      'commercial',
      'industrial',
      'yard',
      'family',
      'dwelling',
      'apartment',
      'office',
      'house',
      'warehouse',
      'tiltup',
      'retail',
      'small',
      'medium',
      'large'
    ],
    response: 'dispatch copies, [COMMAND_WITH_PROPER_PRONOUNS]',
    voice: dispatchVoice
  },
  {
    id: '4',
    eventType: 'Wait for Command',
    title: 'Dispatch Center Waiting for 360 Assessment',
    role: 'Dispatch Center',
    phraseMatch: [
      'room',
      'content',
      'attic',
      'basement',
      'structure',
      'fire',
      'bidirectional',
      'bi-directional',
      'unidirectional',
      'uni-directional',
      'survivability',
      'profile',
      'exhaust',
      'intake',
      'positive',
      'marginal',
      'negative',
      'entry',
      'egress'
    ],
    response: 'dispatch copies, [COMMAND_WITH_PROPER_PRONOUNS]',
    voice: dispatchVoice
  },
  {
    id: '5',
    eventType: 'Radio Announcement',
    title: 'Engine 2 Arrival',
    role: 'Unit',
    tts: 'engine 2 on scene staged requesting an assignment',
    voice: engine2Voice
  },
  {
    id: '6',
    eventType: 'Wait for Command',
    title: 'Engine 2 Waiting for Assignment',
    role: 'Unit',
    unitMatch: { apparatus: 'Engine', number: 2 },
    response: 'luna command from engine 2. I copy I am [GROUP_ASSIGNMENT]',
    voice: engine2Voice
  },
  {
    id: '7',
    eventType: 'Radio Announcement',
    title: 'Truck 1 Arrival',
    role: 'Unit',
    tts: 'truck 1 on scene staged requesting an assignment',
    voice: truck1Voice
  },
  {
    id: '8',
    eventType: 'Wait for Command',
    title: 'Truck 1 Waiting for Assignment',
    role: 'Unit',
    unitMatch: { apparatus: 'Truck', number: 1 },
    response: 'luna command from truck 1. I copy I am [GROUP_ASSIGNMENT]',
    voice: truck1Voice
  },
  {
    id: '9',
    eventType: 'Radio Announcement',
    title: 'Engine 3 Arrival',
    role: 'Unit',
    tts: 'engine 3 on scene staged requesting an assignment',
    voice: truck1Voice
  },
  {
    id: '10',
    eventType: 'Wait for Command',
    title: 'Engine 3 Waiting for Assignment',
    role: 'Unit',
    unitMatch: { apparatus: 'Engine', number: 3 },
    response: 'luna command from engine 3. I copy I am [GROUP_ASSIGNMENT]',
    voice: engine3Voice
  },
  {
    id: '11',
    eventType: 'Radio Announcement',
    title: 'Incident Within Incident',
    role: 'Unit',
    tts: 'command from ventilation. firefighter has been injured on a ground ladder that has slipped, he rode the ladder to the ground and hit his head. He is unconscious.',
    voice: truck1Voice
  },
  {
    id: '12',
    eventType: 'Wait for Command',
    title: 'Incident Within Incident Response',
    role: 'Unit',
    response: 'ventilation to luna command, [COMMAND_WITH_PROPER_PRONOUNS]',
    voice: truck1Voice
  },
  {
    id: '13',
    eventType: 'Radio Announcement',
    title: 'Incoming Officer Arrival',
    role: 'Chief',
    tts: 'give me a transfer of command report',
    voice: chiefVoice
  },
  {
    id: '14',
    eventType: 'Wait for Command',
    title: 'Incoming Officer Response',
    role: 'Chief',
    response: 'copy, i will assume command.',
    voice: chiefVoice
  }
]

const getWaitingCommand = (data: SceneEvent) => {
  let copy = ''
  if (data.unitMatch && data.unitMatch.apparatus && data.unitMatch.number) {
    copy = `Waiting for command with '${data.unitMatch.apparatus}' and number '${data.unitMatch.number}'`
  } else if (data.phraseMatch && data.phraseMatch.length > 0) {
    copy = `Waiting for command with any of these phrases: ${data.phraseMatch.join(', ')}`
  } else {
    copy = 'Waiting for any command'
  }
  return copy
}

const RadioAnnouncementCard = (data: SceneEvent) => {
  return (
    <Card sx={{ maxWidth: 575 }} key={data.id}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Radio Announcement
        </Typography>
        <Typography variant='h5' component='div'>
          {data.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {data.voice}
        </Typography>
        <Typography variant='body2'>{data.tts}</Typography>
      </CardContent>
    </Card>
  )
}

const WaitForCommandCard = (data: SceneEvent) => {
  return (
    <Card sx={{ maxWidth: 575, backgroundColor: '#f2f2f2' }} key={data.id}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          <CircularProgress size={10} /> Wait for Command
        </Typography>
        <Typography variant='h5' component='div'>
          {data.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {data.voice}
        </Typography>
        <Typography variant='body2'>{getWaitingCommand(data)}</Typography>
      </CardContent>
    </Card>
  )
}

const FireCommand = () => {
  return (
    <Stack direction='column' divider={<Divider orientation='vertical' flexItem />} spacing={2}>
      {scene.map((item) =>
        item.eventType === 'Radio Announcement' ? (
          <RadioAnnouncementCard key={item.id} {...item} />
        ) : (
          <WaitForCommandCard key={item.id} {...item} />
        )
      )}
    </Stack>
  )
}

export default FireCommand
