const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');

// const fileUpload=require("./middlewares/uploadingMiddleware");

app.use(cors());
app.use(bodyParser.json());


  /*
     
  app.get("/home", (req, res)=>{
        // const status=true;
        const status=false;
        if(status){
            res.status(200).send("Home Data");
        }else{
            res.status(400).send("Home page error")
        }
    })
*/  

app.get("/home", (req, res)=>{
 
    try {
        console.log("Home Data");
        throw new Error("Home page error");
        res.status(200).send("Home Perfectly run");
    } catch (error) {
        res.status(400).send({msg:"Server not connected with database"})
    }
})



app.listen(8000, (req, res)=>{
    console.log("Server run on 8000 port");
})