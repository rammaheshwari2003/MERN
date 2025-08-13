const express = require("express");
const route=express.Router();
const multer=require("../middlewares/multer");
const adminController=require("../controllers/adminController");

route.post("/adminlogin", adminController.AdminLogin);
route.post("/addproduct", multer.array("image", 6) ,adminController.AddProduct);
route.get("/getproduct", adminController.GetProduct);
route.get("/getproductdata", adminController.GetProductData);
route.get("/deleteproduct", adminController.DeleteProduct);
route.get("/getproductdetails", adminController.GetProductDetails);
route.post("/editproduct", adminController.EditProduct);
route.post("/changepassword", adminController.ChangePassword);

module.exports=route;

 