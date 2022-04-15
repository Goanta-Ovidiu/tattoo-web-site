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

let lastKnownScrollPosition = 0;

// changing burgermenu color on scroll

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

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
  setTimeout(showSlides, 2000);
}

// email contact

const emailForm = document.querySelector("#sendEmail");
const userFirstsName = document.querySelector("#first-name");
const userLastName = document.querySelector("#last-name");
const userEmail = document.querySelector("#email");
const userMessege = document.querySelector("#textarea");

const sendEmailForm = function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "goantza03@gmail.com",
    Password: "231D4BF52933C4C8E92D318F4420DB1D4605",
    To: "goantza03@gmail.com",
    From: userEmail.value,
    Subject: "This is the subject",
    Body:
      "Name: " +
      userFirstsName.value +
      userLastName.value +
      "<br> Email: " +
      userEmail.value,
  }).then((message) => alert((message = "Succes!")));
};
// emailForm.addEventListener("onsubmit", sendEmailForm());
