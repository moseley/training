import { useAppDispatch, useAppSelector } from '@/app/hooks'
import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material'
import * as React from 'react'
import {
  generateSpeech,
  selectSpeech,
  selectStatus,
  selectText,
  selectVoice,
  setText,
  Voice
} from './textToSpeechSlice'

const voices = [
  'Joanna',
  'Kendra',
  'Kimberly',
  'Salli',
  'Joey',
  'Matthew',
  'Geraint',
  'Russell',
  'Brian'
]

const Panel = () => {
  const dispatch = useAppDispatch()
  const text = useAppSelector(selectText)
  const voice = useAppSelector(selectVoice)
  const status = useAppSelector(selectStatus)
  const speech = useAppSelector(selectSpeech)

  const [panelText, setPanelText] = React.useState<string>('')
  const [panelVoice, setPanelVoice] = React.useState<Voice>('Joanna')

  const updateText = event => {
    setPanelText(event.target.value)
  }

  const updateVoice = event => {
    setPanelVoice(event.target.value)
  }

  const submitForm = () => {
    dispatch(setText({ text: panelText, voice: panelVoice }))
  }

  React.useEffect(() => {
    if (text !== '') {
      dispatch(generateSpeech())
    }
  }, [text])

  React.useEffect(() => {
    if (speech) {
      console.log(JSON.stringify(speech, null, 2))
    }
  }, [speech])

  return (
    <>
      <Card sx={{ maxWidth: 375, textAlign: 'left', marginBottom: 10 }}>
        <CardContent>
          <Typography variant='body2'>Text: {text}</Typography>
          <Typography variant='body2'>Voice: {voice}</Typography>
          <Typography variant='body2'>Status: {status}</Typography>
        </CardContent>
      </Card>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='text'
            name='text'
            label='Input Text'
            fullWidth
            variant='standard'
            onChange={updateText}
            value={panelText}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Voice</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={panelVoice}
              label='Voice'
              onChange={updateVoice}>
              {voices.map(voiceOption => (
                <MenuItem key={voiceOption} value={voiceOption}>
                  {voiceOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={submitForm}>Submit Text</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Panel
