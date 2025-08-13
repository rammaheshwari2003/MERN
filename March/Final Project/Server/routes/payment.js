const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const ordermodel=require("../models/orderModel");

//Creating Order

router.post("/orders",async(req,res) => {
    const {amount, customername, address, contact, email, proname,image }=req.body; 
    try {
        const instance = new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET,
        });

        const options = {
            amount: req.body.amount * 100,
            currency:"INR",
            receipt:crypto.randomBytes(10).toString("hex"),
        }
        instance.orders.create(options,async(error,order) => {
            if(error) {
                console.log(error);
                return res.status(500).json({message:"Something Went Wrong!"});
            }

           await ordermodel.create({
            name:proname,
            totalamount:amount, 
            customername:customername,
            address:address,
            contact:contact, 
            email:email,
            orderId:order.id,
            image:image
    
            })

            res.status(200).json({data:order});
        });

    } catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error!"});
    }

});

//Verifying the payment
router.post("/verify",async(req,res) => {
    try {
        const {
            razorpay_orderID,
            razorpay_paymentID,
            razorpay_signature } = req.body;
        const sign = razorpay_orderID + "|" + razorpay_paymentID;
        const resultSign = crypto
        .createHmac("sha256",process.env.KEY_SECRET)
        .update(sign.toString())
        .digest("hex");

        if (razorpay_signature == resultSign){
            await ordermodel.findOneAndUpdate(
                {orderId:razorpay_orderID},
                {paymentId:razorpay_paymentID}
            )
            console.log(razorpay_orderID)
            console.log(razorpay_paymentID)
            return res.status(200).json({message:"Payment verified successfully"});
        }

    } catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error!"});
    }
});

module.exports = router;