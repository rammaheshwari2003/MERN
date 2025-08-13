const mongoose=require("mongoose");

const customerSchema=new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    pincode: Number,
    mobile: Number,
    email: String,
    password: String

})

module.exports=mongoose.model("customer", customerSchema);