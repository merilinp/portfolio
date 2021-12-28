
//NAVBAR

$(document).scroll(function () {
  var hero = $(".hero-image");
  var nav = $(".navbar");
  nav.toggleClass('fixed-top', $(this).scrollTop() > hero.height() - 80);
});

// $(function () {
//   /* $(".navbar-fixed-top").css({"top":$("#hero").height()});

//       $(window).resize(function (e) {
//       $(".navbar-fixed-top").css({"top":$("#hero").height()});
//       }); */

//   $(document).on('scroll', function () {
//     console.log('scroll top : ' + $(window).scrollTop());
//     if ($(window).scrollTop() >= $("#hero").height()) {
//       $(".nav").addClass("navbar-fixed-top");
//     }

//     if ($(window).scrollTop() < $("#hero").height()) {
//       $(".nav").removeClass("navbar-fixed-top");
//     }
//   });
// });

//BACK TO TOP BUTTON


