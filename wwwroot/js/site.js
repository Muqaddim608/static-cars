var slideIndex = 0;
var timer;

function startSlide() {
    timer = setInterval(() => {
        slideIndex++;
        if (slideIndex >= $('.slide').length) {
            slideIndex = 0;
        }
        showSlides();
    }, 5000); // Change image every 5 seconds
}

function showSlides() {
    $('.slides').css('transform', `translateX(${-slideIndex * 100}%)`);
}

$(document).ready(function () {
    startSlide();
});
function scrollToSection(brand) {
    var element = document.getElementById(brand);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}