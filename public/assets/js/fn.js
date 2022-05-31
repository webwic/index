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


const contactForm = document.querySelector(".email");
let name = document.getElementById('name');

let email = document.getElementById('email');
let message = document.getElementById('message');
contactForm.addEventListener('submit', function(e){


    e.preventDefault();
    const loading = document.getElementById("loading");
    loading.style.visibility= "visible";
    loading.setAttribute("src", "assets/img/loading.gif");
    loading.setAttribute("width", "30px");
    
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
          loading.style.visibility= "hidden";
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
          loading.remove();
          const para = document.getElementById("po");
          para.style.color = "red";
          const textNode = document.createTextNode("Invalid! Try Again");
          textNode.appendChild(textNode);
        }
    }
    xhr.send(JSON.stringify(formData));
});
