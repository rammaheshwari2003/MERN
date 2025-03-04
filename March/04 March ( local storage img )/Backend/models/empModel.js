const mongoose = require("mongoose");
const empSchema= new mongoose.Schema({ 
     empid:String,
     name:String,
     designation:String,
     salary:String,
     image:String
})

module.exports = mongoose.model("employee", empSchema);