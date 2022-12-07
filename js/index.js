$(document).ready(function () {
  const swiper = new Swiper(".project-wrap", {
    slidesPerView: 3,
    variableWidth: true,
    slidesToShow: 1,
    spaceBetween: 20,
    debugger: true,
    breakpoints: {
      //반응형 조건 속성
      400: {
        //slidesPerView: 1.5,
        slidesPerView: "auto",
        spaceBetween: 8,
      },
    },
  });
});
