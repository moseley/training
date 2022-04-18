import { IAnnoucement } from '@/components/Announcement'

const dispatchVoice = 'Joanna'
const chiefVoice = 'Brian'
const engine2Voice = 'Joey'
const truck1Voice = 'Kendra'
const engine3Voice = 'Geraint'

const firstAlarm =
  'structure fire engine 1, engine 2, engine 3, truck 1, truck 2, battalion 1 623 luna park. repeating, structure fire engine 1, engine 2, engine 3, truck 1, truck 2, battalion 1 623 luna park. caller states smoke in the building.'
const incidentWithinIncident =
  'command from ventilation. firefighter has been injured on a ground ladder that has slipped, he rode the ladder to the ground and hit his head. He is unconscious.'
const transferOfCommand = 'give me a transfer of command report'
const onScene = (unit: string) => `${unit.toLowerCase()} on scene staged requesting an assignment`

export const annoucements: IAnnoucement[] = [
  {
    id: 'a1',
    title: 'First Alarm',
    role: 'Dispatch Center',
    tts: firstAlarm,
    speaker: 'Dispatch',
    voice: dispatchVoice
  },
  {
    id: 'a2',
    title: 'Engine 2 Arrival',
    role: 'Unit',
    tts: onScene('Engine 2'),
    speaker: 'Engine 2',
    voice: engine2Voice
  },
  {
    id: 'a3',
    title: 'Truck 1 Arrival',
    role: 'Unit',
    tts: onScene('Truck 1'),
    speaker: 'Truck 1',
    voice: truck1Voice
  },
  {
    id: 'a4',
    title: 'Engine 3 Arrival',
    role: 'Unit',
    tts: onScene('Engine 3'),
    speaker: 'Engine 3',
    voice: engine3Voice
  },
  {
    id: 'a5',
    title: 'Incident Within Incident',
    role: 'Unit',
    tts: incidentWithinIncident,
    speaker: 'Ventilation',
    voice: truck1Voice
  },
  {
    id: 'a6',
    title: 'Incoming Officer Arrival',
    role: 'Chief',
    tts: transferOfCommand,
    speaker: 'Chief',
    voice: chiefVoice
  }
]
