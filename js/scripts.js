$(document).ready(function() {

  // Mobile menu links
  $('#mobile-menu-overlay ul li').click(function() {
    var target = $(this).attr('data-target');
    var section = $('#' + target);
  });

  // Click event for 'Skills' nav item
  $('.nav-item[data-target="skills"]').click(function(e) {
    e.preventDefault();
    
    // If you want to hide all other sections
    $('section').not('#skills').fadeOut(500);

    // Now show the skills section
    $('#skills').addClass('active-section').fadeIn(500, function() {
      // This callback is optional and can be used to perform actions after the fade in is complete
    });
  });

  // // If you have a close button in the skills section, you can use the following:
  // $('#skills .close-button').click(function() {
  //   $('#skills').removeClass('active-section').fadeOut(500);
  // });

  // Click event for close button
  $('#skills .close-button').click(function() {
    $('#skills').fadeOut(500);
  });
});