$(function () {

  //equip
  const swiper = new Swiper(".equip_list", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    navigation: {
      nextEl: '.eq_next',
      prevEl: '.eq_prev',
    },
    loop: true,
    breakpoints: {
      1400: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      1000: {
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      100: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true
      }
    }
  });

  // media
  $(".news_01").mouseenter(function () {
    $(".news_01").css({ "border-top": "2px solid #85b525", "border-bottom": "2px solid #85b525" })
  });
  $(".news_01").mouseleave(function () {
    $(".news_01").css({ "border-top": "2px solid rgba(3, 3, 3, 0.5)", "border-bottom": "2px solid rgba(3, 3, 3, 0.5)" })
  });

  $(".news_02").mouseenter(function () {
    $(".news_01").css({ "border-bottom": "0" });
    $(".news_02").css({ "border-top": "2px solid #85b525", "border-bottom": "2px solid #85b525" })
  });

  $(".news_02").mouseleave(function () {
    $(".news_01").css({ "border-bottom": "2px solid rgba(3, 3, 3, 0.5)" });
    $(".news_02").css({ "border-top": "0", "border-bottom": "2px solid rgba(3, 3, 3, 0.5)" })
  });

  /* cs */
  $(".cs .cs_wrap .cs_box:nth-child(2)").mouseenter(function () {
    $(".cs .cs_wrap").css("background-image", "url('img/main/cs_bg02.png')");
  });
  $(".cs .cs_wrap .cs_box:nth-child(1)").mouseenter(function () {
    $(".cs .cs_wrap").css("background-image", "url('img/main/cs_bg01.png')");
  });
});