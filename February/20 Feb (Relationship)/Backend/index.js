const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const cors=require("cors");
const mongoose=require("mongoose")
const userRouter=require("./routes/userRoute")
require("dotenv").config();
const Port=process.env.PORT || 8080;
mongoose.connect(process.env.DBCONNECTION).then(()=>{
    console.log("DB Connected")
})
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use ("/user",userRouter)
app.listen(Port,()=>{
    console.log(`server run on ${Port} port`)
})
