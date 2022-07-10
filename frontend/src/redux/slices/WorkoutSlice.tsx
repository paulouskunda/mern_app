import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type IWorkout ={
    createdAt: String
    load: Number
    reps: Number
    title: String
    updatedAt: String
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
            console.log(`payload`)
            console.log(action.payload)
            state.workouts = action.payload
        },
    },
  
})

export const {setWorkouts} = workoutSlice.actions
export default workoutSlice.reducer