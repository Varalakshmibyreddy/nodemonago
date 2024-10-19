const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

const PORT = process.env.PORT || 5000

dotEnv.config()

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("mongoDB connected Successfully")
})
.catch((error)=>{
    console.log(`${error}`)
})

app.listen(PORT, () =>{
    console.log(`Server Started and running at ${PORT}`)
})