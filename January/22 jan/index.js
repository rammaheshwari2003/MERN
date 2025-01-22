const express=require("express");
const app=express();
const mongoose=require("mongoose");
const collegeRoute=require("./routes/collegeRoute");


mongoose.connect("mongodb://localhost:27017");

app.set("view engine", "ejs");
app.use("/college", collegeRoute);




app.listen(8000, ()=>{
    console.log("Server run on 8000 Port");
})