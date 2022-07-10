import React, { ReactElement } from 'react'
import { useEffect } from 'react'
import WorkoutDetails from '../components/WorkOutDetails'
import WorkoutForm from '../components/WorkoutsForm'
import type { RootState } from '../app/store'
import { setWorkouts } from "../redux/slices/WorkoutSlice"
import { useSelector, useDispatch } from 'react-redux'
const Home: React.FC = (): ReactElement => {

    const workouts = useSelector((state: RootState) => state.workouts)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()
            // console.log(json)

            if(response.ok){
                dispatch(setWorkouts(json.message))
               
            }
        }

        fetchWorkouts()
    }, [])
    return (
        <div className="home">
            <div className="workouts">
                Be back soon.
                {workouts.workouts && workouts.workouts.map((workout) => (
                <WorkoutDetails workout={workout} key={workout._id as string} />
                
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
    
}

// const Home: React.FC = (): ReactElement => {
//     return <div></div>
// }

export default Home