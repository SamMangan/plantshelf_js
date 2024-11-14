// Unlike Python, variables can be declared without being assigned a value
let themeButton;

// Select darkmode button, and assign resulting Element object to themeButton
themeButton = document.querySelector("button#darkmodetoggle");

// Declare a function called toggleDarkMode with no parameters (arguments)
function toggleDarkMode() {
  let body = document.querySelector("body"); // Declare AND assign body at same time
  body.classList.toggle("darkmode"); // Add or remove the 'darkmode' class
}

// When button is clicked, call toggleDarkMode function
themeButton.addEventListener("click", toggleDarkMode); 