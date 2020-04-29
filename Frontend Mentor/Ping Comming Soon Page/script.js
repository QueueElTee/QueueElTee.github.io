let email = document.querySelector("#email");
let submit = document.querySelector("#submit");
let error = document.querySelector(".error-content");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  const mailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

  if (email.value == "") {
    error.innerHTML = "Email field cannot be empty";
    error.style.display = "block";
    email.style.border = "1px solid hsl(354, 100%, 66%)";
  } else if (email.value.match(mailFormat)) {
    error.innerHTML = "";
    email.style.border = "1px solid green";
    email.value = "";
  } else {
    error.innerHTML = "Enter a valid email";
    error.style.display = "block";
    email.style.border = "1px solid hsl(354, 100%, 66%)";
  }
}
