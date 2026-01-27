document.addEventListener("DOMContentLoaded", async () => {
  // First wait for all partials to load (if you control that part, see below)
  await loadAllPartials();

  // Now your DOM elements from partials are in place, so:
  
  // Navigation toggle
  function toggleMenu() {
      const toggleMenu = document.querySelector(".toggleMenu");
      const navigation = document.querySelector(".navigation");
      toggleMenu.classList.toggle("active");
      navigation.classList.toggle("active");
  }
  window.toggleMenu = toggleMenu; // expose globally for onclick

  // Play video on click
  const videoPlay = document.querySelectorAll(".video-thumbnail");
  videoPlay.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.add("d-none");
      const videoCurrent = this.previousElementSibling;
      videoCurrent.play();
      videoCurrent.controls = true;

      videoCurrent.addEventListener("ended", function () {
        videoCurrent.controls = false;
        btn.classList.remove("d-none");
      });
    });
  });

  // Swiper slider 1 - Challenge
  const challengeSwiper = new Swiper(".challenge-slider", {
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

  // Swiper slider 2 - Course
  const courseSwiper = new Swiper(".course-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".course-slider .swiper-button-next",
      prevEl: ".course-slider .swiper-button-prev",
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

  // Swiper slider 3 - Teacher (if present)
  const teacherSwiper = new Swiper(".teacher-slider", {
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
});
