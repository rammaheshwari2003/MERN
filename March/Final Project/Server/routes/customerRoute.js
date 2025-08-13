const express=require("express");
const route=express.Router();

const customerController=require("../controllers/customerController");

route.get("/showproduct", customerController.ShowProduct);
route.post("/registration", customerController.Registration);
route.post("/login", customerController.Login);
route.get("/userauthenticate", customerController.userAuthenticate);    
route.get("/getdata", customerController.GetData);    
route.get("/category", customerController.Category);    
route.get("/getproduct", customerController.GetProduct);    
route.get("/product/search", customerController.SearchProduct);    
route.get("/myorder", customerController.MyOrder);    


module.exports=route;