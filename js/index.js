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
  AOS.init();
  var rellax = new Rellax(".rellax", {
    horizontal: true,
  });
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= $(".right-box").offset().top) {
    $(".go-git__btn").addClass("sticky");
  }

  if ($(window).scrollTop() <= $(".right-box").offset().top) {
    $(".go-git__btn").removeClass("sticky");
  }

  if ($(window).scrollTop() >= $("#p-ncs").offset().top) {
    $(".go-git__btn").attr("href", "https://github.com/KangSuji/NCS");
  }
  if ($(window).scrollTop() >= $("#p-kiada").offset().top) {
    $(".go-git__btn").attr("href", "https://github.com/KangSuji/kiada");
  }
  if ($(window).scrollTop() >= $("#p-teasung").offset().top) {
    $(".go-git__btn").attr("href", "https://github.com/KangSuji/taesung");
  }
  if ($(window).scrollTop() >= $("#p-amom").offset().top) {
    $(".go-git__btn").attr("href", "");
  }
  if ($(window).scrollTop() >= $("#p-atx").offset().top) {
    $(".go-git__btn").attr("href", "https://github.com/KangSuji/ATX_VER02");
  }
  if ($(window).scrollTop() >= $("#p-news").offset().top) {
    $(".go-git__btn").attr("href", "https://github.com/KangSuji/vue3-news");
  }
  if ($(window).scrollTop() >= $("#p-omdb").offset().top) {
    $(".go-git__btn").attr("href", "https://github.com/KangSuji/vue-movie-app");
  }
  if ($(window).scrollTop() >= $("#p-starbucks").offset().top) {
    $(".go-git__btn").attr("href", "https://github.com/KangSuji/starbucks");
  }
});
