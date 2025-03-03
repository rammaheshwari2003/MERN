const mongoose = require("mongoose");
const userSchema= new mongoose.Schema({ 
     name:String,
     rollno:String,
     city:String,
     imgurl:String
})

module.exports = mongoose.model("user", userSchema);