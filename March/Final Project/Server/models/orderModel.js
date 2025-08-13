const mongoose= require("mongoose");
const orderSchema= new mongoose.Schema({
    name:String,
    totalamount:Number, 
    customername:String,
    address:String,
    contact:String,
    email:String,
    orderId:String,
    paymentId:String,
    dop:  {
		type: Date,
		default: Date.now
	},
  image:String
  
})

module.exports = mongoose.model("order", orderSchema);