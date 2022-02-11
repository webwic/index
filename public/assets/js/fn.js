// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         console.log("hi");
//         if (scroll > 1400) {
//           $(".c").css("color" , "black");
//         }else if(scroll > 1601){
//             $(".c").css("color" , "white");
//         }  
//         else{
//             $(".c").css("color" , "white");  	
//         }
//     })
//   })
var top4 = $('#home').offset().top;
var top5 = $('#about').offset().top;
var top1 = $('#team').offset().top;
var top2 = $('#portfolio').offset().top;
var top3 = $('#contact').offset().top;
var top6 = $('#service').offset().top;

$("#t").click(function () {
  $('.c').css('color', 'black');
});

$(document).scroll(function () {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= top4 && scrollPos < top6) {
    $('.c').css('color', 'white');
  } else if (scrollPos > top4 && scrollPos < top5) {
    $('.c').css('color', 'black');
  }else if (scrollPos >top4 && scrollPos < top1) {
    $('.c').css('color', 'white');
  } else if (scrollPos >= top1 && scrollPos < top2) {
    $('.c').css('color', 'black');
  } else if (scrollPos >= top2 && scrollPos < top3) {
    $('.c').css('color', 'white');
  } else if (scrollPos >= top3) {
    $('.c').css('color', 'black');
  }
});
const contactForm = document.querySelector(".email");
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    let formData = {
        name: name.value,
        email: email.value,
        message: message.value
    }
   
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == "success"){
          const para = document.getElementById("po");
          const textNode = document.createTextNode("Message has been sent. Our team will reach you shortly");
          para.appendChild(textNode);
          setTimeout(function(){
            textNode.remove();
            
          }, 3000);
          
            name.value = "";
            email.value ="";
            message.value = "";
        }else{
          
          const para = document.getElementById("po");
          para.style.color = "red";
          const textNode = document.createTextNode("Invalid! Try Again");
          textNode.appendChild(textNode);   
        }
    }
    xhr.send(JSON.stringify(formData));
});
