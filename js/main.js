//Función para desplegar menu cabecera en mobile
function menu_mobile() {
  document.querySelector("#nav-icon").addEventListener("click", function () {
    this.classList.toggle("open");
    document.querySelector("#header").classList.toggle("open");
  });
}
//Función para desplegar submenú principal
function menu_main() {
  document
    .querySelector("#menunav > ul > li")
    .addEventListener("click", function () {
      this.classList.toggle("open");
    });
}

document.addEventListener("DOMContentLoaded", function () {
  menu_mobile();
  menu_main();
});

//Slider de 4 - 3 - 2 - 1
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 6.5,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  },
  spaceBetween: 50,
  // navigation: {
  //   nextEl: '.swiper-button-next-4',
  //   prevEl: '.swiper-button-prev-4'
  // },
  allowTouchMove: true,
  breakpoints: {
    1400: {
      slidesPerView: 10.5
    },
    1024: {
      slidesPerView: 6.5
    },
    468: {
      slidesPerView: 3.7
    }
  }
})
