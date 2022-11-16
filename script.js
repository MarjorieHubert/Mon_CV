AOS.init({
    duration: 1000
   });


   $( document ).ready(function() {
    $(".nav-link").each(function() {
        
        $(this).click(function() {
            
            $('#navbarNavAltMarkup').collapse("hide");
        });

        
    });
    $( window ).scroll(function() {
        

        if ($(document).scrollTop()>=$('#propos').offset().top-100) {
            $( ".topUp" ).css( "display", "block" );
        } else {
            $( ".topUp" ).css( "display", "none" );
        }

       
        
      });
  });