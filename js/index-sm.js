$(document).ready(function(){
        var $dropdown = $("#dropdown");
        
        
        
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 10 && $dropdown.hasClass("default") ){
                $dropdown.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 10 && $dropdown.hasClass("fixed")) {
                $dropdown.removeClass("fixed").addClass("default");
            }
        });//scroll
    });