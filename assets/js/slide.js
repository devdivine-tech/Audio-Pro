const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 5,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    300: {
      slidesPerView: "auto",
      centeredSlides: true,
    },
    420: {
      slidesPerView: "auto",
      centeredSlides: true,
    },
    640: {
      slidesPerView: "auto",
      centeredSlides: true,
    },
    1024: {
      slidesPerView: "auto",
    },
    1280: {
      slidesPerView: "auto",
    },
  },

  on: {
    slideChangeTransitionStart() {
      const slides = document.querySelectorAll(".swiper-slide");
      slides.forEach((slide) => {
        slide.style.transform = "scale(0.7)";
      });

      const activeSlide = document.querySelector(".swiper-slide-active");
      if (activeSlide) {
        activeSlide.style.transform = "scale(1.08)";
      }
    },
    init() {
      const activeSlide = document.querySelector(".swiper-slide-active");
      if (activeSlide) {
        activeSlide.style.transform = "scale(1.08)";
      }
    },
  },
});
