"use strict";

// Slick Card Left
$('.slick.newfeed-left-top').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 2000,
  asNavFor: '.slick.newfeed-left-bottom'
});
$('.slick.newfeed-left-bottom').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slick.newfeed-left-top',
  dots: true,
  arrows: false,
  autoplay: true,
  speed: 2000
}); // Slick Card Right

$('.slick.newfeed-right-top').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // fade: true,
  autoplay: true,
  speed: 2000,
  asNavFor: '.slick.newfeed-right-bottom'
});
$('.slick.newfeed-right-bottom').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slick.newfeed-right-top',
  dots: true,
  arrows: false,
  autoplay: true,
  speed: 2000
});