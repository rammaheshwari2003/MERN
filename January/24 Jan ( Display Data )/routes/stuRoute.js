const express=require("express");
const route=express.Router();

const stuController=require("../controller/stuController");

route.get("/home", stuController.home)
route.get("/insert", stuController.insert)
route.get("/display", stuController.display)
route.post("/save", stuController.save)




module.exports=route;