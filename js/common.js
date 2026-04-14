$(function () {

  //depth2
  $(".gnb > li").mouseenter(function () {
    $(".depth2_bg").stop().fadeIn();
    $(this).children(".depth2").stop().fadeIn();
  });

  $(".gnb > li").mouseleave(function () {
    $(".depth2_bg").stop().fadeOut();
    $(this).children(".depth2").stop().fadeOut();
  });

  $(".gnb > li:nth-child(3)").mouseenter(function () {
    $(".depth2_bg").stop().fadeOut();
  });

  // mgnb
  $(".mdepth2").hide();
  $(".ham").click(function () {
    $(".mgnb_wrap").fadeIn();
    $(".mgnb_box").animate({
      "right": "0"
    });
    $("body").css("overflow", "hidden");
  });

  $(".mgnb_close").click(function () {
    $(".mgnb_wrap").fadeOut();
    $(".mgnb_box").animate({
      "right": "-50%"
    });
    $("body").css("overflow", "auto");
  });

  if ($(window).width() < 768) {
    $(".mdepth2").show();
    // window 크기가 768보다 작을때
  } else {
    $(".mgnb > li").click(function () {
      $(".mgnb > li").not($(this)).children(".mdepth2").slideUp();
      $(this).children(".mdepth2").slideToggle();
    });
    // window 크기가 768보다 클때
  }

  $(window).resize(function () {
    if ($(window).width() < 768) {
      $(".mdepth2").show();
      // window 크기가 768보다 작을때
    } else {
      $(".mgnb > li").not($(this)).children(".mdepth2").slideUp();
      $(this).children(".mdepth2").slideToggle();
      // window 크기가 768보다 클때
    }
  });

  //lang
  $(".kr").click(function () {
    $(".lang > ul").slideToggle();
  });


  $(".lang ul li a").click(function (e) {
    var langText = $(this).text();
    alert(" 현재 준비 중입니다. 빠른 시일 내에 서비스할 예정입니다.");
  });

  //pop_up
  $(".footer_link > li:nth-child(3)").click(function () {
    $(".privacy").fadeIn();
  });
  $(".pop_close").click(function () {
    $(".privacy").fadeOut();
  });
  $(".footer_link > li:nth-child(4)").click(function () {
    $(".email").fadeIn();
  });
  $(".pop_close").click(function () {
    $(".email").fadeOut();
  });

  //quick_menu
  $("a[href^='#']").click(function () {
    event.preventDefault();  // 기본 a링크 동작 방지
    let target = $(this.hash);
    $('html, body').animate({ scrollTop: target.offset().top }, 1500);
  });
});