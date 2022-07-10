import { configureStore } from '@reduxjs/toolkit'
import workoutReducer from '../redux/slices/WorkoutSlice'
export const store = configureStore({
  reducer: {
    workouts: workoutReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch