$(document).ready(function(){

  $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');

  });

  $(window).on('scroll load',function(){
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');

  });

  //smooth scrolling
  $('a[href*="#"]').on('click',function(e){
      e.preventDefault();

      $('html,body').animate({

          scrollTop : $($(this).attr('href')).offset().top,

      },
      500,
      'linear'
      
      
      );

  })

});


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
    strings: ["undergraduate", "Developer", "Business Analyst"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay:2000,
  });










