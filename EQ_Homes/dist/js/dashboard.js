"use strict";

var clicka = document.getElementById("toggle-menu");
clicka.addEventListener("click", function () {
  var menu01 = document.getElementById("toggleclick");
  menu01.classList.toggle("setwidth");
  var menu01 = document.getElementById("toggleclicka");
  menu01.classList.toggle("setwidtha");
}); // $(".nav-box").each(function(index,value){
//     var nav = $(value);
//     var nav01 = nav.find(".dropdownmenu");
//     nav01.click(function(){
//         var navsub = nav.find(".sibar-menu-sub");
//         navsub.slideToggle('swing')
//     })
// })
// $(".nav-box1").each(function(index,value){
//     var nav = $(value);
//     var nav01 = nav.find(".dropdownmenu1");
//     nav01.click(function(){
//         var navsub = nav.find(".notifi__box");
//         navsub.slideToggle('swing')
//     })
// })

$(".nav-box1").click(function (e) {
  e.stopPropagation(); // Ngan chan su kien click lan toa ra thang cha
  // Ẩn het toan bo nhung thang khac

  var navsub = $(this).find(".notifi__box");

  if ($(this).hasClass('active') == false) {
    $(".nav-box1.active").removeClass('active').find('.notifi__box').slideUp('swing');
    $(this).addClass('active');
    navsub.slideDown('swing');
  } else {
    $(".nav-box1.active").removeClass('active').find('.notifi__box').slideUp('swing');
  }
});
$('body').click(function (e) {
  $(".nav-box1.active").removeClass('active').find('.notifi__box').slideUp('swing');
});
$(".nav-box").click(function (e) {
  e.stopPropagation(); // Ngan chan su kien click lan toa ra thang cha
  // Ẩn het toan bo nhung thang khac

  var navsub = $(this).find(".sibar-menu-sub");

  if ($(this).hasClass('active') == false) {
    $(".nav-box.active").removeClass('active').find('.sibar-menu-sub').slideUp('fast');
    $(this).addClass('active');
    navsub.slideDown('swing');
  } else {
    $(".nav-box.active").removeClass('active').find('.sibar-menu-sub').slideUp('fast');
  }
});