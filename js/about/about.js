$(function () {
  //counter section
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
  //products_contain section
  $(".products_contain").slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<i class="fa-solid fa-caret-left products_contain_arrow"></i>',
    nextArrow: '<i class="fa-solid fa-caret-right products_contain_arrow"></i>',
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //review_contant section
  $(".review_contant").slick({
    speed: 300,
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: "review_dots",
  });
  //instagram_contain section
  $(".instagram_contain").slick({
    arrows: false,
    dots: true,
    dotsClass: "instagram_dots",
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
 });
 new VenoBox({
  selector: ".my-image-links",
  numeration: true,
  infinigall: true,
  spinner: "rotating-plane",
});

