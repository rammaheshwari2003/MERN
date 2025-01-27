const express=require('express')
const app=express()
const bodyParser = require('body-parser')
const stuRoute=require('./route/stuRoute')


const mongoose=require('mongoose')
const cors=require('cors')
mongoose.connect('mongodb://127.0.0.1:27017/mydb').then(()=>{
    console.log('Database Connected')
})
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/students',stuRoute)
app.listen(8080,()=>{
    console.log('Server Started')
})



    