const express = require("express");
const route=express.Router();
const multer=require("../middlewares/multer");
const adminController=require("../controllers/adminController");

route.post("/adminlogin", adminController.AdminLogin);
route.post("/addproduct", multer.array("image", 6) ,adminController.AddProduct);

module.exports=route;

