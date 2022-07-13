const menuBtn = document.querySelector(".hamburger-menu");
const asideAnimation = document.querySelector(".aside");
const navElemente = document.querySelector(".nav-content");
const navListe = document.querySelectorAll(".nav-list");
let menuOpen = false;
let ticking = false;

// open and closing menu button

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
// changing burgermenu color on scroll

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

// Carousel Tattoo  Images

function createTattooImg() {
  for (let i = 1; i < 169; i++) {
    const createImg = document.createElement("img");
    const tattooImgSrc = "/tattoo.img/" + i + ".jpg";
    createImg.src = tattooImgSrc;
    listImg.append(createImg);
  }
}
// let currentIndex = 1;
const listImg = document.querySelector(".demo");
// let slides = document.querySelector(".imageSlides");
// console.log(slides);
let activeImage = document.querySelector(".active-image");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".previous");
// const imageSlideshow = document.querySelector(".images-slideshow");
listImg.addEventListener("click", (e) => {
  let selectedPicture = e.target.closest("img").src;
  activeImage.src = selectedPicture;
  console.log(selectedPicture);
});

nextBtn.addEventListener("click", () => {});

createTattooImg();
