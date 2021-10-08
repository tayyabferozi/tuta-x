$(function () {
  $("#slick").slick({
    centerMode: true,
    centerPadding: "50px",
    slidesToShow: 3,
    arrows: true,
    nextArrow:
      '<button type="button" class="slick-next"><img src="./assets/vectors/right-arrow-slider.svg" /></button>',
    prevArrow:
      '<button type="button" class="slick-prev"><img src="./assets/vectors/left-arrow-slider.svg" /></button>',
    dots: true,
    responsive: [
      {
        breakpoint: 1068,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "60px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 690,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "190px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 610,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "150px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "100px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 410,
        settings: {
          arrows: false,
          centerMode: true,
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

  $(".nav-item a").click(function () {
    $(".nav-item").removeClass("active");
    $(this).parents(".nav-item").addClass("active");
  });

  $(".close").click(hideSideBar);

  $(".go-to-top").click(function () {
    $(window).scrollTop(0);
  });

  $(window).on("scroll", function (e) {
    $("#go-to-top").hide();
    let scroll = $(window).scrollTop();

    if (scroll > 600) {
      $("#go-to-top").show();
    }
  });
  AOS.init();

  // Go to home btn
  $(".go-to-top.bg").hide();
  $(".go-to-top.sm").hide();

  document.addEventListener("scroll", function () {
    let scrolledVal = document.querySelector("html").scrollTop;

    if (screen.width > 767) {
      if (scrolledVal > 560) {
        $(".go-to-top.bg").show();
      } else {
        $(".go-to-top.bg").hide();
      }
    } else {
      if (scrolledVal > 255) {
        $(".go-to-top.sm").show();
      } else {
        $(".go-to-top.sm").hide();
      }
    }
  });
});

function setNavActive(id) {
  $(".nav-item").removeClass("active");
  $(".nav-item a").removeClass("active");
  $("[href=" + id + "]").addClass("active");
}

$(".nav-item a").each(function () {
  const id = this.getAttribute("href");
  if (id.startsWith("#") && id.length > 1) {
    console.log(id);
    new Waypoint({
      element: document.getElementById(id.substring(1, id.length)),
      handler: function () {
        setNavActive(id);
      },
    });
  }
});
