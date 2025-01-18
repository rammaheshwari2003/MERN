                    /*  Upper Case [package = npm i uppercase ]*/ 

const http=require("http");

const uc=require("uppercase");

http.createServer((req, res)=>{
    res.write(uc("<h1> Welcome To cybrom bhopal </h1> <h2> This is my first program </h2>"));
    res.end();

}).listen(8000, ()=>{
    console.log("Server run on 8000 port");
});