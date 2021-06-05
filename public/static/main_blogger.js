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
          '<button class="slide-arrow prev-arrow"> <svg xmlns="http://www.w3.org 2000/svg" viewBox="-220 -30 900 520"> <g fill="#878787" stroke="#878787"> <path d="M231.536 -27.5352c-4.68652 -4.68652 -12.2842 -4.68652 -16.9697 -0.000976562l-211.052 211.05c-4.68555 4.6875 -4.68555 12.2852 0 16.9717l211.052 211.05c4.68555 4.68555 12.2832 4.68555 16.9697 0l7.07129 -7.07031 c4.68555 -4.68652 4.68555 -12.2852 0 -16.9707l-178.494 -178.494h375.887c6.62695 0 12 -5.37305 12 -12v-10c0 -6.62695 -5.37305 -12 -12 -12h-375.887l178.494 -178.494c4.68555 -4.68652 4.68555 -12.2852 0 -16.9707z"/></g></svg></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><svg viewBox="-220 -30 900 520"> <g fill="#878787" stroke="#878787"> <path d="M216.464 411.535c4.68652 4.68652 12.2842 4.68652 16.9697 0l211.052 -211.049c4.68555 -4.6875 4.68555 -12.2852 0 -16.9717l-211.052 -211.05c-4.68555 -4.68555 -12.2832 -4.68555 -16.9697 0l-7.07129 7.07031c-4.68555 4.68652 -4.68555 12.2852 0 16.9707 l178.494 178.494h-375.887c-6.62695 0 -12 5.37305 -12 12v10c0 6.62695 5.37305 12 12 12h375.887l-178.494 178.494c-4.68555 4.68652 -4.68555 12.2852 0 16.9707z"/></g></svg></button>',
      })

      $('.modern-post-activation').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow:
          '<button class="slide-arrow prev-arrow"> <svg xmlns="http://www.w3.org 2000/svg" viewBox="-220 -30 900 520"> <g fill="#878787" stroke="#878787"> <path d="M231.536 -27.5352c-4.68652 -4.68652 -12.2842 -4.68652 -16.9697 -0.000976562l-211.052 211.05c-4.68555 4.6875 -4.68555 12.2852 0 16.9717l211.052 211.05c4.68555 4.68555 12.2832 4.68555 16.9697 0l7.07129 -7.07031 c4.68555 -4.68652 4.68555 -12.2852 0 -16.9707l-178.494 -178.494h375.887c6.62695 0 12 -5.37305 12 -12v-10c0 -6.62695 -5.37305 -12 -12 -12h-375.887l178.494 -178.494c4.68555 -4.68652 4.68555 -12.2852 0 -16.9707z"/></g></svg></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><svg viewBox="-220 -30 900 520"> <g fill="#878787" stroke="#878787"> <path d="M216.464 411.535c4.68652 4.68652 12.2842 4.68652 16.9697 0l211.052 -211.049c4.68555 -4.6875 4.68555 -12.2852 0 -16.9717l-211.052 -211.05c-4.68555 -4.68555 -12.2832 -4.68555 -16.9697 0l-7.07129 7.07031c-4.68555 4.68652 -4.68555 12.2852 0 16.9707 l178.494 178.494h-375.887c-6.62695 0 -12 5.37305 -12 12v10c0 6.62695 5.37305 12 12 12h375.887l-178.494 178.494c-4.68555 4.68652 -4.68555 12.2852 0 16.9707z"/></g></svg></button>',
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
          '<button class="slide-arrow prev-arrow"> <svg xmlns="http://www.w3.org 2000/svg" viewBox="-220 -30 900 520"> <g fill="#878787" stroke="#878787"> <path d="M231.536 -27.5352c-4.68652 -4.68652 -12.2842 -4.68652 -16.9697 -0.000976562l-211.052 211.05c-4.68555 4.6875 -4.68555 12.2852 0 16.9717l211.052 211.05c4.68555 4.68555 12.2832 4.68555 16.9697 0l7.07129 -7.07031 c4.68555 -4.68652 4.68555 -12.2852 0 -16.9707l-178.494 -178.494h375.887c6.62695 0 12 -5.37305 12 -12v-10c0 -6.62695 -5.37305 -12 -12 -12h-375.887l178.494 -178.494c4.68555 -4.68652 4.68555 -12.2852 0 -16.9707z"/></g></svg></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><svg viewBox="-220 -30 900 520"> <g fill="#878787" stroke="#878787"> <path d="M216.464 411.535c4.68652 4.68652 12.2842 4.68652 16.9697 0l211.052 -211.049c4.68555 -4.6875 4.68555 -12.2852 0 -16.9717l-211.052 -211.05c-4.68555 -4.68555 -12.2832 -4.68555 -16.9697 0l-7.07129 7.07031c-4.68555 4.68652 -4.68555 12.2852 0 16.9707 l178.494 178.494h-375.887c-6.62695 0 -12 5.37305 -12 12v10c0 6.62695 5.37305 12 12 12h375.887l-178.494 178.494c-4.68555 4.68652 -4.68555 12.2852 0 16.9707z"/></g></svg></button>',
      })

      $('.categories-activation').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"> <svg xmlns="http://www.w3.org 2000/svg" viewBox="-220 -30 900 520"> <g fill="#878787" stroke="#878787"> <path d="M231.536 -27.5352c-4.68652 -4.68652 -12.2842 -4.68652 -16.9697 -0.000976562l-211.052 211.05c-4.68555 4.6875 -4.68555 12.2852 0 16.9717l211.052 211.05c4.68555 4.68555 12.2832 4.68555 16.9697 0l7.07129 -7.07031 c4.68555 -4.68652 4.68555 -12.2852 0 -16.9707l-178.494 -178.494h375.887c6.62695 0 12 -5.37305 12 -12v-10c0 -6.62695 -5.37305 -12 -12 -12h-375.887l178.494 -178.494c4.68555 -4.68652 4.68555 -12.2852 0 -16.9707z"/></g></svg></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><svg viewBox="-220 -30 900 520"> <g fill="#878787" stroke="#878787"> <path d="M216.464 411.535c4.68652 4.68652 12.2842 4.68652 16.9697 0l211.052 -211.049c4.68555 -4.6875 4.68555 -12.2852 0 -16.9717l-211.052 -211.05c-4.68555 -4.68555 -12.2832 -4.68555 -16.9697 0l-7.07129 7.07031c-4.68555 4.68652 -4.68555 12.2852 0 16.9707 l178.494 178.494h-375.887c-6.62695 0 -12 5.37305 -12 12v10c0 6.62695 5.37305 12 12 12h375.887l-178.494 178.494c-4.68555 4.68652 -4.68555 12.2852 0 16.9707z"/></g></svg></button>',
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
