const adminModel=require("../models/adminModel");
const productModel=require("../models/productModel");

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


module.exports={
    AdminLogin,
    AddProduct
};