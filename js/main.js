// scroll to anchors

$(function() {
    var $menu = $("#menu"); 
    $(window).scroll(function() {
        if ($(this).scrollTop() > 70 && $menu.hasClass("default")) {
            $menu.removeClass("default").addClass("fixed");
            $(".logo-1").hide();
            $(".logo-2").show();
        } else if ($(this).scrollTop() <= 70 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").animate( "1000" ).addClass("default");
            $(".logo-2").hide();
            $(".logo-1").show();
        }
    });      
});

// scroll animation to anchors

$(function() {    
    $("ul li a , a.btn").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination-60 }, 1000);
    });
});

//animation scroll to top

$(function() {
    $('.backtop').click(function(){
       $('html, body').animate({scrollTop:0}, 1000);
   });
});

$( ".sr-icons" ).animate({
    height: "200px",
    width: "200px",
}, "slow" );