
//NAVBAR SCROLLED

$(document).scroll(function () {
  var hero = $(".hero-image");
  var nav = $(".fixed-top");
  nav.toggleClass('scrolled', $(this).scrollTop() > hero.height() - 80);
});

//BACK TO TOP BUTTON

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
