$(function () {
  // technical
  $(".modal_list img").hide();

  $(".skill_list li").click(function () {
    let idx = $(this).index();
    $(".t_popup").fadeIn();
    $(".modal_list img").eq(idx).fadeIn();
  });
  $(".close_btn").click(function () {
    $(".t_popup").fadeOut();
    $(".modal_list img").fadeOut();
  });

  //major
  $(".major1 .img_inner .major_list .major_img a").hide();
  $(".major1 .img_inner .major_list .major_img a").eq(0).show();

  $(".major1 .img_inner .major_list .major_main button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let idx = $(this).index();
    $(".major1 .img_inner .major_list .major_img a").eq(idx).fadeIn().siblings().hide();
  });

  //rig

  //팝업
  $(".b_list > div").hide();

  $(".land2 ul li").click(function () {
    let idx = $(this).index();
    $(".dim").fadeIn();
    $(".b_list > div").eq(idx).fadeIn();
  });

  $(".dim_close").click(function () {
    $(".dim").fadeOut();
    $(".b_list > div").fadeOut();
  });

  $(".b_list2 > div").hide();

  $(".water1_list ul li").click(function () {
    let idx = $(this).index();
    $(".dim2").fadeIn();
    $(".b_list2 > div").eq(idx).fadeIn();
  });

  $(".dim_close").click(function () {
    $(".dim2").fadeOut();
    $(".b_list2 > div").fadeOut();
  });


  $(".b_list3 > div").hide();

  $(".location01 ul li").click(function () {
    let idx = $(this).index();
    $(".dim3").fadeIn();
    $(".b_list3 > div").eq(idx).fadeIn();
  });

  $(".location .lo_list ul li").click(function () {
    let idx = $(this).index();
    $(".dim3").fadeIn();
    $(".b_list3 > div").eq(idx).fadeIn();
  });

  $(".dim_close").click(function () {
    $(".dim3").fadeOut();
    $(".b_list3 > div").fadeOut();
  });

  $(".b_list4 > div").hide();

  $(".special_list ul li").click(function () {
    let idx = $(this).index();
    $(".dim4").fadeIn();
    $(".b_list4 > div").eq(idx).fadeIn();
  });

  $(".dim_close").click(function () {
    $(".dim4").fadeOut();
    $(".b_list4 > div").fadeOut();
  });


  // 수중·해저 지형 측량
  const land2 = new Swiper(".land2", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    slidesPerView: 1,
    spaceBetween: 40,
    breakpoints: {
      768: {
        // 가로해상도가 640px 이상
        slidesPerView: 2, // 한 슬라이드에 보여줄 갯수
        spaceBetween: 40, // 슬라이드 사이 여백
      },
      1205: {
        // 가로해상도가 768px 이상
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });


  //수위 및 해양관측 테블릿
  const water1_list = new Swiper(".water1_list", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    slidesPerView: 1,
    spaceBetween: 40,
    breakpoints: {
      768: {
        // 가로해상도가 640px 이상
        slidesPerView: 2, // 한 슬라이드에 보여줄 갯수
        spaceBetween: 40, // 슬라이드 사이 여백
      },
      1205: {
        // 가로해상도가 768px 이상
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });



  //location 테블릿 모바일 버전
  const lo_list = new Swiper(".lo_list", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    slidesPerView: 1,
    spaceBetween: 40,
    breakpoints: {
      768: {
        // 가로해상도가 640px 이상
        slidesPerView: 2, // 한 슬라이드에 보여줄 갯수
        spaceBetween: 40, // 슬라이드 사이 여백
      },
      1205: {
        // 가로해상도가 768px 이상
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });


  //특수 조사·탐지
  const special_list = new Swiper(".special_list", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    slidesPerView: 1,
    spaceBetween: 40,
    breakpoints: {
      768: {
        // 가로해상도가 640px 이상
        slidesPerView: 2, // 한 슬라이드에 보여줄 갯수
        spaceBetween: 40, // 슬라이드 사이 여백
      },
      1205: {
        // 가로해상도가 768px 이상
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  //performance
  $(".performance .paging > li:nth-child(3) , .performance .paging > li:last-child").click(function () {
    $(".page01").hide();
    $(".page02").show();
    $(".paging > li:nth-child(2) > a").removeClass("on");
    $(".paging > li:nth-child(3) > a").addClass("on");
  });
  $(".performance .paging > li:nth-child(2) , .performance .paging > li:first-child").click(function () {
    $(".page02").hide();
    $(".page01").show();
    $(".paging > li:nth-child(2) > a").addClass("on");
    $(".paging > li:nth-child(3) > a").removeClass("on");
  });

  $(".mo_tab_list > li:first-child").click(function () {
    let isVisible = $(".mo_tab_list > li:not(:first-child)").is(":visible");

    // 클릭할 때마다 active 클래스 토글
    $(this).toggleClass("active");

    if (isVisible) {
      // 메뉴가 보이는 상태라면, 토글 애니메이션 완료 후 CSS 제거
      $(".mo_tab_list > li:not(:first-child)").slideToggle(function () {
        // 애니메이션이 완료된 후 실행될 콜백 함수
        $(".mo_tab_list > li:first-child").css("border-bottom", "");
        // active 클래스는 이미 위에서 제거했으므로 여기서는 추가 작업 필요 없음
      });
    } else {
      // 메뉴가 숨겨진 상태라면 즉시 CSS 적용하고 토글
      $(".mo_tab_list > li:first-child").css("border-bottom", "1px solid rgba(51,51,51,0.5)");
      // active 클래스는 이미 위에서 추가했으므로 여기서는 추가 작업 필요 없음
      $(".mo_tab_list > li:not(:first-child)").slideToggle();
    }
  });

  //performance more
  const per_list = new Swiper(".per_list", {
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000, // 슬라이드 동작 속도
    effect: "fade", // 페이드 효과
    fadeEffect: {
      crossFade: true,
    },
  });

  //faq
  $(".answer").hide();

  // 질문 버튼 클릭 시 답변 슬라이드 다운
  $(".QandAtxt_list").on("click", function () {
    $(this).find(".answer").stop().slideToggle();
    $(this).siblings().find(".answer").slideUp();
    $(this).toggleClass("on");
    $(this).siblings().removeClass("on");
  });

  $(".QandA .sub_inner .QandA_menu ul li a").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".mo_QandA_menu > li:first-child").click(function () {
    let isVisible = $(".mo_QandA_menu > li:not(:first-child)").is(":visible");

    // 클릭할 때마다 active 클래스 토글
    $(this).toggleClass("active");

    if (isVisible) {
      // 메뉴가 보이는 상태라면, 토글 애니메이션 완료 후 CSS 제거
      $(".mo_QandA_menu > li:not(:first-child)").slideToggle(function () {
        // 애니메이션이 완료된 후 실행될 콜백 함수
        $(".mo_QandA_menu > li:first-child").css("border-bottom", "");
        // active 클래스는 이미 위에서 제거했으므로 여기서는 추가 작업 필요 없음
      });
    } else {
      // 메뉴가 숨겨진 상태라면 즉시 CSS 적용하고 토글
      $(".mo_QandA_menu > li:first-child").css("border-bottom", "1px solid rgba(51,51,51,0.5)");
      // active 클래스는 이미 위에서 추가했으므로 여기서는 추가 작업 필요 없음
      $(".mo_QandA_menu > li:not(:first-child)").slideToggle();
    }
  });
});