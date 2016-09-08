$(document).ready(function(){
        var $dropdown = $("#dropdown");
        
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 700 && $dropdown.hasClass("default") ){
                $dropdown.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 700 && $dropdown.hasClass("fixed")) {
                $dropdown.removeClass("fixed").addClass("default");
            }
        });//scroll
        
        
        
        //плавний скрол меню
        
        $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
        });
        
       //плавний скрол випад. меню
         $("#dropdown").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
        });
    //collaps trees
         $("#hide-t").click(function(){
         $("div.collaps-t").hide(1000);
         });
         $("#show-t").click(function(){
         $("div.collaps-t").show(1000);
         });
    //collaps flowers
         $("#hide-f").click(function(){
         $("div.collaps-f").hide(1000);
         });
         $("#show-f").click(function(){
         $("div.collaps-f").show(1000);
         });
         
        $(function() {
          $('#btn-send').click(senForm);
          });

        function senForm(e) {
            e.preventDefault(); //
            $.ajax({
                url: "https://formspree.io/i.shyyka@ukr.net",
                method: "POST",
                data: {
                    
                    email: $('#email').val(),
                    message: $('#msg').val(),
                    name: $('#name').val()
                },
                dataType: "json",
                success: function () {
                    $('#thanks').html('Thank you for contact');
                }
            });
        }
        
    });
