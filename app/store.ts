import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import authenticationReducer from '@/features/authentication/authenticationSlice'
import micReducer from '@/features/mic/micSlice'
import textToSpeechReducer from '@/features/textToSpeech/textToSpeechSlice'
import videoReducer from '@/features/video/videoSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      authentication: authenticationReducer,
      textToSpeech: textToSpeechReducer,
      mic: micReducer,
      video: videoReducer
    }
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

export default store
