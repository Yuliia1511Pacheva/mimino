function swiperSlider() {
  // const teamMain = document.querySelectorAll('[data-slider="team-slider"]');
  const heroSliderRoom = document.querySelectorAll(
    '[data-slider="room-hero-slider"]'
  );
}
window.addEventListener('load', swiperSlider, false);

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 500,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: '.room__swiper-button-next',
    prevEl: '.room__swiper-button-prev',
  },
});
