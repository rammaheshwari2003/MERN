const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');

const fileUpload=require("./middlewares/uploadingMiddleware");

app.use(cors());
app.use(bodyParser.json());
/*
app.use((req, res, next)=>{
    console.log("First Middleware");
    req.name="Ram";
    next();
})

app.get("/home", (req, res, next)=>{
    console.log("Home page");
    console.log(req.name);
    res.send("Home page")
    next();
})
app.get("/service", (req, res, next)=>{
    console.log("service page");
    res.send("service page")
    // next();
})
app.get("/about", (req, res,next)=>{
    console.log("about page");
    res.send("about page")
    // next();
})

app.use((req, res)=>{
        console.log("End Middleware")
})
        */


app.get("/home",fileUpload, (req, res)=>{
    console.log("File image uploade");
    console.log(req.name);
    res.send("Home page")
})


app.listen(8000, (req, res)=>{
    console.log("Server run on 8000 port");
})