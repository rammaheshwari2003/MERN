const UserModule=require("../models/userModule");
const ProfileModule=require("../models/profileModule");

const dataInsert=async(req,res)=>{
   const {username,email, firstname, lastname}=req.body;
   const User=await UserModule.create({
    username:username,
    email:email
   })
   const Profile=await ProfileModule.create({
    firstname:firstname,
    lastname:lastname,
    userId:User._id
   })
   res.send("Data Save");
}

const display=async(req,res)=>{
    const Data=await ProfileModule.find().populate("userId");
    res.send(Data);
}

module.exports={
    dataInsert,
    display
}