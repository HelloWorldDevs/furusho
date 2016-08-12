$(document).ready(function() {
    $('.marquee__slick').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: false
    });

  $('.associations').slick({
    dots: true,
    infinite: true,
    speed: 300,
    width: '100%',
    slidesToShow: 1,
    centerMode: true
  });
  $('.team-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4
  });
});
