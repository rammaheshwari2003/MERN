const bookModel= require("../models/bookModel");
const authorModel=require("../models/authorModel");

const insert=async(req, res)=>{
   const {name,email,bookname,price}=req.body;
  const Author=await authorModel.create({
    authorName:name,
    email:email
  })

  const Book=await bookModel.create({
    bookName:bookname,
    price:price,
    authorId:Author._id
  })

    await authorModel.findByIdAndUpdate(Author._id, {$push:{bookId:Book._id}})
    res.send("Data Insert");
}

const display=async(req, res)=>{
    const Data=await authorModel.find().populate("bookId");
    res.send(Data);
}

module.exports ={
    insert,
    display
}