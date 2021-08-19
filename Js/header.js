$(document).on('scroll',function(){
    $('h1').css("left", Math.max(1200 - 2*window.scrollY,5) + "px");
    $('h3').css("left", Math.max(1230 - 2*window.scrollY,30) + "px");
  })