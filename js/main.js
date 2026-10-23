// Slider prewyu
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoinst:{
    600: {
      slidesPerView: 2
    },

    1024: {
      slidesPerView: 3
    }
  }
});
// Menu btn
const open__nav = document.getElementById("open__menu-btn");
const close__nav = document.getElementById("close__menu-btn");
const nav = document.querySelector("ul");

open__nav.addEventListener("click", () => {
  open__nav.style.display = "none";
  nav.style.display = "block";
  close__nav.style.display = "inline-block";
});

close__nav.addEventListener("click", () => {
  open__nav.style.display = "inline-block";
  nav.style.display = "none";
  close__nav.style.display = "none";
});
// SEARCH
let search = document.querySelector(".search");
let search__icon = document.getElementById("search__icon").addEventListener("click", () => {
  search.classList.toggle("search__active");
});
// NAV SCROLE
window.addEventListener("scroll", () => {
  let navbar = document.getElementById("nav");
  if (scrollY > 100)navbar.classList.add("scroled");
  else navbar.classList.remove("scroled");
});
