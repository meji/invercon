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

//Método para mostrar contacto

function showContact(){
  document.querySelector('.show-contact').addEventListener('click', function(){
    document.querySelector('.contact-container').classList.toggle("open");
  })
  document.querySelector('.contact-container .close').addEventListener('click', function(){
    document.querySelector('.contact-container').classList.toggle("open");
  })
}

document.addEventListener("DOMContentLoaded", function () {
  menu_mobile();
  menu_main();
  showContact();
});

//Slider de 4 - 3 - 2 - 1
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 6,
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  },
  spaceBetween: 50,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  allowTouchMove: true,
  breakpoints: {
    768: {
      slidesPerView: 5.7,
      spaceBetween: 30
    },
    468: {
      slidesPerView: 3.7,
      spaceBetween: 30
    }
  }
})
