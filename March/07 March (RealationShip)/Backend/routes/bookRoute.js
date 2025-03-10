const express = require("express");
const route = express.Router();
const bookController= require("../controllers/bookController");



route.post("/insert",bookController.insert);
route.get("/display", bookController.display);

module.exports = route;
