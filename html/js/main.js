$(document).ready(function() {
  $('#marquee-1 .marquee__slider').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 8000,
    adaptiveHeight: true
  });
  $('#marquee-tour .marquee__slider').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 8000,
    adaptiveHeight: true
  });

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
    speed: 500,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 8000
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
  '#mail-form, #mail-form2'
  var HelloWorldDevs = function() {};

  HelloWorldDevs.prototype.mailForm = function (form, success_msg, uid) {
    var $form = $(form);
    $form.submit(function(e) {
      e.preventDefault();
      var formData = $form.serialize();
      var formAction = 'http://web-api.tysonsteele.com/v1/webprops/'+uid+'/schedule'
      $('.form-error').remove();
      $.ajax({
        type: 'POST',
        url: formAction,
        data: formData,
        dataType: 'json',
        encode: true
      }).done(function (response) {
        $form.replaceWith($(success_msg).html());
      }).error(function (response) {
        var $error_list = $('<ul>');
        if(response.responseJSON == undefined) {
          $error_list.append($('<li>').text('There was a problem with your submission. Please ensure all fields are correctly entered.'));
        } else {
          $.each(response.responseJSON, function(key, value) {
            $error_list.append($('<li>').text(value));
          });
        }
        $form.before('<div class="form-error"></div>');
        $('.form-error').html($error_list).fadeIn();
      });
    });
  };

  HelloWorldDevs.prototype.noOrphans = function (selectors, exceptions) {
    $(selectors).not(exceptions).each(function () {
      $(this).html($(this).html().replace(/\s([^\s<]{0,10})\s*$/, '&nbsp;$1'));
    });
  };

  var HWD = new HelloWorldDevs();

  HWD.mailForm('#mail-form, #mail-form2', '#success_msg', '7fb35345-752d-4792-9480-cd3db6674a62');
  HWD.noOrphans('h1,h2,h3,h4,h5,h6,p','');

});
