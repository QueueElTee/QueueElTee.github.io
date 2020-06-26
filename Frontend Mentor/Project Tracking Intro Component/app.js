const nav = document.querySelector(".nav-content ul");

const menuIcon = document.querySelector(".burger");

function toggleNav() {
  nav.classList.toggle("nav-active");

  function toggleImage() {
    var imgElement = document.querySelector(".burger img");

    if (imgElement.src.match("hamburger")) {
      imgElement.src = "images/icon-close.svg";
    } else {
      imgElement.src = "images/icon-hamburger.svg";
    }
  }

  toggleImage();
}

menuIcon.addEventListener("click", toggleNav);
