const arrows = document.querySelectorAll(".arrow");
const navRadios = document.querySelectorAll(".foundation-radios");
let index = 0;

arrows[0].addEventListener("click", () => {
  if (index > 0) index--;
  navRadios[index].checked = true;
});
arrows[1].addEventListener("click", () => {
  if (index < navRadios.length - 1) index++;
  navRadios[index].checked = true;
});

// if (index === 0) {
//   arrows[0].style.opacity = "0";
// } else if (index === navRadios.length - 1) {
//   arrows[1].style.opacity = "0";
// } else {
//   arrows[0].style.opacity = "1";
//   //   arrows.forEach((arrow) => {
//   //     arrow.style.opacity = "1";
//   //   });
// }
