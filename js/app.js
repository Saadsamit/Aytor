 //home page start
$(function () {
  $("#cancel_preloader").on("click", function () {
    //preloader section
    $("#preloader").fadeOut(1000);
  });
  $(window).on("load", function () {
    $("#preloader").fadeOut(1000);
  });
  $(window).on("scroll", function () {
    var scrollSize = $(window).scrollTop();
    //nav section
    if (scrollSize > 80) {
      $("#nav").addClass("active");
    } else {
      $("#nav").removeClass("active");
    }
    if (scrollSize > 80) {
      $("#side_nav").addClass("active");
    } else {
      $("#side_nav").removeClass("active");
    }
    //back to top section
    if (scrollSize > 200) {
      $("#back_to_top").addClass("active");
    } else {
      $("#back_to_top").removeClass("active");
    }
  });
  //popup section
  $('#popup_cancel').on("click", function(){
    $('#popup_container').fadeOut(1000);
  });
  //back to top section
  $("#back_to_top").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  $("#search_btn").on("click", function () {
    $("#Search").addClass("active");
  });
  $(".cancel_btn").on("click", function () {
    $("#Search").removeClass("active");
  });
  //banner section
  $(".banner_contain").slick({
    arrows: false,
    dots: true,
    dotsClass: "banner_item_dots",
    autoplay: true,
  });
  $(".products_contain").slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:
      '<i class="fa-solid fa-chevron-left products_contain_arrow"></i>',
    nextArrow:
      '<i class="fa-solid fa-chevron-right products_contain_arrow"></i>',
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //deals section
  $("#clock").countdown("2023/12/31", function (event) {
    var $this = $(this).html(
      event.strftime(
        "" +
          '<div class="deals_countdown_time"><span>%D</span><span>Days</span></div>' +
          '<span class="saparator">:</span>' +
          '<div class="deals_countdown_time"><span>%H</span><span>Hour</span></div>' +
          '<span class="saparator">:</span>' +
          '<div class="deals_countdown_time"><span>%M</span><span>Minute</span></div>' +
          '<span class="saparator">:</span>' +
          '<div class="deals_countdown_time"><span>%S</span><span>Sec</span></div> '
      )
    );
  });
  $(".deals_banner").slick({
    arrows: false,
    slidesToShow: 2,
    dots: true,
    dotsClass: "deals_item_dots",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  //Latest News section
  $(".latest_news_slide").slick({
    arrows: false,
    slidesToShow: 3,
    dots: true,
    dotsClass: "latest_news_item_dots",
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
    //blog_classic js
    $(".blog_img").slick({
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:
        '<i class="fa-solid fa-chevron-left blog_img_arrow"></i>',
      nextArrow:
        '<i class="fa-solid fa-chevron-right blog_img_arrow"></i>',
      autoplay: true,
    });
  });

  //home page end
  new VenoBox({
    selector: ".video_link",
  });
