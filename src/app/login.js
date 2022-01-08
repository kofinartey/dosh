const methods = document.querySelectorAll(".login-method");

methods.forEach((method) => {
  method.addEventListener("click", () => {
    //remove selected styles from all the methods
    methods.forEach((m) => {
      m.classList.remove("selected");
    });
    //add the style to the selected one
    method.classList.add("selected");
  });
});
