;(function (window, document, $, undefined) {
  'use strict'
  var axilInit = {
    i: function (e) {
      axilInit.s()
      axilInit.methods()
    },

    s: function (e) {
      ;(this._window = $(window)),
        (this._document = $(document)),
        (this._body = $('body')),
        (this._html = $('html')),
        (this._subscribePopUp = $('.subscribe-popup'))
    },
    methods: function (e) {
      axilInit.w()
      axilInit.axilSlickActivation()
    },

    w: function (e) {
      this._window
        .on('load', axilInit.l)
        .on('scroll', axilInit.scrl)
        .on('resize', axilInit.res)
    },

    scrl: function () {},

    axilSlickActivation: function (e) {
      $('.slider-activation').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        adaptiveHeight: true,
        cssEase: 'linear',
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="fal fa-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="fal fa-arrow-right"></i></button>',
      })

      $('.modern-post-activation').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="fal fa-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="fal fa-arrow-right"></i></button>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      })

      // Bootstrap Tab With Slick
      $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('.modern-post-activation').slick('setPosition')
      })

      $('.post-gallery-activation').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        adaptiveHeight: true,
        cssEase: 'linear',
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="fal fa-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="fal fa-arrow-right"></i></button>',
      })

      $('.categories-activation').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="fal fa-arrow-left"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="fal fa-arrow-right"></i></button>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      })

      $('.slick-nav-avtivation-new').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.slick-for-avtivation-new',
        dots: false,
        focusOnSelect: true,
        verticalSwiping: false,
        centerMode: false,
        centerPadding: '0',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: false,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              vertical: true,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              vertical: true,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 577,
            settings: {
              vertical: true,
              slidesToShow: 2,
            },
          },
        ],
      })

      $('.slick-for-avtivation-new').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slick-nav-avtivation-new',
        infinite: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 769,
          },
        ],
      })
    },
  }
  axilInit.i()
})(window, document, jQuery)
