const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
//creacion de variables
const lista = document.querySelector("#ingredients");

ingredients.forEach((index) => {
  const elements = document.createElement("li");
  elements.textContent = index;
  lista.appendChild(elements);
});




console.log(lista); 
