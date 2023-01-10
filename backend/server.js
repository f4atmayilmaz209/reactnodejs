const mongoose =require('mongoose')
require('dotenv').config()
const express=require('express')
const cors = require('cors')

//routes path
const workoutRoutes=require('./routes/workouts') 

//express app 
const app=express()
app.use(cors())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
    next()
})
//middleware 
app.use(express.json())
//routes
app.use('/api/workouts',workoutRoutes)

mongoose.connect(process.env.DB_URI)
    .then(()=>{
        // listen for request 
        app.listen(process.env.PORT,()=>{
            console.log(" connected to mongodb & listening on port 4000")
        })
    })
    .catch((error)=>{
        console.log(error)

    })

