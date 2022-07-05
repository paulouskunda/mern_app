const Workout = require('../models/WorkoutModel')
const mongoonse = require('mongoose')

const getAllWorkouts = async (req, res) => {
   const workouts = await Workout.find({}).sort({createdAt:-1})
   res.status(200).json({status: 200, message: workouts})
}


const getWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoonse.Types.ObjectId.isValid(id)){
        return res.status(400).json({status: 400, message: "No workout" }) 
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(400).json({status: 400, message: "No workout" })
    }
    
    res.status(200).json({status: 200, message: workout}) 
    
}

const createWorkout = async (req, res) => {
    //req.body
    const {title, load, reps} = req.body

    var emptyFields = []

    if(!title){
        emptyFields.push('title')
    }

    if(!load){
        emptyFields.push('load')
    }

    if(!reps){
        emptyFields.push('reps')
    }

    if(emptyFields.length > 0){
        return   res.status(400).json({status: 400, message: {
            'errorMessage': 'Please fill in all the fields',
            'emptyFields': emptyFields
        }})

    }

    try{
        const workOut = await Workout.create({title, load, reps})
        res.status(201).json({status: 201, message: workOut})

    }catch(error){
         res.status(400).json({status: 400, message: error.message})

    }
}

const deleteWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoonse.Types.ObjectId.isValid(id)){
        return res.status(400).json({status: 400, message: "No workout" }) 
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout){
        return res.status(400).json({status: 400, message: "No workout" })
    }
    res.status(200).json({status: 200, message: workout}) 
    
}


const updateWork = async (req, res) => {
    const {id} = req.params
    if(!mongoonse.Types.ObjectId.isValid(id)){
        return res.status(400).json({status: 400, message: "No workout" }) 
    }

    const workout = await Workout.findByIdAndUpdate({_id: id},
        {...req.body})
    if(!workout){
        return res.status(400).json({status: 400, message: "No workout" })
    }
    
    res.status(200).json({status: 200, message: workout})    
}


module.exports = {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWork
}

