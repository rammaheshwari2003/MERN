const UserModel= require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const userRegistration=async(req, res)=>{

    try {
        const {name, email, password} =req.body;
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
         const User = await UserModel.create({
           name:name,
           email:email,
           password: hashPassword
         })
         res.status(200).send({msg:"User Registered Successfully"});
    } catch (error) {
        res.status(400).send({msg: "User Registration Failed"});
        
    }

}


const userLogin=async(req, res)=>{
    const {email, password} = req.body;
    try {
    const User= await UserModel.findOne({email:email});
     
    if (!User)
    {
        res.send("Invalid Email!!!");
    }
    const passwordMatch =  await bcrypt.compare(password, User.password);
   
    if (!passwordMatch)
    {
        res.send("Invalid Password!")
    }

    const token = await jwt.sign({id:User._id}, process.env.SECRETE_KEY, { expiresIn: '7 days' })
    console.log(token);   
//    res.send({token:token});

    res.status(200).send({msg:"User Login Successfully", token:token});  
    
   } catch (error) {
    res.status(400).send({msg: "User Login Failed"});
    
   }
}


const userAuthenticate=async(req, res)=>{
    const token = req.header("x-auth-token");
    console.log(token);

    const verify= await jwt.verify(token, process.env.SECRETE_KEY);
    console.log(verify);
    const User= await UserModel.findById(verify.id).select("-password");
    
    res.send(User);

}
module.exports ={
    userRegistration,
    userLogin,
    userAuthenticate
}