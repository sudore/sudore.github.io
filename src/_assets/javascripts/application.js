//= require_self


// Navbar invisible

$(document).ready(function () {

    //  Cache dos caminhos
    var $navBar = '#main-nav';

    $('body').scroll(function(){
        if ($('body').scrollTop() > 20) {
            $($navBar).removeClass('navbar-dark').addClass('sudore-nav navbar-light');
            console.log('if is working!');
        } else {
            $($navBar).removeClass('sudore-nav navbar-light').addClass('navbar-dark');
            console.log('else!!!');
        }
    });


})



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
