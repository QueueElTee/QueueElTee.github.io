const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const body = document.body;

toggleSwitch.addEventListener("click", toggleTheme);

function toggleTheme() {
  if (toggleSwitch.checked) {
    body.classList.replace("light-theme", "dark-theme");
  } else {
    body.classList.replace("dark-theme", "light-theme");
  }
}
