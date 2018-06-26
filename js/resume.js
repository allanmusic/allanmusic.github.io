(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

console.log("started");

$("#button1").on("click",function(){
  $("#form").show();
  console.log("button clicked");
});

$("input[type=text]").on("keypress",function(e){

  let password = $(this).val();

  if(e.which===13){
    console.log($(this).val());
   
    if( password !== "allan"){
      $("#purchaseWrong").show();
      $(this).val("");
    }
    else{
      $("#purchase").show();
      $("#purchaseWrong").hide();
      $(this).val("");
    }
  }
  
  console.log(e.which);
});