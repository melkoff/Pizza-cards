

/////////////////slider////////////////


let swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  effect: "coverflow",
  centeredSlides: true,
  loop: true,
  pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  // speed: 1000,
  // autoplay: {
  //   delay: 2500,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: false,
  // },
  coverflowEffect: {
    rotate: 0,
    stretch: 25,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 30,
  //     coverflowEffect: {
  //       rotate: 0,
  //       stretch: 180,
  //       depth: 100,
  //       modifier: 5,
  //       slideShadows: false,
  //     },
  //   },
  //   // 500: {
  //   //   slidesPerView: 2,
  //   //   spaceBetween: 50,
  //   //   coverflowEffect: {
  //   //     rotate: 0,
  //   //     stretch: 80,
  //   //     depth: 200,
  //   //     modifier: 1,
  //   //     slideShadows: true,
  //   //   },
  //   // },
  //   600: {
  //     slidesPerView: 2,
  //     spaceBetween: 30,
  //     coverflowEffect: {
  //       rotate: 0,
  //       stretch: 130,
  //       depth: 150,
  //       modifier: 4,
  //       slideShadows: true,
  //     },
  //   },
  //   800: {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //     coverflowEffect: {
  //       rotate: 0,
  //       stretch: 150,
  //       depth: 100,
  //       modifier: 3,
  //       slideShadows: true,
  //     },
  //   },
  //   1000: {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //   },
  //   1200: {
  //     slidesPerView: 3,
  //     spaceBetween: 50,
  //   },
  //   1300: {
  //     slidesPerView: 3,
  //     spaceBetween: 60,
  //   },
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});