const empModel= require("../models/empModel");

const insert=async(req, res)=>{
    const {empid, name,designation,salary}=req.body;
    const {imgs}=req.file.filename;
    const EMP= await empModel.create({
        empid:empid, 
        name:name,
        designation:designation,
        salary:salary,
        image:imgs
    })

  res.send(EMP);

    
}

const display=async(req, res)=>{
    const data=await empModel.find();
    res.send(data);
}

module.exports ={
    insert,
    display
}