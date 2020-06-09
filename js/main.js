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
