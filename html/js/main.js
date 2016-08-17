$(document).ready(function() {
  $('.marquee__slick').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
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
  $('.reviews__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: "<i class='fa fa-arrow-circle-o-left slick-prev' aria-hidden='true'></i>"
  });
  
  $('.ui-accordion-header').click(function () {
    $(this).parent().find('.ui-accordion-content').addClass('folded');
    $(this).next().removeClass('folded');
  });

  $('.nav__menu-icon').on('click', function() {
    $('.nav--toggle').toggle();
  });


});
