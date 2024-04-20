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
        this/classList.add("d-none");
        const videoCurrent = this.previousElementSibling;
        videoCurrent.play();
        videoCurrent.control = true;

        // When video ends remove show controls and show video thumbnail
        videoCurrent.addEventListener("ended", function () {
            videoCurrent.control = false;
            this.nextElementSibling.classList.remove("d-none");
        });
    })
})
// End Play video on click

// Swiper slider 1
    var swiper = new Swiper(".challenge-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      // autoplay: {
      //    delay: 2500,
      //    disableOnInteraction: false,
      // },
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

// Swiper slider 2
    var swiper = new Swiper(".course-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      // autoplay: {
      //    delay: 2500,
      //    disableOnInteraction: false,
      // },
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

// Swiper slider 3
var swiper = new Swiper(".course-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  // autoplay: {
  //    delay: 2500,
  //    disableOnInteraction: false,
  // },
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
// End Swiper slider 3