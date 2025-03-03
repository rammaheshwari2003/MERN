const express= require("express");
const app=express();
const cors= require("cors");
const bodyParser = require('body-parser');
const mongoose= require("mongoose");
const userRoute= require("./routes/userRoute");
require("dotenv").config();

app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB connected!!!");
})



app.use("/user", userRoute);






const Port=process.env.PORT || 8000;
app.listen(Port, ()=>{
    console.log(`server run on  port ${Port}`);
})