import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '../../app/store'

export interface VideoState {
  display: boolean
  isPlaying: boolean
  currentPlaylistId: number
}

const initialState: VideoState = {
  display: true,
  isPlaying: false,
  currentPlaylistId: 0
}

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    start: state => {
      state.display = true
      state.isPlaying = true
      state.currentPlaylistId = 1
    },
    advance: state => {
      state.currentPlaylistId += 1
    },
    hide: state => {
      state.display = false
      state.isPlaying = false
    },
    show: state => {
      state.display = true
      state.isPlaying = true
      state.currentPlaylistId += 1
    }
  }
})

export const { start, advance, hide, show } = videoSlice.actions

export const selectDisplay = (state: AppState) => state.video.display

export default videoSlice.reducer
