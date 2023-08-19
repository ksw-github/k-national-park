// 모달창
const saveCh = JSON.parse(localStorage.getItem("checked"));
if (saveCh) {
  $(".modal").removeClass("on");
  $(".modal").hide();
} else {
  $(".modal").addClass("on");
  $(".modal").show();
}
const chk = $(".modal").find("#chk");
let isChk = false;
chk.on("change", function(){
  isChk = $(this).prop("checked");
  localStorage.setItem("checked", isChk);
});
$(".modal").find(".close").on("click", function(){
  $(".modal").removeClass("on");
  $(".modal").hide();
});

// 메인비주얼슬라이드
const visualSlider = $(".visualSlider");

visualSlider.slick({
  autoplay: true,
  autoplaySpeed: 1900,
  speed: 500,
  pauseOnHover: true,

  arrows: true,
  prevArrow: $(".visualWrap").find(".prevBtn"),
  nextArrow: $(".visualWrap").find(".nextBtn"),
  
  dots: true,
  appendDots: $(".dots"),
  dotsClass: "customDots",
});

//메인비주얼재생정지
$(".visualWrap").find(".pauseBtn").on("click",function(){
  visualSlider.slick("slickPause");
  $(this).removeClass("active");
  $(".visualWrap").find(".playBtn").addClass("active");
});

$(".visualWrap").find(".playBtn").on("click",function(){
  visualSlider.slick("slickPlay");
  $(this).removeClass("active");
  $(".visualWrap").find(".pauseBtn").addClass("active");
});

//메인검색란 오른쪽배너
const miniBrnSilder = $(".mainBnrSearch").find(".brnSilder");
miniBrnSilder.on("init", function(e, s){
  $(".pageCount").text((s.currentSlide+1)+" / "+s.slideCount);
});
miniBrnSilder.slick({
  vertical: true,

  arrows: true,
  prevArrow: $(".mainBnrSearch").find(".prevBtn"),
  nextArrow: $(".mainBnrSearch").find(".nextBtn"),
});
miniBrnSilder.on("beforeChange", function(e, s, c, n){
  $(".pageCount").text(`${n+1} / ${s.slideCount}`);
});

//탐방통제정보
$(".controlWrap").find(".cardList").slick({

  autoplay: true,
  autoplaySpeed: 1900,
  speed: 500,
  // variableWidth: true,
  slidesToShow: 6,
  arrows: true,
  prevArrow: $(".controlWrap").find(".prevBtn"),
  nextArrow: $(".controlWrap").find(".nextBtn"),
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

//알림
$(".notice").find(".noticeList").slick({
  fade: true,
  speed: 0,
  arrows: false,
});
$(".notice .noticeTap").find("button").on("click", function() {
  const index = $(this).index();
  $(".notice").find(".noticeList").slick("slickGoTo", index);
  $(this).addClass("active").siblings().removeClass("active");
});

//알림 뉴스
$(".notice").find(".newsList").slick({
  fade: true,
  speed: 0,
  arrows: false,
});
$(".notice .newsTap").find("button").on("click", function(){
  const index = $(this).index();
  $(".notice").find(".newsList").slick("slickGoTo", index);
  $(this).addClass("active").siblings().removeClass("active");
});

//지도슬라이드
$(".mapSlider").on("init", function(e, s){
  $(".mapWrap").find(".txtInfo").eq(0).addClass("active");
});

$(".mapSlider").slick({
  autoplay: true,
  fade: true,

  dots: true,
  appendDots: $(".mapWrap").find(".txtDots"),
  dotsClass: "customDots",
  customPaging: function(s, i){
    const imgalt = s.$slides.eq(i).find("img").attr("alt");
    return imgalt;
  },

  arrows: true,
  prevArrow: $(".mapWrap").find(".prevBtn"),
  nextArrow: $(".mapWrap").find(".nextBtn"),

});
// 지도슬라이드 비포체인지
$(".mapSlider").on("beforeChange", function(e, s, c, n){
  $(".mapWrap").find(".txtInfo").eq(n).stop().addClass("active");
  $(".mapWrap").find(".txtInfo").eq(n).stop().siblings().removeClass("active");
});

//sns슬라이드
$(".snsSlider").on("init", function(e, s){
  $(".snsWrap").find(".progress").css({
    width : ((s.currentSlide + 1) / s.slideCount) * 100 + "%",
  });
});
$(".snsSlider").slick({
  slidesToShow: 3,
  speed: 400,
  // centerMode: true,
  // variableWidth: true,

  arrows: true,
  prevArrow: $(".snsWrap").find(".prevBtn"),
  nextArrow: $(".snsWrap").find(".nextBtn"),

  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2
      }
    }
  ],
});

$(".snsSlider").on("beforeChange", function(e, s, c, n){
  $(".snsWrap").find(".progress").css({
    width : ((n+1) / s.slideCount) * 100 + "%",
  });
});

//푸터배너슬라이드
$(".footerSlider").slick({
  // autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  slidesToShow: 8,
  
  arrows: true,
  prevArrow: $(".footerBrnWrap").find(".prevBtn"),
  nextArrow: $(".footerBrnWrap").find(".nextBtn"),

  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 7
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 5
      }
    },
  ],
});
//푸터배너 재생정지
$(".footerBrnWrap").find(".pauseBtn").on("click",function(){
  $(".footerSlider").slick("slickPause");
  $(this).removeClass("active");
  $(".footerBrnWrap").find(".playBtn").addClass("active");
});
$(".footerBrnWrap").find(".playBtn").on("click",function(){
  $(".footerSlider").slick("slickPlay");
  $(this).removeClass("active");
  $(".footerBrnWrap").find(".pauseBtn").addClass("active");
});

// 스크롤이벤트 : 사이트퀵, 헤더
let scrollTop = 0;
$(window).on("scroll", function(){
  scrollTop = $(this).scrollTop();
  scrollUtil();
  scrollGotop();
});
// 스크롤유틸
function scrollUtil () {
  if (scrollTop > 200) {
    $("header").find(".headerUtil").addClass("active");
  } else {
    $("header").find(".headerUtil").removeClass("active");
  }
}
// 스크롤탑버튼
function scrollGotop () {
  if (scrollTop > 700) {
    $(".floatingMenu").addClass("on");
  } else {
    $(".floatingMenu").removeClass("on");
  }
}