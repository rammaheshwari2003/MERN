

const fileUpload=(req,res,next)=>{
    console.log("File Image uploade in Mongo Db");
    req.name="myImage";
    next();
}

module.exports=fileUpload