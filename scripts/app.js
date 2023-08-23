const navBtn = document.querySelector(".menu-hamburger--btn");
const navMobile = document.querySelector(".nav-mobile");
let navOpen = false;

navBtn.addEventListener("click", function () {
  if (navOpen) {
    navBtn.classList.remove("menu-hamburger--btn--open");
    navMobile.classList.remove("nav-mobile--open");
    navOpen = false;
  } else {
    navBtn.classList.add("menu-hamburger--btn--open");
    navMobile.classList.add("nav-mobile--open");
    navOpen = true;
  }
});
