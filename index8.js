const input2 = document.querySelector('#controls [type = "number"]');
const addValue = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector("#boxes");
let height = 30;
let width = 30;

addValue.addEventListener("click", createBoxes);

function createBoxes() {
  let num = input2.value;
  for (let i = 0; i < num; i += 1) {
    let randomColor = Math.floor(Math.random() * 1000000);

    const div = document.createElement("div");

    div.style.backgroundColor = `#${randomColor}`;
    div.style.width = `${(width += 10)}px`;
    div.style.height = `${(height += 10)}px`;
    div.style.marginBottom = "10px";
    boxes.appendChild(div);
  }
}

destroy.addEventListener("click", () => {
  boxes.innerHTML = "";
  height = 30;
  width = 30;
});