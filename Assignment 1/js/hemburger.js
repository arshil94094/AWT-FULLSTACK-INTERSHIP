const hemburger = document.querySelector(".hemburger");
const slide = document.querySelector(".slide");
const overlay = document.querySelector(".overlay");

document.addEventListener("click", (e) => {
  if (e.target.matches(".overlay")) {
    hemburger.classList.toggle("active");
    slide.classList.toggle("show");
    overlay.classList.toggle("slide__overlay");
  }
});

hemburger.addEventListener("click", () => {
  hemburger.classList.toggle("active");
  slide.classList.toggle("show");
  overlay.classList.toggle("slide__overlay");
});
