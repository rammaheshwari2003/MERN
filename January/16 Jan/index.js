// const http=require("http");

// http.createServer(function(req, res){
//     res.write("<h1> This is my first program </h1>");
//     res.end();
// }).listen(8080);




/*  Module */


// const http=require("http");

// const College=require("./college.js");

// http.createServer((req, res)=>{
//     res.write("<h1> This is my first program </h1>");
//     res.write(College.MyCollege());
//     res.write(College.University());
//     res.end();
// }).listen(8080);


                                    /* Que */



const http=require("http");

const emp=require("./employee");

http.createServer((req,res)=>{
    res.write("<h1> Employee Detail's </h1>");
    res.write(emp.Name())
    res.write(emp.Designation())
    res.write(emp.empSalary())
    res.write(emp.workExperience())

    res.end();

}).listen(9000);