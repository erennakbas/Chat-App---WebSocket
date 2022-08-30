import { configureStore } from '@reduxjs/toolkit'
import socketReducer from '../features/socketSlice'
import roomReducer from '../features/roomSlice'
import { getDefaultMiddleware } from '@reduxjs/toolkit'
export const store = configureStore({
  reducer: {socketReducer, roomReducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})