const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
var axios = require('axios');
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
console.log(req.body.number);
  var data = JSON.stringify({
    "messaging_product": "whatsapp",
    "to": "917025996690",
    "type": "template",
    "template": {
      "name": "contact",
      "language": {
        "code": "en_US"
      },
      "components":[
        {
          "type": "body",
          "parameters":[
            {
              "type": "text",
              "text": req.body.name
            },
            {
              "type": "text",
              "text": req.body.email
            },
            {
              "type": "text",
              "text": req.body.number
            },
            {
            "type": "text",
            "text": req.body.message
            }
          ]
        }
      ]
    }
  });

var config = {
  method: 'post',
  url: 'https://graph.facebook.com/v17.0/100342539541221/messages',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer EAAE3iH0r2E8BO9Sb3uJPK7oGV4w4NmC4ZCclANccRxIfhwn15KMeNiFlSmCR2igVYZCKuTz3wDJBEKSm7PalIxCU877RhHEJDXxzZBbxPhhZCoGGqkrsJkZCRPZCXxlKqfeADYGM2bhZAdNfgAnVElrRzPcel4pJtl6LmcvuDdcZAIizE6yoetzeFv9vwZCUJwfUo'
  },
  data : data
};

axios(config)
.then(function (response) {
  res.send("success");
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  res.send("error");
  console.log(error);
});


});
app.post("/learn", function(req,res){
    res.sendFile(__dirname + "/learnmore.html");
})


app.listen(process.env.PORT ||"3000", function(req,res){
    console.log("server up at port 3000");
})
