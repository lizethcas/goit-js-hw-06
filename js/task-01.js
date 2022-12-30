let categorias = document.getElementsByClassName("item");
const cantidadCategorias = categorias.length;
categorias = [...categorias];
console.log(`Number of categories: ${cantidadCategorias}`);

categorias.forEach(function (index) {
  const   titulo = index.children[0].innerHTML;
  console.log(`Category: ${titulo}`);
  const elements = index.children[1].querySelectorAll('li').length
  console.log(`Elements: ${elements}`);
  
  /* titulos.forEach((index) =>console.log(index.innerHTML)) */
  
  
});


