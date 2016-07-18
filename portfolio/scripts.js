$(document).ready(function(){

  $('#link-about').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#about').offset().top
    }, 300);
  });

  $('#link-portfolio').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#portfolio').offset().top
    }, 600);
  });

  $('#link-contact').on('click', function(){
    $('html, body').animate({
      scrollTop: $('#contact').offset().top
    }, 900);
  });

});
