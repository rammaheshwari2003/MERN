const mongoose = require("mongoose");
const authorModel = require("./authorModel");
const bookSchema= new mongoose.Schema({ 
     bookName:String,
     price:Number,
     authorId:{type: mongoose.Schema.Types.ObjectId, ref:"author"}
})

module.exports = mongoose.model("book", bookSchema);