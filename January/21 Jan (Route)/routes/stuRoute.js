const express=require("express");
const route=express.Router();

const stuController=require("../controller/stuController");

route.get("/home", stuController.homePage);
route.get("/about", stuController.aboutPage);
route.get("/courses", stuController.coursesPage);
route.get("/fees", stuController.feesPage);

module.exports=route;
