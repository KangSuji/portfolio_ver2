$(document).ready(function () {
  const swiper = new Swiper('.project-wrap', {
    slidesPerView: 3,
    variableWidth: true,
    slidesToShow: 1,
    spaceBetween: 20,
    debugger: true,
    pagination: {
      //페이징 사용자 설정
      el: '.pagination_fraction', //페이징 태그 클래스 설정
      type: 'fraction',
    },
    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      550: {
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
