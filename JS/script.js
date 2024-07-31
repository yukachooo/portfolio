$(function(){
    //フェードイン
    $(window).on('load scroll', function (){
 
        var box = $('.fadein0');
        var animated = 'animated';
        
        box.each(function(){
        
          var boxOffset = $(this).offset().top;
          var scrollPos = $(window).scrollTop();
          var wh = $(window).height();
       
          if(scrollPos > boxOffset - wh + 100 ){
            $(this).addClass(animated);
          }
        });
      });
    $(window).on('load scroll', function (){
 
        var box = $('.js-fade');
        var animated = 'animated';
        
        box.each(function(){
        
          var boxOffset = $(this).offset().top;
          var scrollPos = $(window).scrollTop();
          var wh = $(window).height();
       
          if(scrollPos > boxOffset - wh + 100 ){
            $(this).addClass(animated);
          }
        });
      });

      $(window).on('load scroll', function (){

        var box = $('.fadein');
        var animated = 'animated';
        
        box.each(function(){
        
          var boxOffset = $(this).offset().top;
          var scrollPos = $(window).scrollTop();
          var wh = $(window).height();
      
          if(scrollPos > boxOffset - wh + 100 ){
            $(this).addClass(animated);
          }
        });
      });
      
      // フォームエラーチェック
  $('form input[type="submit"]').click(function() {
    var email = document.getElementsByName("email");

    // 必須項目がすべて埋まっているかチェック
    $('.required').each(function(i, tag) {
      if($(tag).val() == "") {
        msg = "入力されていない項目があります。";
        $(tag).css('border','1px solid #F00');
        $(tag).css('background','rgba(240,181,146,0.34)');
      } else {
        $(tag).removeAttr('style');
      }
    });

  });
});