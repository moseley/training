import { IEvent } from '@/components/Event'

const dispatchVoice = 'Joanna'
const chiefVoice = 'Brian'
const engine2Voice = 'Joey'
const truck1Voice = 'Kendra'
const engine3Voice = 'Geraint'

const additionalAlarmPhrases = [
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
]

export const annoucements: IEvent[] = [
  {
    id: 'e1',
    title: 'Dispatch Center Waiting for Additional Alarms',
    role: 'Dispatch Center',
    phraseMatch: additionalAlarmPhrases,
    unitMatch: {
      apparatus: 'Engine',
      number: 2
    },
    response: 'dispatch to luna command, additional alarm requested.',
    speaker: 'Dispatch',
    voice: dispatchVoice
  }
]
