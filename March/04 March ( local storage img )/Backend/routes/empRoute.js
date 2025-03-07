const express = require("express");
const route = express.Router();
const empController= require("../controllers/empController");
const multer= require("multer");

const storage=multer.diskStorage({
    destination:(req,file, cb)=>{
        cb(null, "uploads/");
    },
    filename:(req,file, cb)=>{
        cb(null, Date.now()+"-"+file.originalname);
    }
})

const upload=multer({storage:storage});

route.post("/insert",upload.single("image"),empController.insert);
route.get("/display", empController.display);

module.exports = route;
