const productModel=require("../models/productModel");
const customerModel=require("../models/customerModel");
const orderModel=require("../models/orderModel");
const jwt = require("jsonwebtoken");

const ShowProduct=async(req, res)=>{
        const Products=await productModel.find();
        res.status(200).send(Products);
}

const Registration=async(req, res)=>{
    const {name,address,city,pincode,mobile,email,password}=req.body;
    try {
        const findCustomer=await customerModel.findOne({email});
        if(findCustomer){
            return res.status(404).send({msg: "Email Already Exist"});
        }
        const addCustomer=await customerModel.create({name,address,city,pincode,mobile,email,password});
        res.status(200).send({msg: "Registration Successfully"});
    } catch (error) {
        res.status(500).send({msg: "Server Error"});
    }
}

const Login=async(req, res)=>{
    const {email,password}=req.body;
    try {
        const findCustomer=await customerModel.findOne({email});
        if(!findCustomer){
            return res.status(404).send({msg: "Invalid Email"});
        }
        if(findCustomer.password!==password){
            return res.status(404).send({msg: "Invalid Password"});
        }
        const token=jwt.sign({ id:findCustomer._id}, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.status(200).send({msg: "Login",findCustomer,token});
    } catch (error) {
        res.status(500).send({msg: "Server Error"});
    }
}

const userAuthenticate=async(req, res)=>{
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
     try {
        const decodedToken = jwt.verify(token,  process.env.JWT_SECRET);
      const Customer = await customerModel.findById(decodedToken.id).select("-password");

      res.status(200).send(Customer);
     
    } catch (error) {
         console.log(error);
     }
}

const GetData=async(req, res)=>{
    const { id} = req.query;
    try {
          const Customer = await customerModel.findById(id);
          res.status(200).send(Customer);
    } catch (error) {
        console.log(error);
    }
}
 

const Category=async(req, res)=>{
    const { category} = req.query;
    try {
         const findCategory=await productModel.find({category});
         res.status(200).send(findCategory);
    } catch (error) {
        res.status(500).send({msg:"Server Error"});
    }
}

const GetProduct=async(req, res)=>{
    const {id}=req.query;
    try {
        const findProduct=await productModel.findById(id);
        res.status(200).send(findProduct);
    } catch (error) {
        res.status(500).send({msg:"Please Try Again"});
    }
}

const SearchProduct=async(req, res)=>{
    const Products=await productModel.find();
    res.status(200).send(Products);
}

const MyOrder=async(req, res)=>{
    const {email}=req.query;
    const findOrder=await orderModel.find({email});
    res.send(findOrder);
}

module.exports={ 
    ShowProduct,
    Registration,
    Login, 
    userAuthenticate,
    GetData,
    Category,
    GetProduct,
    SearchProduct,
    MyOrder
}