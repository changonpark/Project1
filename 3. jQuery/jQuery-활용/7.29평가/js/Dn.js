$(function(){

  var $gnb      = $('#gnb > li');
  var $sub      = $('.sub');
  var headerMin = $('#headerWrap').height();
  var headerMax = headerMin + $sub.innerHeight();
  var speed     = 200;
  var flag      = false;


$sub.hide();


$gnb.mouseenter(function(){

  if( !flag ){
    $('#headerWrap').stop().animate({ 
      height: headerMax
    }, speed, function(){
      $sub.stop().fadeIn(speed);
    });
    flag = true;
  }
});


$gnb.mouseleave(function(){

  $(this).find('a').removeClass('on');


  $(this).find('ul').removeClass('on');
});


$('#head').mouseleave(function(){
  $sub.stop().fadeOut(speed, function(){
    $('#headerWrap').stop().animate( {height: headerMin}, speed);
  });
  flag = false;
});

});