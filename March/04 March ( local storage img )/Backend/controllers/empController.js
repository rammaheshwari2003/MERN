const empModel= require("../models/empModel");

const insert=async(req, res)=>{
   console.log(req.body);
   console.log(req.file);
   res.send("OK");
}



module.exports ={
    insert
}