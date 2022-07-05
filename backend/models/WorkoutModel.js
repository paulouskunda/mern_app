const mongoonse = require("mongoose") 

const Schema = mongoonse.Schema

const workOutSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    reps: {
        type:Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoonse.model('Workout', workOutSchema)