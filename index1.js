const mainUl = document.getElementById("categories");
console.dir(mainUl);

console.log(`в списке ${mainUl.children.length} категорий`);

for (let i = 0; i < mainUl.children.length; i++) {
  const li = mainUl.children[i];
  console.log(li.children[0].textContent);
  console.dir(`${li.children[1].children.length} вложеных элементов`);
}