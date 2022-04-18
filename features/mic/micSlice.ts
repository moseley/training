import { createSlice } from '@reduxjs/toolkit'
import type { AppState } from '../../app/store'
// import { fetchPermission } from './micAPI'

// export const requestMicPermissionAsync = createAsyncThunk(
//   'mic/requestMicPermission',
//   async () => {
//     const response = await fetchPermission()
//     return response.data
//   }
// )

export interface MicState {
  permissionGranted: boolean
  status: 'disabled' | 'idle' | 'recording'
}

const initialState: MicState = {
  permissionGranted: false,
  status: 'disabled'
}

export const micSlice = createSlice({
  name: 'mic',
  initialState,
  reducers: {
    grantPermission: state => {
      state.permissionGranted = true
    },
    radioOpen: state => {
      state.status = 'idle'
    },
    radioClose: state => {
      state.status = 'disabled'
    },
    recordingBegin: state => {
      state.status = 'recording'
    },
    recordingEnd: state => {
      state.status = 'idle'
    }
  }
})

export const {
  grantPermission,
  radioOpen,
  radioClose,
  recordingBegin,
  recordingEnd
} = micSlice.actions

export const selectPermission = (state: AppState) => state.mic.permissionGranted
export const selectStatus = (state: AppState) => state.mic.status

export default micSlice.reducer
