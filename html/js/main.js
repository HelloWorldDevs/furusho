$(document).ready(function() {
  $('.marquee__slick').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    adaptiveHeight: true
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
    slidesToScroll: 4,
    prevArrow: "<button type='button' class='slick-prev team-slick-nav'>Previous</button>",
    nextArrow: "<button type='button' class='slick-next team-slick-nav'>Next</button>"
  });
  $('.reviews__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000
  });
  
  $('.ui-accordion-header').click(function () {
    $(this).parent().find('.ui-accordion-content').addClass('folded');
    $(this).next().removeClass('folded');
  });

  $('.nav__menu-icon').on('click', function() {
    $('.nav--toggle').toggle();
  });
  
  var $form = $('#mail-form, #mail-form2');
  $form.before('<div class="form-error"></div>');
  $form.submit(function(e) {
    e.preventDefault();
    var formData = $form.serialize();
    var formAction = $form.attr('action');
    $.ajax({
      type: 'POST',
      url: formAction,
      data: formData,
      dataType: 'json',
      encode: true
    }).done(function (response) {
      $('.form-error').remove();
      $form.replaceWith('Congratulations! Dentistry is a big part of a \
          healthy life, and we\'re excited to be a part of yours. We will \
          contact you in the next 2 business days to schedule your \
          appointment and to answer any questions you may still have. \
          Thank you!');
    }).error(function (response) {
      var $error_list = $('<ul></ul>');
      $.each(response.responseJSON, function(key, value) {
        $error_list.append('<li>'+value+'</li>');
      });
      $('.form-error').html($error_list).fadeIn();
    });
  });

});
