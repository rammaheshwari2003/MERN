const express = require("express");
const route=express.Router();

const adminController=require("../controllers/adminController");

route.post("/adminlogin", adminController.AdminLogin);
route.post("/addproduct", adminController.AddProduct);

module.exports=route;