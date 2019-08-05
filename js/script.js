// MENU

$(document).ready(function () {

  $(window).scroll(function () {
    scroll = $(window).scrollTop();

    if ($(window).width() > 480) {
      if (scroll > 100) {
        $(".menu").css({
          "background": "#fff"
        });
        $(".menu").css({
          "padding": "5px 0"
        });
        $(".menu").addClass("shadow");
        $("nav ul li a").css({
          "color": "#30374b"
        });
        $(".logo").css({
          "color": "#000"
        });
      } else {
        $(".menu").css({
          "background": "transparent"
        });
        $(".menu").css({
          "padding": "20px 0"
        });
        $(".menu").removeClass("shadow");
        $("nav ul li a").css({
          "color": "#fff"
        });
        $(".logo").css({
          "color": "#fff"
        });
      }
    }

    if ($(window).width() < 480) {
      if (scroll > 100) {
        $(".menu").css({
          "background": "#fff"
        });
        $(".menu").css({
          "padding": "5px 0"
        });
        $(".menu").addClass("shadow");
        $("nav ul li a").css({
          "color": "#30374b"
        });
        $(".logo").css({
          "color": "#000"
        });
      } else {
        $(".menu").css({
          "background": "transparent"
        });
        $(".menu").css({
          "padding": "20px 0"
        });
        $(".menu").removeClass("shadow");
        $("nav ul li a").css({
          "color": "#fff"
        });
        $(".logo").css({
          "color": "#fff"
        });
      }
    }



  })



  if ($(window).width() < 500) {
    $('.menu-icon').on('click', function () {
      $('nav').slideToggle();
    })
  }





})

// Carousel
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 10,
    nav: true,
    merge: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })
});


// Enviar correo
$(document).ready(function () {

  $('#bEnviar').click(function () {
    var nombre = $('#itNombre').val();
    var correo = $('#itMail').val();
    var asunto = $('#itAsunto').val();


    if (nombre == "") {
      $('#itNombre').css('border-bottom', '2px solid red');
      return false;
    } else {
      $('#itNombre').css('border-bottom', '1px solid #90CAF9');

      if (correo == "") {
        $('#itMail').css('border-bottom', '2px solid red');
        return false;
      } else {
        $('#itMail').css('border-bottom', '1px solid #90CAF9');

        if (asunto == "") {
          $('#itAsunto').css('border-bottom', '2px solid red');
          return false;
        }
      }
      $('#bEnviar').fadeOut();
      $('#mensaje4').fadeIn();
    }

  });

});