let counterValue = 0;
const num = document.querySelector("#value");
console.log(num);

const botonDec = document.querySelector('button[data-action="decrement"]');
const botonAsc = document.querySelector('button[data-action="increment"]');

//escuchar evento boton crecienete
botonAsc.addEventListener("click", () => {
  counterValue++;
  num.textContent = `${counterValue}`;
  
});

//escuchar evento boton decrecienete
botonDec.addEventListener("click", () => {
  counterValue--;
  num.textContent = `${counterValue}`;
  
});
