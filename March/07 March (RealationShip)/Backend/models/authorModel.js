const mongoose=require("mongoose");
const authorSchema= new mongoose.Schema({
    authorName:String,
    email:String,
    bookId:{type: mongoose.Schema.Types.ObjectId, ref:"book"}
})

module.exports=mongoose.model("author", authorSchema);