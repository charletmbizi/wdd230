const sideNav = document.querySelector(".sideNav");
const overlay = document.querySelector(".overlay");
const ham = document.querySelector(".ham");
const menuX = document.querySelector(".menuX");
const menuItems = document.querySelectorAll(".menuLink");

menuItems.forEach(menuItem => {
  menuItem.addEventListener("click", toggleHamburger);
})

function toggleHamburger() {
  overlay.classList.toggle("showOverlay");
  sideNav.classList.toggle("showNav");
}

ham.addEventListener("click", toggleHamburger);
menuX.addEventListener("click", toggleHamburger);
overlay.addEventListener("click", toggleHamburger);
