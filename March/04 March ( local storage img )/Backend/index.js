const express= require("express");
const app=express(); 
const cors= require("cors");
const bodyParser = require('body-parser');
const mongoose= require("mongoose");
const empRoute= require("./routes/empRoute");
require("dotenv").config();

app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json()); 
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB connected!!!");
})



app.use("/employee", empRoute);






const Port=process.env.PORT || 8000;
app.listen(Port, ()=>{
    console.log(`server run on  port ${Port}`);
})
