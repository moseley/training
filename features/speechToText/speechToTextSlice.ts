import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { AppState, AppThunk } from '../../app/store'

type WebsocketStatuses = 'idle' | 'connecting' | 'open' | 'closing' | 'closed'

export interface SpeechToTextState {
  socketUrl: string
  partial: string
  transcription: string
  micEnabled: boolean
  micAvailable: boolean
  micRecording: boolean
  status: WebsocketStatuses
}

const initialState: SpeechToTextState = {
  socketUrl: '',
  partial: '',
  transcription: '',
  micEnabled: false,
  micAvailable: false,
  micRecording: false,
  status: 'idle'
}

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount: number) => {
//     const response = await fetchCount(amount)
//     // The value we return becomes the `fulfilled` action payload
//     return response.data
//   }
// )

export const speechToTextSlice = createSlice({
  name: 'speechToText',
  initialState,
  reducers: {
    updateSocketUrl: (state, action: PayloadAction<string>) => {
      state.socketUrl = action.payload
    },
    updateStatus: (state, action: PayloadAction<WebsocketStatuses>) => {
      state.status = action.payload
    },
    toggleMicEnabled: (state) => {
      state.micEnabled = !state.micEnabled
    },
    toggleMicAvailable: (state) => {
      state.micAvailable = !state.micAvailable
    },
    toggleMicRecording: (state) => {
      state.micRecording = !state.micRecording
    }
    // increment: state => {
    //   state.value += 1
    // },
    // decrement: state => {
    //   state.value -= 1
    // },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // }
  }
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading'
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle'
  //       state.value += action.payload
  //     })
  // }
})

// export const { increment, decrement, incrementByAmount } =
//   speechToTextSlice.actions

// export const selectCount = (state: AppState) => state.counter.value

// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState())
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount))
//     }
//   }

export default speechToTextSlice.reducer
