const mongoose=require("mongoose");

const productSchema= new mongoose.Schema({
    bookname: String,
    author: String,
    category: String,
    description: String,
    publisher: String,
    mrp: Number,
    price: Number,
    language: String,
    defaultImage:String,
    images:[String]
    
})

module.exports= mongoose.model("Product", productSchema);