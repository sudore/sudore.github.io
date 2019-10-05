//= require_self


$(document).ready(function () {

    //  NavBar Effect
    var $navBar = '#main-nav';

    $('body').scroll(function () {
        if ($('body').scrollTop() > 20) {
            $($navBar).removeClass('navbar-dark').addClass('sudore-nav navbar-light');
            console.log('if is working!');
        } else {
            $($navBar).removeClass('sudore-nav navbar-light').addClass('navbar-dark');
            console.log('else!!!');
        }
    });



    /**
     * 
     * Back to top
     * 
     */

    // ===== Scroll to Top ==== 
    $('body').scroll(function () {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function () {      // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 200);
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
