

const express = require("express");
const route = express.Router();
const UserController= require("../controllers/userController");

route.post("/insert", UserController.insert);

module.exports = route;
