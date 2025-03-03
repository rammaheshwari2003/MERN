const UserModel= require("../models/userModel");

const insert=async(req, res)=>{
    const {name,rollno, city, img}=req.body;
    const user= await UserModel.create({
        name:name,
        rollno:rollno,
        city:city,
        imgurl:img
    });
    res.send(user);
}


module.exports ={
    insert
}