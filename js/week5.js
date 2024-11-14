console.log("Welcome to Week 5!");

/* Exercise 1: Log the message "This week we meet the browser dev tools!" */
console.log("This week we meet the browser dev tools!");

/* Exercise 2: Set the main heading to be green and have font "Dancing Script" */
let h1 = document.querySelector("h1");
h1.style.fontFamily = "Dancing Script";
h1.style.color = "seagreen";

/* Exercise 3: Set the main heading to be The Plant Shelf */
h1.textContent = "The " + h1.textContent;

/* Exercise 4: Make the main heading toggle between the original style and the green/"Dancing Script" style when clicked */
function toggleFancyHeading() {
  if (h1.style.color === "seagreen") {
    h1.style.color = "var(--text)";
    h1.style.fontFamily = "Montserrat";
  } else {
    h1.style.color = "seagreen";
    h1.style.fontFamily = "Dancing Script";
  }
}
h1.addEventListener("click", toggleFancyHeading);

/* Exercise 5: Make the Logo spin around when clicked */
let logo = document.querySelector("#heading img");
function spinLogo() {
  let startFrame = { transform: "rotate(0deg)" };
  let endFrame = { transform: "rotate(360deg)" };
  logo.animate([startFrame, endFrame], 200);
}
logo.addEventListener("click", spinLogo);

/* Exercise 6: Make all of the plant names in "Dancing Script" font */
let plantHeadings = document.querySelectorAll(".card .front h2");
function makeFancy(heading) {
  heading.style.fontFamily = "Dancing Script";
}
plantHeadings.forEach(makeFancy);