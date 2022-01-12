const toggler = document.querySelector(".toggler");
const panel = document.querySelector(".quick-actions");
const overlay = document.querySelector(".quick-actions-overlay");

toggler.addEventListener("click", () => {
  panel.classList.toggle("quick-actions-visibility");
  overlay.classList.toggle("overlay-visibility");
  //   panel.style.right = "2rem";
});

overlay.addEventListener("click", () => {
  panel.classList.toggle("quick-actions-visibility");
  overlay.classList.toggle("overlay-visibility");
});
