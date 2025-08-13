const express=require("express");
const app=express();
const cors=require("cors");

const path = require('path')

const adminRoute=require("./routes/adminRoute");
const customerRoute=require("./routes/customerRoute");
const paymentRoute = require("./routes/payment");

require("dotenv").config();
const bodyparser=require("body-parser");
const db=require("./utils/db");


app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
db.connetDB();

app.use("/admin", adminRoute);
app.use("/customer", customerRoute);
app.use("/api/payment/",paymentRoute);

const port=process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Server run on port ${port}`);
})