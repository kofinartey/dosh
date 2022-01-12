const methodRadios = document.querySelectorAll(".login-method");
const methodInputs = document.querySelectorAll();
let loginMethod = "email";

methodRadios.forEach((method) => {
  method.addEventListener("click", () => {
    //remove selected styles from all the methods
    methodRadios.forEach((m) => {
      m.classList.remove("selected");
    });
    //add the style to the selected one
    method.classList.add("selected");
    //chnage loginMethod
    loginMethod = method.children[0].value;
  });
});

console.log(document.querySelector("#email"));
