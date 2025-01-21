const express=require("express");
const app=express();

const stuRoute=require("./routes/stuRoute");

app.set("view engine", "ejs");
app.use("/students", stuRoute);




app.listen(8500, ()=>{
    console.log("Server run on 8500 Port");
})