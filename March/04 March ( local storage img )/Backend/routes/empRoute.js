

const express = require("express");
const route = express.Router();
const empController= require("../controllers/empController");

route.post("/insert",empController.insert);
// route.get("/display", UserController.display);

module.exports = route;
