const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#nav");
const clicktoclose = document.querySelector(".click-to-close");

function toggleNav(e) {
  e.preventDefault();
  navToggle.classList.toggle("open");
  nav.classList.toggle("open");
  clicktoclose.classList.toggle("open");
}

navToggle && navToggle.addEventListener("click", toggleNav);
clicktoclose && clicktoclose.addEventListener("click", toggleNav);
