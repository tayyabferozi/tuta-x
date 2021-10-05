const wrapper = document.querySelector(".wrapper");
const indicators = [...document.querySelectorAll(".indicators button")];

let currentTestimonial = 0; // Default 0
let currentActive = 0;

indicators.forEach((item, i) => {
  item.addEventListener("click", () => {
    $(".indicators button").removeClass("active");
    wrapper.style.marginLeft = `-${100 * i}%`;
    currentActive = i;
    item.classList.add("active");
    currentTestimonial = i;
  });
});

$(".btn-next").click(function () {
  $(".indicators button").removeClass("active");
  if (currentActive !== indicators.length - 1) {
    currentActive += 1;
  }
  wrapper.style.marginLeft = `-${100 * currentActive}%`;
  $(`.indicators button:eq(${currentActive})`).addClass("active");
});

$(".btn-prev").click(function () {
  $(".indicators button").removeClass("active");
  if (currentActive !== 0) {
    currentActive -= 1;
  }
  wrapper.style.marginLeft = `-${100 * currentActive}%`;
  $(`.indicators button:eq(${currentActive})`).addClass("active");
});
