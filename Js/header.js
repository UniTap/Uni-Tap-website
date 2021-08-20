$(document).on('scroll', function() {
    var wi = 1200;
    //if (document.getElementById("navlist").clientWidth > 1200) {
    wi = document.getElementById("navlist").clientWidth - 300;
    //}
    $('h1').css("left", Math.max(wi - 30 - 2 * window.scrollY, 5) + "px");
    $('h3').css("left", Math.max(wi - 2 * window.scrollY, 30) + "px");
})