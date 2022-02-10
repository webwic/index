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
  } else if (scrollPos > top4 && scrollPos < top1) {
    $('.c').css('color', 'white');
  } else if (scrollPos >= top1 && scrollPos < top2) {
    $('.c').css('color', 'black');
  } else if (scrollPos >= top2 && scrollPos < top3) {
    $('.c').css('color', 'white');
  } else if (scrollPos >= top3) {
    $('.c').css('color', 'black');
  }
});