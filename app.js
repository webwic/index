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
      "name": "webwic_contact",
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
  url: 'https://graph.facebook.com/v14.0/108684778702670/messages',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer EAAPgXx7j9vYBAFXxUknTdyqAgGmWZCLSmmZAhaOYq4BXm6jAnzO8g0hsSAohzgJXFbGog2vhav5WPrplPoSHZAR4GuVNPZBFPIGZACIIdfb1MYUNw07ctZCldOqrYaZBEYKfOniEVQ24KsY1cDMicYrZCiCppVWdrxPpPQZB4Yur3BlncESIKFE4J'
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
