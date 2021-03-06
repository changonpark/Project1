$(function(){

  var $win    = $(window);         //브라우저
  var $header = $('header');       //header
  var hh      = $header.height();  //header의 높이
  var $gnb    = $('#gnb');         //#gnb
  var $gu     = $gnb.find('ul')    //#gnb 내부 ul
  var uw      = $gu.width();       //#gnb 내부 ul의 너비
  var uhw     = uw / 2;            //ul 너비의 1/2
  var asc     = 100;               //추가 스크롤 값

  $win.scroll(function(){

    if($win.scrollTop() > hh + asc){
      $gnb.css({
        position: 'fixed',
        top: 0,
        left: 'calc(50% - ' + uhw + 'px)', //가운데 배치
        zIndex: 1000
      });
      $gu.addClass('sticky');
    } else {
      $gnb.css({
        position: '',// 초기값으로 돌려준다. 초기값으로 돌리면 바뀌지 않도록.
      });
      $gu.removeClass('sticky');
    }
  });
});