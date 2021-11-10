"use strict";

$(".fixed-menu>li:has(ul)").addClass("my-dropdown");
$(".fixed-menu .my-dropdown>a").click(function (e) {
  $(this).parents("li").toggleClass("is_active");
  $(this).parents("li").siblings().removeClass("is_active");
  e.preventDefault();
  $(document).on("click", function (e) {
    if ($(e.target).is(".fixed-menu li.my-dropdown>a") === false) {
      $(".fixed-menu li").removeClass("is_active");
    }
  });
});

$('.menu-collapse, .close-menu').click(function(e){
  $('.fixed-menu-wrapper').toggleClass('is_active');
})