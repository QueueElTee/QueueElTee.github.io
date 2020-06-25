const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

toggleSwitch.addEventListener("click", togglePrice);

const monthlyPrice = document.querySelectorAll(".monthly");
const annualPrice = document.querySelectorAll(".annual");

function togglePrice() {
  if (toggleSwitch.checked) {
    for (i = 0; i < annualPrice.length; i++) {
      annualPrice[i].style.display = "none";
      monthlyPrice[i].style.display = "block";
    }
  } else {
    for (i = 0; i < annualPrice.length; i++) {
      monthlyPrice[i].style.display = "none";
      annualPrice[i].style.display = "block";
    }
  }
}
