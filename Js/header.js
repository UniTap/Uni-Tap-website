$(document).on('scroll',function(){
    $('h1').css("left", Math.max(1200 - 2*window.scrollY,5) + "px");
  })