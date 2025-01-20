const express=require("express");
const route=express.Router();

route.get("/home", (req, res)=>{
    res.send("This is student home page");
})

route.get("/about", (req, res)=>{
    res.send("This is student About page");
})

route.get("/course", (req, res)=>{
    res.send("Our Courses");
})

route.get("/fees", (req, res)=>{
    res.send("This is student Fees page");
})


module.exports=route;