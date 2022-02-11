const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();
const app = express();

app.use(express.static("public"));

app.use(express.json());

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
})
app.post("/", function(req, res){
  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
      user: "webwicsol@gmail.com",
      pass: process.env.PASSWORD
    }
  })
  const subject = "Message from " + req.body.email + " Client Name: " + req.body.name; 
  const mailOptions = {
    from: req.body.email,
    to: "webwicsol@gmail.com",
    subject: subject,
    Text: req.body.message

  }
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.send("error");
    }else{
      console.log("email send: "+info.response);
      res.send("success");
    }
  })
})
app.post("/learn", function(req,res){
    res.sendFile(__dirname + "/learnmore.html");
})


app.listen("3000", function(req,res){
    console.log("server up at port 3000");
})