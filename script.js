$(document).ready(function(){
  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      // Assuming you have an element with class .top that you want to show/hide
      $('.top').show();
    } else {
      $('.top').hide();
    }
  });
});

const textElement = document.getElementById('animated-text');
const text = textElement.textContent;
let index = 0;

function typeText() {
  if (index < text.length) {
    textElement.style.visibility = 'visible';
    textElement.innerHTML = text.substring(0, index + 1);
    index++;
    setTimeout(typeText, 50); // Adjust the typing speed by changing the delay (e.g., 50ms)
  }
}

// Trigger the typing animation when the page loads
window.addEventListener('load', typeText);

 