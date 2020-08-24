// HAMBURGER TOGGLE

const hamburger = document.querySelector("#hamBtn");
const body = document.querySelector("body");
const header = document.querySelector("header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

hamburger.addEventListener("click", () => {
  // header.classList.toggle("open");
  if (header.classList.contains("open")) {
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

// REVIEWS CAROUSEL

let swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    930: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    centeredSlides: true,
    clickable: true,
  },
});

// EMAIL VALIDATION
let mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
let input = document.querySelector("#input");
let button = document.querySelector("#btn");
let error = document.querySelector(".error");

button.addEventListener("click", () => {
  if (input.value.match(mailformat)) {
    input.style.border = "2px solid green";
    error.innerHTML = "";
  } else {
    error.innerHTML = "Please insert a valid email";
    input.style.border = "2px solid red";
  }
});
