import { TextToSpeechOutput } from '@aws-amplify/predictions'
import { Voice } from './textToSpeechSlice'

export interface FetchSpeechProps {
  text: string
  voice: Voice
}

export const fetchSpeech = async ({
  text,
  voice
}: FetchSpeechProps): Promise<{ data: TextToSpeechOutput }> => {
  const response = await fetch('/api/textToSpeech', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text, voice })
  })
  const result = await response.json()
  if (response.status === 200) {
    return result
  } else {
    throw new Error(result.message)
  }
}
