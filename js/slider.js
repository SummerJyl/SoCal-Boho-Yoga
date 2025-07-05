document.addEventListener('DOMContentLoaded', function() {
  // Wait for partials to load
  setTimeout(function() {
    // Challenge slider
    const challengeSwiper = new Swiper('.challenge-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.challenge-slider .swiper-button-next',
        prevEl: '.challenge-slider .swiper-button-prev',
      },
    });

    // Course slider
    const courseSwiper = new Swiper('.course-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.course-slider .swiper-button-next',
        prevEl: '.course-slider .swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }, 1000);
});