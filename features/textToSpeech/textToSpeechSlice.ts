import type { AppState, AppThunk } from '@/app/store'
import { TextToSpeechOutput } from '@aws-amplify/predictions'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchSpeech, FetchSpeechProps } from './textToSpeechAPI'

export type Voice =
  | 'Joanna'
  | 'Kendra'
  | 'Kimberly'
  | 'Salli'
  | 'Joey'
  | 'Matthew'
  | 'Geraint'
  | 'Russell'
  | 'Brian'

export interface TextToSpeechState {
  text: string
  voice: Voice
  speech: TextToSpeechOutput | null
  status: 'idle' | 'ready' | 'loading' | 'failed'
}

const initialState: TextToSpeechState = {
  text: '',
  voice: 'Joanna',
  speech: null,
  status: 'idle'
}

export const fetchSpeechAsync = createAsyncThunk(
  'textToSpeech/fetchSpeech',
  async ({ text, voice }: FetchSpeechProps) => {
    const response = await fetchSpeech({ text, voice })
    console.log(response)
    return response.data
  }
)

export const textToSpeechSlice = createSlice({
  name: 'textToSpeech',
  initialState,
  reducers: {
    setText: (
      state,
      action: PayloadAction<{ text: string; voice?: Voice }>
    ) => {
      state.text = action.payload.text
      if (action.payload.voice) {
        state.voice = action.payload.voice
      }
    },
    clear: state => {
      state = initialState
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSpeechAsync.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchSpeechAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.speech = action.payload
      })
      .addCase(fetchSpeechAsync.rejected, state => {
        state.status = 'failed'
        state.speech = null
      })
  }
})

export const { setText, clear } = textToSpeechSlice.actions
export const selectText = (state: AppState) => state.textToSpeech.text
export const selectVoice = (state: AppState) => state.textToSpeech.voice
export const selectStatus = (state: AppState) => state.textToSpeech.status
export const selectSpeech = (state: AppState) => state.textToSpeech.speech

export const generateSpeech = (): AppThunk => (dispatch, getState) => {
  const text = selectText(getState())
  if (text !== '') {
    const voice = selectVoice(getState())
    dispatch(fetchSpeechAsync({ text, voice }))
  }
}

export default textToSpeechSlice.reducer
