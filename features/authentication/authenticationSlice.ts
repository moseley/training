import { AppState } from '@/app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Level = 'visitor' | 'guest' | 'member' | 'admin'

export interface AuthenticationState {
  id: string
  displayName: string
  email: string
  level: Level
  status: 'idle' | 'ready' | 'loading' | 'failed'
}

const initialState: AuthenticationState = {
  id: '',
  displayName: '',
  email: '',
  level: 'visitor',
  status: 'idle'
}

export interface UserProps {
  id: string
  displayName: string
  email: string
  level: Level
}

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserProps>) => {
      state.id = action.payload.id
      state.displayName = action.payload.displayName
      state.email = action.payload.email
      state.level = action.payload.level
    }
  }
})

export const { setUser } = authenticationSlice.actions

export const selectLevel = (state: AppState) => state.authentication.level

export default authenticationSlice.reducer
