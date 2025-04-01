const adminModel=require("../models/adminModel");

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
    console.log(req.body);
    res.send("ok");
}


module.exports={
    AdminLogin,
    AddProduct
};