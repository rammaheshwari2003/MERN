const express=require("express");
const route=express.Router();

const collController=require("../controller/collController");

route.get("/home", collController.home);
route.get("/about", collController.about);
route.get("/course", collController.course);
route.get("/faculty", collController.faculty);
route.get("/contact", collController.contact);



module.exports=route;


// mongos- ODM = Object Data Modeling