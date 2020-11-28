const input = document.querySelector("input#name-input");

const title = document.querySelector("span#name-output");

input.addEventListener("input", (event) => {
  title.textContent = event.target.value;
});