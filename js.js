// Navigation
function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}
// End Navigation

// Play video on click
const videoPlay = document.querySelectorAll(".video-thumbnail");
videoPlay.forEach((btn) => {
    btn.addEventListener("click", function () {
        this.classList.add("d-none");
        const videoCurrent = this.previousElementSibling;
        videoCurrent.play();
        videoCurrent.controls = true;

        // When video ends remove controls and show video thumbnail
        videoCurrent.addEventListener("ended", function () {
            videoCurrent.controls = false;
            btn.classList.remove("d-none");
        });
    });
});
// End Play video on click

// Swiper slider 1 - Challenge Slider
var challengeSwiper = new Swiper(".challenge-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".challenge-slider .swiper-button-next",
    prevEl: ".challenge-slider .swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
// End Swiper slider 1

// Swiper slider 2 - Course Slider
var courseSwiper = new Swiper(".course-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".course-slider .swiper-button-next",
    prevEl: ".course-slider .swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1170: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
// End Swiper slider 2

// Swiper slider 3 - Teacher Slider (example class)
var teacherSwiper = new Swiper(".teacher-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".teacher-slider .swiper-button-next",
    prevEl: ".teacher-slider .swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1170: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
// End Swiper slider 3
