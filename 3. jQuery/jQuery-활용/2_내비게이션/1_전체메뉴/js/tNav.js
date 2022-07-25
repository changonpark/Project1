// js/tNav.js
// 제작 개요
// 1) '전체메뉴열기' 클릭 -> 전체 메뉴가 보여지고 사라지게...
// 2) '닫기(X)' 버튼 클릭 -> 전체 메뉴 숨기기
// 3) '전체메뉴열기' 클릭 -> 텍스트 변경 (토글기능)
// 4) 웹 접근성 고려 -> TAB 키 활성화

// 1. 기본형
// $(function(){

//   //전체메뉴 열기 클릭시 발생하는 이벤트
//   $( '#navBtn').click(function(){

//     //전체메뉴 열고 닫기
//     // $('#gnb').toggle();
//     $('#gnb').slideToggle(600);
//   });

//   //닫기(X) 클릭시 메뉴 숨기기
//   $('#close').click(function(){

//     //$('#gnb').hide()'
//     $('#gnb').slideUp(600);
//   });

// });


// 2. 고오급형
$(function(){

//닫기 함수
 function txtClose(){
  $('#navBtn > span').text('전체메뉴닫기');
  $('#navBtn > i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
}
//txtClose(); //실행 테스트

//열기 함수
function txtOpen(){
  $('#navBtn > span').text('전체메뉴열기');
  $('#navBtn > i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
}

//전체 메뉴의 열리고 닫힌 상태를 판단하는 변수
var flag = false;

//전체메뉴열기 클릭시 발생하는 이벤트 - navBtn에 클릭 이벤트가 발생하면
$('#navBtn').on('click', function(){

//전체메뉴를 슬라이스로 열고 닫기
$('#gnb').stop().slideToggle(600);

//전체 메뉴 상태에 따라 함수를 실행하는 제어문 - 열렸다 닫혔다 할 수 있게 해놓은것.
if(flag){      //메뉴가 열려있으면
  txtOpen();
  flag = false;
} else {       //메뉴가 닫혀있으면
  txtClose();
  flag = true;
}
});

// 닫기(X) 버튼 클릭시 메뉴 숨기기(탭키 포함)
$('#close').on('click blur', function(){
  $('#gnb').slideUp(600);
  txtOpen();
  flag = false;
});
});