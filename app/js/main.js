$(document).ready(function() {
  var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
  $('#js-centered-navigation-menu').removeClass("show");

  menuToggle.click( function(e) {
    e.preventDefault();
    $('#js-centered-navigation-menu').slideToggle(function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });

  $('.nav-link').click( function(){
    $('#js-centered-navigation-menu').slideToggle(0, function(){
      if($('#js-centered-navigation-menu').is(':hidden')) {
        $('#js-centered-navigation-menu').removeAttr('style');
      }
    });
  });

  $('.circle-down').click(function(){
    nextSection = $(this).parent().next();
    $('html, body').animate({
        scrollTop: nextSection.offset().top
    }, 1000);

  })
});
