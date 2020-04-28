let submit = document.querySelector(".btn");

let firstName = document.querySelector("#first-name");
let firstNameError = document.querySelector(".input-error-first");
let firstNameImg = document.querySelector(".img-first-name");

let lastName = document.querySelector("#last-name");
let lastNameError = document.querySelector(".input-error-last");
let lastNameImg = document.querySelector(".img-last-name");

let email = document.querySelector("#email");
let emailError = document.querySelector(".input-error-email");
let emailImg = document.querySelector(".img-email");

let password = document.querySelector("#password");
let passwordError = document.querySelector(".input-error-password");
let passwordImg = document.querySelector(".img-password");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  if (firstName.value == "") {
    firstName.style.border = "1px solid red";
    firstNameError.style.display = "block";
    firstNameImg.style.display = "inline-block";
  } else {
    firstName.style.border = "1px solid green";
    firstNameError.style.display = "none";
    firstNameImg.style.display = "none";
  }

  if (lastName.value == "") {
    lastName.style.border = "1px solid red";
    lastNameError.style.display = "block";
    lastNameImg.style.display = "inline-block";
  } else {
    lastName.style.border = "1px solid green";
    lastNameError.style.display = "none";
    lastNameImg.style.display = "none";
  }

  if (password.value == "") {
    password.style.border = "1px solid red";
    passwordError.style.display = "block";
    passwordImg.style.display = "inline-block";
  } else {
    password.style.border = "1px solid green";
    passwordError.style.display = "none";
    passwordImg.style.display = "none";
  }

  var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    email.style.border = "1px solid green";
    emailError.style.display = "none";
    emailImg.style.display = "none";
  } else {
    email.style.border = "1px solid red";
    emailError.style.display = "block";
    emailImg.style.display = "inline-block";
  }
}
