const express = require("express");

const app = express();

app.listen(3000,function () {
    console.log(`Starting the express server at localhost:3000...`);
})
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
   app.send("hello there nodemon!"); 
});
// console.log(app);