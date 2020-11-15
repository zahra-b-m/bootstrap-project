 $(function() {
    var header = $(".navbar-default");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
     
     /* stop cycling carousel  */
     $('#myCarousel').carousel({
  wrap: false
});
});


