const inputUsual = document.querySelector("#validation-input");
const validInput = document.querySelector('[data-length="6"]');
let dataLength = Number(validInput.dataset.length);

inputUsual.addEventListener("blur", (event) => {
  let letters = Number(event.target.value.length);

  if (dataLength !== letters) {
    inputUsual.classList.add("invalid");
  } else if (dataLength === letters) {
    inputUsual.classList.replace("invalid", "valid");
  }
});