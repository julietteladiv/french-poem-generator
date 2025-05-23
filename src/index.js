function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "Writting poem on going",
    autoStart: true,
    Delay: 1,
    cursor: "",
  });
}
let form = document.querySelector("#poem-form-generator");
form.addEventListener("submit", generatePoem);
