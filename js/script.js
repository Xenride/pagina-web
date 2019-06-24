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

// Menu
$(document).ready(function () {

  $(window).scroll(function () {
    scroll = $(window).scrollTop();
    if (scroll > 100) {
      $('#contenedor-menu').css({
        "position": "fixed"
      });
      $('#contenedor-menu').css({
        "width": "100%"
      });
      $('#contenedor-menu').css({
        "top": "0"
      });
      $('#contenedor-menu').css({
        "background": "#fff"
      });
      $('#contenedor-menu a').css({
        "color": "#000"
      });
      $('.logo').css({
        "color": "000"
      });
      $('#contenedor-menu').css({
        "box-shadow": "rgba (0, 0, 0, .22) 6px 1px 1px"
      });
      $('#contenedor-menu').css({
        "z-index": "100"
      });
    } else {
      $('#contenedor-menu').css({
        "position": "relative"
      });
      $('#contenedor-menu').css({
        "background": "transparent"
      });
      $('#contenedor-menu').css({
        "box-shadow": "0 0 0"
      });
      $('#contenedor-menu a').css({
        "color": "#fff"
      });
      $('#contenedor-menu').css({
        "color": "#fff"
      });
    }
  });
});

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
        $("#contenedor-menu").css({
          "background": "#fff"
        });
        $("#contenedor-menu").css({
          "padding": "5px 0"
        });
        $("#contenedor-menu").addClass("shadow");
        $("nav ul li a").css({
          "color": "#30374b"
        });
        $(".logo").css({
          "color": "#000"
        });
      } else {
        $("#contenedor-menu").css({
          "background": "transparent"
        });
        $("#contenedor-menu").css({
          "padding": "20px 0"
        });
        $("#contenedor-menu").removeClass("shadow");
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
    });
  }

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