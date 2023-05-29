$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 50,
    dots: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut', 
    animateIn: 'fadeIn',
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
        slideBy: 1,
      },
      600: {
        items: 1,
        slideBy: 1,
      },
      1000: {
        items: 2,
        slideBy: 1,
      }
    },
  });
});

