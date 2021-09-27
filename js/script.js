
//NAVBAR SCROLLED

$(document).scroll(function () {
  var $hero = $(".hero-image");
  var $nav = $(".fixed-top");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $hero.height() - 80);
});