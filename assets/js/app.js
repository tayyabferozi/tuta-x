$("#slick").slick({
  centerMode: true,
  centerPadding: "50px",
  slidesToShow: 3,
  arrows: true,
  nextArrow:
    '<button type="button" class="slick-next"><img src="./assets/vectors/right-arrow-slider.svg" /></button>',
  prevArrow:
    '<button type="button" class="slick-prev"><img src="./assets/vectors/left-arrow-slider.svg" /></button>',
  responsive: [
    {
      breakpoint: 1068,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 650,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 650,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
      },
    },
  ],
});

function hideSideBar() {
  $(".nav-sm").removeClass("active");
  setTimeout(function () {
    $("#dark-overlay").removeClass("active");
  }, 500);
}

$("#nav-toggler").click(function () {
  $(".nav-sm").addClass("active");
  $("#dark-overlay").addClass("active");
});

$("#dark-overlay").click(hideSideBar);

$(".nav-sm li").click(hideSideBar);
