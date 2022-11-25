$(function () {
  //плавный скролл
  $(".footer__top-btn").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 60
    }, 800);
  });

  $('.popular__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    draggable: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  })
  $('.popular__prev').on('click', function (e) {
    e.preventDefault()
    $('.popular__slider').slick('slickPrev')
  })
  $('.popular__next').on('click', function (e) {
    e.preventDefault()
    $('.popular__slider').slick('slickNext')
  })

  $('.partners__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    draggable: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  })
  $('.partners__prev').on('click', function (e) {
    e.preventDefault()
    $('.partners__slider').slick('slickPrev')
  })
  $('.partners__next').on('click', function (e) {
    e.preventDefault()
    $('.partners__slider').slick('slickNext')
  })

  $('.comments__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    draggable: true,
  })
  $('.comments__prev').on('click', function (e) {
    e.preventDefault()
    $('.comments__slider').slick('slickPrev')
  })
  $('.comments__next').on('click', function (e) {
    e.preventDefault()
    $('.comments__slider').slick('slickNext')
  })


  $('.burger-menu, .owerlay, .close').on('click', function (e) {
    e.preventDefault()
    if ($('.header__menu-inner').hasClass('header__menu-inner--open')) {
      $('.header__menu-inner').removeClass('header__menu-inner--open');
      $('.owerlay').removeClass('owerlay--show');
      $('body').css({ "height": "100%", "overflow-y": "auto" })
      //$('.burger-menu').removeClass('burger-menu--open');
    }
    else {
      $('.header__menu-inner').addClass('header__menu-inner--open');
      $('.owerlay').addClass('owerlay--show');
      $('body').css({ "height": "100vh", "overflow-y": "hidden" })
      //$('.burger-menu').addClass('burger-menu--open');
    }

  })

    $('.header__menu-item').on('click', function (e) {
      e.preventDefault();

      $(this).find('.header__menu-list-2').css({
        "visibility": "visible",
        "opacity": 1
      });
    })


})