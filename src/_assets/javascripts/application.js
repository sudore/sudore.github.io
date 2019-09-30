//= require_self


// // Smooth Scroll
// $(document).ready(function(){
//     // Add smooth scrolling to all links
//     $("a.nav-link").on('click', function(event) {
  
//       // Make sure this.hash has a value before overriding default behavior
//       if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();
  
//         // Store hash
//         var hash = this.hash;
  
//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         $('html, body').animate({
//           scrollTop: $(hash).offset().top
//         }, 800, function(){
  
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         });
//       } // End if
//     });
//   });


$(document).ready(function(){
  var bgleft = document.querySelector('.left-side');

  bgleft.style.backgroundImage = 'rgba(0,0,139, 0.7)';

});
