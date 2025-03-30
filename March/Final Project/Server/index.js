const express=require("express");
const app=express();
const cors=require("cors");

const adminRoute=require("./routes/adminRoute");

require("dotenv").config();
const bodyparser=require("body-parser");
const db=require("./utils/db");


app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
db.connetDB();

app.use("/admin", adminRoute);

const port=process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Server run on port ${port}`);
})