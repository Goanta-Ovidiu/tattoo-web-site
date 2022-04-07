const menuBtn = document.querySelector(".hamburger-menu");
const asideAnimation = document.querySelector(".aside");
const navElemente = document.querySelector(".nav-content");
const navListe = document.querySelectorAll(".nav-list");
let menuOpen = false;
let ticking = false;

function openBurgerMenu() {
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      asideAnimation.classList.add("open");
      navElemente.classList.add("open");
      navListe.forEach((el) => el.classList.add("open"));
      menuOpen = true;
      ticking = true;
    } else {
      menuBtn.classList.remove("open");
      navListe.forEach((el) => el.classList.remove("open"));
      navElemente.classList.remove("open");
      asideAnimation.classList.remove("open");
      menuOpen = false;
    }
  });
}

let lastKnownScrollPosition = 0;

function scrollBarColor() {
  document.addEventListener("scroll", function (e) {
    lastKnownScrollPosition = window.scrollY;

    window.requestAnimationFrame(function () {
      if (lastKnownScrollPosition >= 300 && menuOpen === false) {
        menuBtn.classList.add("filter");
        ticking = false;
      } else {
        menuBtn.classList.remove("filter");
        ticking = true;
      }
    });
  });
}
scrollBarColor();
openBurgerMenu();
