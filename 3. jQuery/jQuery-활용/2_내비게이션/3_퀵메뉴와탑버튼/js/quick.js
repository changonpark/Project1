$(function(){

  var $win = $(window);        //브라우저
  var $qm  = $('#qm');         //퀵메뉴 ul
  var $qma = $('#qm > li > a') //퀵메뉴 내부 a
  var delay= 300;              //대기시간(ms)

// (1) 스크롤 발생시 퀵메뉴 상단 배치 0.3초후에 따라오게
// $win.scroll(function(){
//   var pos = $(this).scrorllTop();
//   $qm.stop().animate({top: pos}, delay);
// });

// (2) 스크롤 발생시 퀵메뉴 가운데 배치
// 최초 로딩시 퀵메뉴를 세로 가운데 배치  전체 절반자르고 퀵메뉴 반만큼 더 올리는 식
var mpos = $win.height() / 2 - $qm.height() / 2;
$qm.css('top', mpos);

$win.scroll(function(){
  var pos = $(this).scrollTop() + mpos;
  $qm.stop().animate({ top: pos }, delay); //스크롤발생했을때 그만큼 추가해줘야 가운데에 있기 때문에 추가해주는식
  scrollSpy();
});

// 퀵메뉴 클릭시 페이지 이동
$qma.click(function(){

  var go = $(this).attr('href') //내부링크 아이디
  var speed = 1000;             //이동속도(ms)

//페이지 이동 애니메이션
$('html, body').animate({
  scrollTop: $(go).offset().top
}, speed);

// offset().top ---- document 기준(절대) top
// position().top -- 부모 요소 기준 (상대) top

// 퀵메뉴 클릭시 .on 추가/제거
$($qma).removeClass('on'); //이전 선택된.on 제거
$(this).addClass('on');

  return false; //앵커태그 들어가기 때문에
});

//스크롤 추적 - scrollspy    스크롤을 했을때도 메뉴가 바뀌어야 되기 때문
function scrollSpy(){
  $('div.contents > div').each(function(){
    if ($(this).offset().top - $win.scrollTop() < 20) { //해당 위치값에서 스크롤 탑값을 뺀것이 20보다 작을때
      $qma.removeClass('on');                           //기존 on클래스를 빼고 / 포커스를 빼고 / 속성을 찾는데
      $qma.blur();
      $qm.find('[href=#' + $(this).attr('id') + ']').addClass('on'); //해당영역의 id값을 찾고 on클래스 붙여라.
    }
  });
}

//새로고침 시 맨 위로 강제 이동
  $qma[0].click(); //앵커태그 첫번째 클릭

//브라우저 높이를 계산하여 #page1의 height 적용
function fit(){
  var wh = $win.height(); //현재 브라우저의 높이 가져와서
  $('#page1').css('height', wh); // 높이 값을 wh로 해라. 
}

// 최초 로딩시 fit() 적용
  fit(); //여기까지 하면 처음 한번만 사용이 된다. 그래서  밑의 재적용되도록 resize

// 브라우저 크기 변경시 높이 적용
$win.resize(function(){ fit();});
});

//풀스크린 만들때 굉장히 많이 쓰는 코드이다.