const express=require("express");
const app=express();

const StuRoute=require("./routes/studentRoutes");
const EmpRoute=require("./routes/employeeRoute");
const ProdRoute=require("./routes/productRoute");


app.use("/students", StuRoute);

app.use("/employee", EmpRoute);
app.use("/products", ProdRoute);


app.listen(8000, ()=>{
    console.log("Server run on 8000 Port");
})
