const express=require("express");
const route=express.Router();

route.get("/home", (req, res)=>{
    res.send("This is Employee home page");
})

route.get("/about", (req, res)=>{
    res.send("This is Employee About page");
})

route.get("/dept", (req, res)=>{
    res.send("Employee Department ");
})

route.get("/salary", (req, res)=>{
    res.send("Employee Salary");
})


module.exports=route;