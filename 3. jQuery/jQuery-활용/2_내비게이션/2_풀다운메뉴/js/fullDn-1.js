$( function() {

  // 2차 메뉴 숨기기
  $('.sub').hide(); //빨리 확인을 하기 위해서 원래는 css에서 작성하는 것이 맞다.

  // 호버 기능으로 2차 메뉴 슬라이딩   hover - mouseenter + mouseleave
  $('#gnb > li').hover( function(){
    $(this).find('.sub').slideDown(400); //마우스가 들어간 li태그에 대해서 자손중 .sub를 찾아서 내려라
    }, function(){
    $(this).find('.sub').slideUp(400); //마우스가 벗어나간 li태그에 대해서 자손중 .sub를 찾아서 올려라
  });
});

//없어진 방식