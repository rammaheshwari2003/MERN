const stuModel = require("../model/stuModel");
const datasave = async (req, res) => {
    const { rollno, name, city, fees } = req.body;
    const data=await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.send(data);
}

const datadisplay= async (req, res)=>{
    const Data= await stuModel.find();
    res.send(Data);
}
const datasearch= async (req, res)=>{
        const {rollno}=req.body;
    const Data= await stuModel.find({rollno:rollno});    
    res.send(Data);
}

module.exports = { datasave , datadisplay, datasearch}