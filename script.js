const menuBtn = document.querySelector(".hamburger-menu");
const asideAnimation = document.querySelector(".aside");
const navElemente = document.querySelector(".nav-content");
const navListe = document.querySelectorAll(".nav-list");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    asideAnimation.classList.add("open");
    navElemente.classList.add("open");
    navListe.forEach((el) => el.classList.add("open"));
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navListe.forEach((el) => el.classList.remove("open"));
    navElemente.classList.remove("open");
    asideAnimation.classList.remove("open");
    menuOpen = false;
  }
});
