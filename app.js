const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();
const app = express();

app.use(express.static("public"));

app.use(express.json());

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
});
app.get("/sitemap.xml", function(req, res){
  res.sendFile(__dirname + "/sitemap.xml");
});
app.post("/", function(req, res){
  console.log(req.body.email);
  if(req.body.email === "undefined"){
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
      user: "webwicquery@gmail.com",
      pass: process.env.PASSWORD
    }
  })
  const subject = "Message from " + req.body.email + " Client Name: " + req.body.name; 
  
  const mailOptions = {
    from: req.body.email,
    to: "webwicquery@gmail.com",
    subject: subject,
    text: req.body.message

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
}else{
  console.log("error");
}
})
app.post("/learn", function(req,res){
    res.sendFile(__dirname + "/learnmore.html");
})


app.listen(process.env.PORT ||"3000", function(req,res){
    console.log("server up at port 3000");
})