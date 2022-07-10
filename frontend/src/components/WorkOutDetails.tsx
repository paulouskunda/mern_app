import React, { ReactElement } from "react"
import type { RootState } from '../app/store'
import { setWorkouts } from "../redux/slices/WorkoutSlice"
import { useSelector, useDispatch } from 'react-redux'

// import { useWorkoutsContext } from "../hooks/useWorkoutContextHook"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
interface IWorkout {
    _id: String
    title:String,
    reps:Number,
    load:Number,
    createdAt: Date
}

const WorkoutDetails: React.FC<{workout: IWorkout}> = ({workout}): ReactElement => {
    const workouts = useSelector((state: RootState) => state.workouts)
    const dispatch = useDispatch()

      const handleDelete = async ()=> {
        const  response = await fetch('/api/workouts/'+workout._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if(response.ok){
            // dispatch({type: 'DELETE_WORKOUT', payload: json.message})
        }
    }
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            {/* <p>{workout.load}</p> */}
            {/* <p><strong>Number of reps: </strong>{workout.reps}</p> */}
            <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
            <span onClick={handleDelete} className="material-symbols-outlined">delete</span>
        </div>
    )
}

export default WorkoutDetails