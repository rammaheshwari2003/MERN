const adminModel=require("../models/adminModel");
const productModel=require("../models/productModel");
const OrderModel=require("../models/orderModel");
const AdminLogin=async(req, res)=>{
    const {adminId, adminPass}=req.body;
    try {
        const findAdmin=await adminModel.findOne({adminId});
        if(!findAdmin){
            return res.status(404).send({msg: "Invalid Admin Id"}); 
        }
        if(findAdmin.adminPass!==adminPass){
            return res.status(404).send({msg: "Invalid Password"});
        }
        res.status(200).send({msg: "Login Successfully", Admin:findAdmin});
    } catch (error) {
        res.status(500).send({msg: "Server Error"});
    }
}

 
 


const AddProduct=async(req, res)=>{
    const imageURL=req.files.map(file=>file.path);
    const {bookname,author,category,description,publisher,mrp,price,language}=req.body;
    try {
        const addProduct= await productModel.create({
            bookname,author,category,description,publisher,mrp,price,
            language,defaultImage:imageURL[0],images:imageURL});
            res.status(200).send({msg: "Product Added Successfully", product:addProduct});
    } catch (error) {
        res.status(500).send({msg: "Server Error"});
    }
}


const GetProduct=async(req, res)=>{
    const Order= await OrderModel.find();
    res.status(200).send(Order);
}


const GetProductData=async(req, res)=>{
        const AllProduct=await productModel.find();
        res.send(AllProduct);
}

const DeleteProduct=async(req, res)=>{
        const {id}=req.query;
        const deleteItem=await productModel.findByIdAndDelete({_id:id});
        res.send({msg:"Product Deleted"});    
}

const GetProductDetails=async(req, res)=>{
        const {id}=req.query;
        const findProductDetail=await productModel.findById({_id:id});
        res.send(findProductDetail);
}

const EditProduct=async(req, res)=>{
    console.log(req.body);
    console.log(req.files);
}

const ChangePassword=async(req, res)=>{
        const {oldpassword,newpassword,adminName}=req.body;   
        const findAdmin=await adminModel.findOne({name:adminName});  
        if(findAdmin.adminPass != oldpassword){
            res.send({status:500,oldPssErr:"Invalid old Password"})
        }
        if(findAdmin.adminPass == oldpassword && {name:adminName}){
            let changePass=await adminModel.updateOne({adminPass:newpassword})
            res.send({status:200,msg:"Password Change Successfully"});
            
        }
}

module.exports={
    AdminLogin,
    AddProduct,
    GetProduct,
    GetProductData,
    DeleteProduct,
    GetProductDetails,
    EditProduct,
    ChangePassword
};
