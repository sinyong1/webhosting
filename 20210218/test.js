$(window).scroll(function( ){
    var position = $(window).scrollTop()+35;
    $( "#banner" ).stop().animate({top:position+"px"}, 800);
    });
    
