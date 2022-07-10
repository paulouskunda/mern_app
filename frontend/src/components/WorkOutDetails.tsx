import React, { ReactElement } from "react"
import type { RootState } from '../app/store'
import { deleteWorkout } from "../redux/slices/WorkoutSlice"
import { useSelector, useDispatch } from 'react-redux'

// import { useWorkoutsContext } from "../hooks/useWorkoutContextHook"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
type IWorkout ={
    createdAt: Date
    load: Number
    reps: Number
    title: String
    updatedAt: Date
    __v: Number
    _id: String
}

const WorkoutDetails: React.FC<{workout: IWorkout}> = ({workout}) => {
    const workouts = useSelector((state: RootState) => state.workouts)
    const dispatch = useDispatch()

      const handleDelete = async ()=> {
        const  response = await fetch('/api/workouts/'+workout._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if(response.ok){
            console.log(`Deleted ${json.message}`)
            dispatch(deleteWorkout(json.message))
        }
    }
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p>Loads: {workout.load.toString()}</p>
            <p><strong>Number of reps: </strong>{workout.reps.toString()}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
            <span onClick={handleDelete} className="material-symbols-outlined">delete</span>
        </div>
    )
}

export default WorkoutDetails