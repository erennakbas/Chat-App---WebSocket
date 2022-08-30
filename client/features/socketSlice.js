import { createSlice } from '@reduxjs/toolkit'
import {io} from "socket.io-client";
const initialState = {
  socket: io.connect("http://localhost:3001")
}

export const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    setSocket: (state, action) => {
      state.socket = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSocket } = socketSlice.actions;
export const selectSocket = (state) => state.socketReducer.socket;
export default socketSlice.reducer