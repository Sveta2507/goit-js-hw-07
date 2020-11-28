const ingredients = [
    "Картошка",
    "Грибы",
    "Чеснок",
    "Помидоры",
    "Зелень",
    "Приправы",
  ];

  const ingr = document.getElementById("ingredients");
  const createElements = function (arr) {
    for (let element of arr) {
      const li = document.createElement("li");
      li.textContent = element;
      ingr.appendChild(li);
    }
  };
  createElements(ingredients);