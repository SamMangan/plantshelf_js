let body = document.querySelector("body");
let themeButton = document.querySelector("button#darkmodetoggle");
let cards = document.querySelectorAll(".card");

function toggleDarkMode() {
  body.classList.toggle("darkmode");
}
themeButton.addEventListener("click", toggleDarkMode);

const flip = card => card.classList.add("flipped");
const unflip = card => card.classList.remove("flipped");
const isFlipped = card => card.classList.contains("flipped");

const unflipAll = except => {
  cards.forEach(card => {
    if (card !== except)
      unflip(card)
  });
}

cards.forEach(card => {
  function toggleFlip() {
    if (isFlipped(card)) {
      unflip(card);
    } else {
      unflipAll(except = card);
      flip(card);
    }
  }
  card.addEventListener("click", toggleFlip);
})