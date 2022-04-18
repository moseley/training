interface Tip {
  id: string
  items: string[]
}

const tips: Tip[] = [
  {
    id: 'Initial Report',
    items: [
      'Size of the building',
      'Height of the building',
      'Occupancy of the building',
      'Witnessed conditions',
      'Initial actions',
      'Resource needs',
      'Command designation'
    ]
  },
  {
    id: '360 Assessment Tips',
    items: [
      'Design & Construction features',
      'Entry & Egress points',
      'Conditions found',
      'Interior fire travel path',
      'Survivability profile',
      'Strategic mode'
    ]
  },
  {
    id: 'Assignment Tips',
    items: ['Rescue', 'Exposures', 'Confinement', 'Extinguishment', 'Overhaul', 'Ventilation', 'Salvage']
  },
  { id: 'Reports', items: ['CAN Report', 'PAR Report'] },
  { id: 'Response', items: ['Incident Within Incident Response'] }
]

const FireCommand = () => {
  const events = ['e1', 'e2', 'e3', 'e4', 'e5']
  const announcements = ['a1', 'a2', 'a3', 'a4']
  const tips = ['t1', 't2', 't3', 't4']
  const completedTips = []
  const playlist = []
  const loop = true
  const command = 'Engine 1 on scene of a residential'
  const activeEvents = ['e1', 'e2']
  const activeAnnouncement = 'a1'

  return tips
}

export default FireCommand
