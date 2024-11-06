document.addEventListener("DOMContentLoaded", function() { 
  const themeButton = document.querySelector("button#darkmodetoggle");
  themeButton.addEventListener("click", () => document.body.classList.toggle("darkmode"));
})