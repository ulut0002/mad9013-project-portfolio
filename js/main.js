const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#nav");
const clicktoclose = document.querySelector(".click-to-close");

function toggleNav(e) {
  e.preventDefault();
  navToggle.classList.toggle("open");
  nav.classList.toggle("open");
  clicktoclose.classList.toggle("open");
}

function init() {
  navToggle && navToggle.addEventListener("click", toggleNav);
  clicktoclose && clicktoclose.addEventListener("click", toggleNav);
  const toTop = document.querySelector(".to-top");

  function handleToTop() {
    if (window.scrollY > 50) {
      toTop.classList.add("visible");
    } else {
      toTop.classList.remove("visible");
    }
  }

  handleToTop();

  toTop && window.addEventListener("scroll", handleToTop);
}

document.addEventListener("DOMContentLoaded", init);
