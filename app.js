// documents
const container = document.querySelector(".container");
const container_2 = document.querySelector(".container-2");
const container_3 = document.getElementById("con");
const container_4 = document.getElementById("con2");
const container_5 = document.getElementById("con3");
// clicker
function clicker() {
  container.classList.toggle("active");
  container_2.classList.toggle("active");
  container_3.classList.toggle("active");
  container_4.classList.toggle("active");
  container_5.classList.toggle("active");
  links.classList.toggle("display");
}
// scrool_clicker
timeout = 500;
function scrool_clicker() {
  setTimeout(() => {
    clicker();
  }, timeout);
}
// clicks
function clicks() {
  clicker();
}