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
