var hamburgerMenu = $('.hamburger-menu');

var openMenu = $('.fa-bars');

var closeMenu = $('.fa-times');


openMenu.click(function(){
  hamburgerMenu.slideToggle("fast") //fadein/fadeout
});

closeMenu.click(function(){
  hamburgerMenu.slideToggle("fast") //fadein/fadeout
});
