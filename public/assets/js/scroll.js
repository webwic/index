
$(document).scroll(function () {
    var top1 = $('#home').offset().top;
    var top3 = $('#about').offset().top;
    var top4 = $('#team').offset().top;
    var top5 = $('#portfolio').offset().top;
    var top6 = $('#contact').offset().top;
    var top2 = $('#service').offset().top;
    
    
  
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= top1 && scrollPos < top2) {
    $('.c').css('color', 'white');
  } else if (scrollPos >= top2 && scrollPos < top3) {
    $('.c').css('color', 'black');
  }else if (scrollPos >= top3 && scrollPos < top4) {
    $('.c').css('color', 'white');
  } else if (scrollPos >= top4 && scrollPos < top5) {
    $('.c').css('color', 'black');
  } else if (scrollPos >= top5 && scrollPos < top6) {
    $('.c').css('color', 'white');
  } else if (scrollPos >= top6) {
    $('.c').css('color', 'black');
  }else{
    $('.c').css('color', 'white');
  }

});