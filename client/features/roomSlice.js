import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  room: "",
  user: "",
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRoom: (state, action) => {
      state.room = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setRoom, setUser } = roomSlice.actions;
export const selectRoom = (state) => state.roomReducer.room;
export const selectUser = (state) => state.roomReducer.user;
export default roomSlice.reducer;
