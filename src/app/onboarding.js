const dashMenu = document.querySelector(".dash-menu");

let dashLinks = Array.from(dashMenu.children);
let pagePath = window.location.pathname;
dashLinks.forEach((link) => {
  if (pagePath.includes(link.id)) {
    console.log(link);
    link.style.color = "black";
    // link.style.backgroundColor = "green";
    link.classList.add("current");
  }
});
