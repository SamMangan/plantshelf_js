console.log("Welcome to Week 5!");

/* Exercise 0 */
// console.log("This week we meet the browser dev tools!");

/* Exercise 1 */
// let h1 = document.querySelector("h1");
// h1.style.fontFamily = "Dancing Script";
// h1.style.color = "seagreen";

/* Exercise 2 */
// h1.textContent = "The " + h1.textContent;

/* Exercise 3 */
// function toggleFancyHeading() {
//   if (h1.style.color === "seagreen") {
//     h1.style.color = "var(--text)";
//     h1.style.fontFamily = "Montserrat";
//   } else {
//     h1.style.color = "seagreen";
//     h1.style.fontFamily = "Dancing Script";
//   }
// }
// h1.addEventListener("click", toggleFancyHeading);

/* Exercise 4 */
let logo = document.querySelector("#heading img");
function spinLogo() {
  let startFrame = { transform: "rotate(0deg)" };
  let endFrame = { transform: "rotate(360deg)" };
  logo.animate([startFrame, endFrame], 200);
}
logo.addEventListener("click", spinLogo);

/* Exercise 5 */
let plantHeadings = document.querySelectorAll(".card .front h2");
function makeFancy(heading) {
  heading.style.fontFamily = "Dancing Script";
}
// plantHeadings.forEach(makeFancy);