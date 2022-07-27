$(function(){

  var $btn = $('.banner-wrap input');
  var btnCount = $btn.length;   //input 태그 개수
  var speed = 2000;            //슬라이드 시간(ms)
  var i = 0;                   //INDEX

  function check(){
  
    if(i < btnCount) { //i가 4보다 작으면 1을 클릭해라(index 기준 2번째가됨) if문 이용해서 반복실행
      i++;
      $btn.eq(i).click(); //eq - 형제찾기
    } else {
      i = 0;
      $btn.eq(i).click();
    }
  }

  //speed ms 마다 check 실행   호출문 - setInterval (실행할 내용, 시간)
  var slide = setInterval(check,speed); //내가 지정한 시간이 지나면 실행을해라 계속해서
});

