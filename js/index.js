$(document).ready(function () {
  const swiper = new Swiper('.project-wrap', {
    slidesPerView: 3,
    variableWidth: true,
    slidesToShow: 1,
    spaceBetween: 20,
    debugger: true,
    breakpoints: {
      //반응형 조건 속성
      400: {
        //slidesPerView: 1.5,
        slidesPerView: 'auto',
        spaceBetween: 8,
      },
    },
  });
  AOS.init();
  var rellax = new Rellax('.rellax', {
    horizontal: true,
  });
  $('.title__deco').addClass('active');

  //Move project page with scroll
  const url = new URL(window.location);
  const urlParams = url.searchParams;
  if (urlParams.get('s')) {
    const scrollTop = $('#' + urlParams.get('s')).offset().top;
    $('html, body').animate({ scrollTop }, 500);
  }
});
