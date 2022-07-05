const express = require('express')
const {
    createWorkout, 
    getAllWorkouts, 
    getWorkout,
    updateWork,
    deleteWorkout
} = require('../controllers/WorkoutControllers')
const router = express.Router()

router.get('/', getAllWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.patch('/:id',updateWork)

router.delete('/:id',deleteWorkout)

module.exports = router