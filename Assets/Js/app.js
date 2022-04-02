var mainSlider = new Swiper(".main-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


var productSlider = new Swiper(".product-slider", {
  slidesPerView: 4,
  spaceBetween: 50,
  slidesPerGroup: 4,
  loop: true,
  autoplay: true,
  loopFillGroupWithBlank: false,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
  navigation: {
    nextEl: ".product-button-next",
    prevEl: ".product-button-prev",
  },
});


var productSliderMobile = new Swiper(".product-slider-mobile", {
  slidesPerView: 1,
  spaceBetween: 50,
  slidesPerGroup: 1,
  loop: true,
  autoplay: true,
  loopFillGroupWithBlank: false,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
  navigation: {
    nextEl: ".product-button-next",
    prevEl: ".product-button-prev",
  },
});


var brandsSlider = new Swiper(".brands-slider", {
  slidesPerView: 5,
  spaceBetween: 50,
  slidesPerGroup: 5,
  loop: true,
  autoplay: true,
  loopFillGroupWithBlank: false,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
  navigation: {
    nextEl: ".brands-slide-button-next",
    prevEl: ".brands-slide-button-prev",
  },
});


var brandsSlider = new Swiper(".brands-slider-mobile", {
  slidesPerView: 2,
  spaceBetween: 50,
  slidesPerGroup: 2,
  loop: true,
  autoplay: true,
  loopFillGroupWithBlank: false,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
  navigation: {
    nextEl: ".brands-slide-button-next",
    prevEl: ".brands-slide-button-prev",
  },
});