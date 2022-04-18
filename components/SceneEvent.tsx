import Card from '@/components/Card'
import { SceneEvent, Voice, Role } from '@/components/scene/FireCommand'

const SceneEventComponent = (item: SceneEvent) => {
  const { role, tts, response, voice } = item

  return (
    <Card
      heading={tts ? 'Text-to-Speech' : 'Waiting for Command'}
      title={role}
      subtitle={voice}
      copy={tts ? tts : response}
    />
  )
}

export default SceneEventComponent
