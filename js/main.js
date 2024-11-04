const themeButton = document.querySelector("button#darkmodetoggle");
themeButton.addEventListener("click", () => document.body.classList.toggle("darkmode"));


document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => card.classList.toggle("flipped"));
})
