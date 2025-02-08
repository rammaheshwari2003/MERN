const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const stuRoutes=require("./routes/stuRoutes")
const cors=require("cors")
mongoose.connect('mongodb://127.0.0.1:27017/Ramstudent').then(()=>{
    console.log("db connected")
})
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use ("/students",stuRoutes)
app.listen(3000,()=>{
    console.log("server started")
})
