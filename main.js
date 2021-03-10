var hamburgerMenu = $('.hamburger-menu');

var openMenu = $('.fa-bars');

var closeMenu = $('.fa-times');


//SOLUTION 1
// openMenu.click(function(){
//   hamburgerMenu.slideToggle("fast") //fadein/fadeout
// });
//
// closeMenu.click(function(){
//   hamburgerMenu.slideToggle("fast") //fadein/fadeout
// });


//SOLUTION 2
openMenu.click(function() {
  hamburgerMenu.addClass('active');
})

closeMenu.click(function(){
  hamburgerMenu.removeClass('active');
})
