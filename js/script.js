const navigationEl = document.querySelector(".navigation");
const menuEl = document.querySelector(".menu");
const closeEl = document.querySelector(".close");

menuEl.addEventListener("click", function () {
  menuEl.classList.remove("show");
  closeEl.classList.add("show");
  navigationEl.classList.add("show");
});

closeEl.addEventListener("click", function () {
  menuEl.classList.add("show");
  closeEl.classList.remove("show");
  navigationEl.classList.remove("show");
});
