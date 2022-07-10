import React, { useState } from "react"
import type { RootState } from "../app/store"
import { createWorkout } from "../redux/slices/WorkoutSlice"
import { useSelector, useDispatch } from 'react-redux'

// import { useWorkoutsContext } from "../hooks/useWorkoutContextHook"

const WorkoutForm = () => {
    const workouts = useSelector((state: RootState) => state.workouts)
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const workout = {title, load, reps}

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const json = await response.json()
        console.log(response)
        if(!response.ok){
            console.log("Json error ",json.message)
            setError(json.message.errorMessage)
            setEmptyFields(json.message.emptyFields)
        }

        if(response.ok){
            setTitle('')
            setReps('')
            setLoad('')
            setError(null)
            setEmptyFields([])
            console.log('New workout created', json)
            dispatch(createWorkout(json.message))
        }
    }

    return (
            <form className="create" onSubmit={handleSubmit}>
                <h3>Add a New Workout</h3>

                <label>Excerise Title</label>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    // className={emptyFields.includes('title') ? 'error'}
                    // className={emptyFields.includes('title') ?  'error' : ''}
                />

                <label>Load (in KG)</label>
                <input
                    type="number"
                    onChange={(e) => setLoad(e.target.value)}
                    value={load}
                    // className={emptyFields.includes('load') ?  'error' : ''}
                />

                <label>Reps:</label>
                <input
                    type="number"
                    onChange={(e) => setReps(e.target.value)}
                    value={reps}
                    // className={emptyFields.includes('reps') ?  'error' : ''}

                />

                <button>Add Workout</button>
                {error && <div className="error">{error}</div>}
            </form>
    )
}

export default WorkoutForm