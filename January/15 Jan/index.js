const express=require("express");
const app=express();

app.get("/", (req, res)=>{
    res.send("<h1> This is my Home Page </h1>");
})

app.get("/about", (req, res)=>{
    res.send("<h1> This is About Page </h1>");
})



app.listen(8000, ()=>{
    console.log("Server run on 8000 port");
})




