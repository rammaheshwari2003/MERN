const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyparser=require("body-parser");

const stuRouter=require("./routes/stuRoute");

// body parser
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());


mongoose.connect("mongodb://127.0.0.1:27017/StudentData").then(()=>{
    console.log("DB Connected");
})

app.set("view engine", "ejs");
app.use("/students", stuRouter);




app.listen(8000, ()=>{
    console.log("Server run on 8000 Port");
})


// npm i body-parser