$(function (){

  var $navmenu = $('.navmenu')
  var basket = false;


  $('#nav > li > a').hover( function () {
    var $hover = $(this).attr('class')
    if ( $hover == 'aRed')
    {} else { 
      $(this).css("color", "#d59855")
    }
  }, function () {
    var $hover = $(this).attr('class')
    if ( $hover == 'aRed')
    {} else { 
      $(this).css("color", "#000")
    }
  });

  $('.menuopen').hover( function () {
      $(this).css("color", "#d59855")
    },function () {
      $(this).css("color", "#000")
    });

  $('.navmenu dl dd a').hover( function () {
    $(this).css('text-decoration', 'underline')
  }, function () {
    $(this).css('text-decoration', 'none')
  });
  // 2차메뉴 클릭토글 효과
  $('.menuopen').click(function () {
    var $mc = $(this).attr('class')
    console.log($mc)
    $('.cnt').toggleClass('on1')
    if ( $mc == 'menuopen mav1') {
      $('.contents').toggleClass('on1')
      $('.contents').removeClass('on2')
      $('.contents').removeClass('on3')
      $('.contents').removeClass('on4')
      $('.cnt').toggleClass('onf')
      $('.cnt').removeClass('ons')
      $('.cnt').removeClass('ont')
      $('.cnt').removeClass('ong')
      $('.nav2').stop().fadeOut(200)
      $('.nav3').stop().fadeOut(200)
      $('.nav4').stop().fadeOut(200)
      $('.nav1').stop().fadeToggle(200)
    } else if ( $mc == 'menuopen mav2' ) {
      $('.contents').toggleClass('on2')
      $('.contents').removeClass('on3')
      $('.contents').removeClass('on4')
      $('.contents').removeClass('on1')
      $('.cnt').toggleClass('ons')
      $('.cnt').removeClass('onf')
      $('.cnt').removeClass('ont')
      $('.cnt').removeClass('ong')
      $('.nav2').stop().fadeToggle(200)
      $('.nav3').stop().fadeOut(200)
      $('.nav4').stop().fadeOut(200)
      $('.nav1').stop().fadeOut(200)
    } else if ( $mc == 'menuopen mav3') {
      $('.contents').toggleClass('on3')
      $('.contents').removeClass('on4')
      $('.contents').removeClass('on1')
      $('.contents').removeClass('on2')
      $('.cnt').toggleClass('ont')
      $('.cnt').removeClass('onf')
      $('.cnt').removeClass('ons')
      $('.cnt').removeClass('ong')
      $('.nav3').stop().fadeToggle(200)
      $('.nav4').stop().fadeOut(200)
      $('.nav1').stop().fadeOut(200)
      $('.nav2').stop().fadeOut(200)
    } else {
      $('.contents').toggleClass('on4')
      $('.contents').removeClass('on1')
      $('.contents').removeClass('on2')
      $('.contents').removeClass('on3')
      $('.cnt').toggleClass('ong')
      $('.cnt').removeClass('onf')
      $('.cnt').removeClass('ons')    
      $('.cnt').removeClass('ont')
      $('.nav4').stop().fadeToggle(200)
      $('.nav1').stop().fadeOut(200)
      $('.nav2').stop().fadeOut(200)
      $('.nav3').stop().fadeOut(200)
    }
  });

  var $win      = $(window);
  var $header   = $('header');
  var hh        = $header.height();
  var $gnb      = $('.nava');
  var asc       = 100;

  $win.scroll( function () {

    if ( $win.scrollTop() > hh + asc ) {
      // hh + asc가 윈도우 스크롤보다 낮을때
      $gnb.css( {
        position: 'fixed',
        top: 0,
        zIndex: 1000,
      });
      $('.cnt').css({
        position: 'fixed',
        top: 0,
      });
      $('.logo_right').css({
        position: 'fixed',
        top: 0, right: 0,
        background: '#000',
        height: '40px',
        'line-height': '40px',
        zIndex: 9999,
      });
      $('.shoppingbag').css({
        'line-height': '20px',
      });
    } else {
      $gnb.css( {
        position: '',
        left: 0,
      });
      $('.cnt').css({
        position: 'absolute',
        top: '170px',
      });
      $('.logo_right').css({
        position: 'absolute',
        top: '20px', right: 0,
        background: 'trasparnet',
        height: '0',
        'line-height': '20px',
        zIndex: 9999,
      });
    }
  });
  $('.banner').flickity({
    cellAlign: 'right',
    contain: true,
    draggable: false,
    freeScroll: true,
    fullscreen: true,
    lazyLoad: 1,
    autoPlay: true,
    wrapAround: true,
  });

});