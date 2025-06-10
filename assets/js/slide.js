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
      slidesPerView: 0.5,
      centeredSlides: true,
    },
    420: {
      slidesPerView: 0.8,
      centeredSlides: true,
    },
    640: {
      slidesPerView: 1.1,
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
