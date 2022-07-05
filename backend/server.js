require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workout')
const mongoonse = require('mongoose')
const app = express()

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts',workoutRoutes)

mongoonse.connect(process.env.MONGO_DATABASE_LINK)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("connected to db and listening on port ",process.env.PORT )
    })
})
.catch((error) => {
    console.log(error)
})

