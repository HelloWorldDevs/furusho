$(document).ready(function() {
  $('.marquee__slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 4000,
    adaptiveHeight: true
  });
  // $('.marquee__slick').slick({
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   autoplay: false,
  //   arrows: false,
  //   autoplaySpeed: 4000,
  //   adaptiveHeight: true
  // });

  $('.associations-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          autoplaySpeed: 4000,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000
        }
      }
    ]
  });
  $('.team-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: "<button type='button' class='slick-prev team-slick-nav'>Previous</button>",
    nextArrow: "<button type='button' class='slick-next team-slick-nav'>Next</button>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000
        }
      }
    ]
  });
  $('.reviews__slider').slick({
    dots: false,
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

  $('.custom-nav__menu-icon').on('click', function() {
    $('.nav--toggle').toggle();
  });
  



  // Mail Form (Request Appointment)
  // ===============================

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
