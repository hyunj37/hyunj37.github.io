//contact toggle
var show = false;
var scrollHeight = $(document).height();
$(window).resize(function() {
    scrollHeight = $(document).height();
});

$('.contact h3').click(function(){
   if(show===false){
        $('.email').slideDown();
        $("body,html").animate({scrollTop:scrollHeight},800);
        show = true;
   }else{
        $('.email').slideUp();
        show = false;
   }
});

