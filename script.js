AOS.init({
    duration: 1000
   });


   $( document ).ready(function() {
    $(".nav-link").each(function() {
        
        $(this).click(function() {
            
            $('#navbarNavAltMarkup').collapse("hide");
        });

        
    });
  });