const stuModel = require("../model/stuModel");

const home=(req, res)=>{
    res.render("home");
}
const insert=(req, res)=>{
    res.render("insert");
}
const display=(req, res)=>{
    res.render("display");
}
const save= async (req, res)=>{
        const {rollno, name, city, fees}=req.body;
        const Data=await stuModel.create({
            rollno:rollno,
            name:name,
            city:city,
            fees:fees
        })
        res.render("insert");
}


module.exports={
    home,
    insert,
    display,
    save
}