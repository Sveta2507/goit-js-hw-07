const input1 = document.querySelector("input#font-size-control");

const text = document.querySelector("span#text");

console.log(text.style);
input1.addEventListener("input", (event) => {
  text.style.fontSize = input1.value + "px";
});