var swiper = new Swiper(".mySwiper", {
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

var swiper2 = new Swiper(".mySwiper-2", {
  slidesPerView: 5,
  spaceBetween: 50,
  slidesPerGroup: 5,
  loop: true,
  loopFillGroupWithBlank: false,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});