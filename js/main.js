var slickInit = function(){
    // plugin initialization.
    $('.your-class').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });

}

var owlInit = function(){

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
          "<i class='fa fa-caret-left'></i>",
          "<i class='fa fa-caret-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 1
          }
        }
      });

}

function popupInit(){

    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
          }
        // other options
      });

}

$(document).ready(function(){
    slickInit();
    owlInit();
    popupInit();
});