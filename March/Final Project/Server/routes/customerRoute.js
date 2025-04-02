const express=require("express");
const route=express.Router();

const customerController=require("../controllers/customerController");

route.get("/showproduct", customerController.ShowProduct);


module.exports=route;