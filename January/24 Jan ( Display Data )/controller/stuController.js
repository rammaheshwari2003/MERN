const stuModel = require("../model/stuModel");

const home=(req, res)=>{
    res.render("home");
}
const insert=(req, res)=>{
    res.render("insert");
}
const display=async (req, res)=>{
    const stuData = await  stuModel.find();

    res.render("display", {MyData:stuData});
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