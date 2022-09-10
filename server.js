const express = require("express");

const app = express();

app.get("/",function(req,res){
   
res.send("<title>Express</title><h1>I'm creating servers</h1>");

// res.send(index.html);
//not working

});

app.get("/about",function (req,res) 
{
   res.send("<p>This is Mohammed Naeem's first Express server....</p>"); 
});

app.get("/naeem",function (req,res) 
{
   res.send("hello there nodemon!"); 
});

app.get("/bmiCalculator",function(req,res){
   res.sendFile(__dirname+"/BMI.html");
});

app.listen(3000,function () {
    console.log(`Starting the express server at localhost:3000...`);
});
// console.log(app);