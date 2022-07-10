import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type IWorkout ={
    createdAt: Date
    load: Number
    reps: Number
    title: String
    updatedAt: Date
    __v: Number
    _id: String
}

type WorkOutsObject = {
    workouts: IWorkout[]
}
const initialState: WorkOutsObject = {
    workouts: []
}


export const workoutSlice = createSlice({
    name: "workouts",
    initialState,
    reducers: {
        setWorkouts: (state, action: PayloadAction<IWorkout[]>) => {
            state.workouts = action.payload
        },
        createWorkout: (state, action:PayloadAction<IWorkout>) => {
            state.workouts = [ action.payload, ...state.workouts]
        },
        deleteWorkout: (state, action:PayloadAction<IWorkout>) => {
           state.workouts = state.workouts.filter((workout: IWorkout) => workout._id !== action.payload._id)
        }
    },
  
})

export const {setWorkouts, createWorkout, deleteWorkout} = workoutSlice.actions
export default workoutSlice.reducer