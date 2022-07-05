import React from 'react'
import { useEffect } from 'react'
import WorkoutDetails from '../components/WorkOutDetails'
import WorkoutForm from '../components/WorkoutsForm'
import { useWorkoutsContext } from '../hooks/useWorkoutContextHook'
const Home = () => {

    const {workouts, dispatch} = useWorkoutsContext()
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()
            console.log(json)

            if(response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: json.message})
            }
        }

        fetchWorkouts()
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                   <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home