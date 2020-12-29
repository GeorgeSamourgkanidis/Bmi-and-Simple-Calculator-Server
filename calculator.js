const express = require('express');
//Κατεβάζω και χρησιμοποιώ το body-parser για να παρσαρω απο
//το html
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});
app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/",function(req,res){
  //με req.body.num1 παιρνω απο το num1 το value σε string
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("Result : " + result);
});
app.post("/bmicalculator",function(req,res){
  var weight =parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result2 = weight / (height * height);
  res.send("Result : " + result2);
});


app.listen(3000,function(){
  console.log("started");
});
