const productModel=require("../models/productModel");

const ShowProduct=async(req, res)=>{
        const Products=await productModel.find();
        res.status(200).send(Products);
}


module.exports={
    ShowProduct
}