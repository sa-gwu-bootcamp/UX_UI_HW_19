$(document).ready(function() {
    // Smooth scrolling for nav links
    $('header ul li').click(function() {
      var link = $(this).text().toLowerCase();
      $('html, body').animate({
        scrollTop: $('#' + link).offset().top
      }, 1000);
      return false;
    });
  
    // Mobile menu toggle
    $('#hamburger-menu').click(function() {
      $('#mobile-menu-overlay').fadeToggle(500);
    });
  
    // Mobile menu links
    $('#mobile-menu-overlay ul li').click(function() {
      var link = $(this).text().toLowerCase();
      $('html, body').animate({
        scrollTop: $('#' + link).offset().top
      }, 1000);
      $('#mobile-menu-overlay').fadeOut(500);
    });
  });