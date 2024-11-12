// JavaScript uses double-forward-slash for single-line comments

/* You can also write block comments like this:
everything between the slash-star and the star-slash is a comment */


// Unlike Python, variables can be declared without being assigned a value
let themeButton; // Declare themeButton, but don't assign
console.log(themeButton===undefined); // true

// Select the darkmode button, and assign the resulting Element object to themeButton
themeButton = document.querySelector("button#darkmodetoggle");
console.log(themeButton===undefined); // false

// Declare a function called toggleDarkMode with no paramaters (a.k.a. arguments)
function toggleDarkMode() {
  let body = document.querySelector("body"); // Declare AND assign body
  body.classList.toggle("darkmode"); // Add or remove the 'darkmode' class
}

// When the button is clicked, call toggleDarkMode
themeButton.addEventListener("click", toggleDarkMode); 