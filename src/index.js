function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    Delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "Writting poem on going",
    autoStart: true,
    Delay: 1,
    cursor: "",
  });
  let instructions = document.querySelector("#instructions");
  let apiKey = "625t01634a276d07f8dc7437o8d4abf9";
  let prompt = `You are an AI assistant who write french poem about ${instructions.value}`;
  let context = "Please keep your poem to three line only in basics HTML";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
}
let form = document.querySelector("#poem-form-generator");
form.addEventListener("submit", generatePoem);
