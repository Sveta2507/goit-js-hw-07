const counterValue = document.querySelector("#value");
const value1 = document.querySelector('[data-action="increment"]');
const value2 = document.querySelector('[data-action="decrement"]');

let number = Number(counterValue.textContent);

value1.addEventListener("click", increment);
value2.addEventListener("click", decrement);

function increment(event) {
  number += 1;
  counterValue.textContent = number;
}

function decrement(event) {
  if (number > 0) {
    number -= 1;
    counterValue.textContent = number;
  }
}