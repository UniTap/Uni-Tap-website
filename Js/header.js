$(document).on('scroll', function() {
    var wi = 1200;
    const windowWidth = document.getElementById("navlist").clientWidth;
    wi = windowWidth - 300;
    if (windowWidth > 620) {
        $('h1').css("left", Math.max(wi - 30 - 2 * window.scrollY, 5) + "px");
        $('h3').css("left", Math.max(wi - 2 * window.scrollY, 30) + "px");
    } else {
        $('h1').css("left", ((windowWidth - 150) / 2) + "px");
        $('h3').css("left", ((windowWidth - 120) / 2) + "px");
    }
})

function menuo() {
    document.getElementById("resp-menu").style.display = "block";
}

function menuc() {
    document.getElementById("resp-menu").style.display = "none";
}