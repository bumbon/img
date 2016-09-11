(function($) { 
    /*
     * Настройки скрипта
     */
    var defaults = {
            total : 25,
            ofTop: 300,
            ofLeft: 300,
            on:'#clouds',
            twinkle: 0.1,
            minPixel: 1,
            maxPixel: 4,
            color: '#fef'
    };
    $.firefly = function(settings) {
 
            $.firefly.settings = $.extend({}, defaults, settings);
            $.firefly.eleHeight = $($.firefly.settings.on).height();
            $.firefly.eleWidth = $($.firefly.settings.on).width();
            
            if($.firefly.settings.on!=='document.body'){
                var off = $($.firefly.settings.on).offset();
                $.firefly.offsetTop = off.top;
                $.firefly.offsetLeft = off.left;
                $.firefly.eleHeight = $($.firefly.settings.on).height();
                $.firefly.eleWidth = $($.firefly.settings.on).width();
            }
            else{
                $.firefly.offsetTop = 0;
                $.firefly.offsetLeft = 0;
                $.firefly.eleHeight = $(document.body).height();
                $.firefly.eleWidth = $(document.body).width();
            }
            for (i = 0; i < $.firefly.settings.total; i++){
 
                $.firefly.fly($.firefly.create($.firefly.randomPixel($.firefly.settings.minPixel, $.firefly.settings.maxPixel)));
            }
            return;
    };
     
    /*
     * Public Functions
     */
 
     $.firefly.create = function(pixelSize){
        spark = $('<div>').hide();
 
        if($.firefly.settings.on === 'document.body')
            $(document.body).append(spark);
        else
            $($.firefly.settings.on).append(spark);
         
 
 
 
        return spark.css({'position':'absolute',    
                        'width' : pixelSize,
                        'height': pixelSize,
                        'background-color': $.firefly.settings.color,
                        'z-index': $.firefly.random(20), //under all the stuff
                        top: $.firefly.offsetTop + $.firefly.random(($.firefly.eleHeight-500)),  //offsets
                        left:  $.firefly.offsetLeft + $.firefly.random(($.firefly.eleWidth-450)) //offsets
                        }).show();
 
     }
     
 
 
$.firefly.fly = function(sp) {
   
  $(sp).animate({
      top: $.firefly.offsetTop + $.firefly.random(($.firefly.eleHeight-700)),    //offsets
      left: $.firefly.offsetLeft + $.firefly.random(($.firefly.eleWidth-950)),
      opacity: $.firefly.opacity($.firefly.settings.twinkle)
  }, (($.firefly.random(10) + 5) * 2000),function(){  $.firefly.fly(sp) } );
};
 
$.firefly.stop = function(sp) {
  $(sp).stop();
};
 
 
 
$.firefly.randomPixel = function(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
$.firefly.random = function(max) {
    return Math.ceil(Math.random() * max) - 1;
}
// set twinkle.
$.firefly.opacity = function(min)
{
        op= Math.random();
        if(op < min)
                return 0;
        else
                return 1;
}       
})(jQuery);
        $(document).ready(function() {
    $.firefly();    
});


// total : 25 - это количество движущихся точек. Если надо больше или меньше, просто напишите свое значение.
// on:'document.body' - это блок внутри которого будут двигаться точки. В примере это весь body сайта. Если надо только в пределах какого-то div, то просто вставьте его класс или ID. Например:
// on:'.block' или on:'#block'.
// minPixel: 1 - минимальный размер точки в пикселях, в примере 1 пиксель.
// maxPixel: 2 - максимальный размер точек.
// color: '#f30' - цвет точек.
    
