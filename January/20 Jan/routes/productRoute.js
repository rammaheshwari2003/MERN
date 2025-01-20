const express=require("express");
const route=express.Router();

route.get("/location", (req, res)=>{
    res.send("Product Location");
})

route.get("/sales", (req, res)=>{
    res.send("Product Sales");
})

route.get("/stock", (req, res)=>{
    res.send("Product Stocks");
})

route.get("/price", (req, res)=>{
    res.send("Product Prices");
})


module.exports=route;