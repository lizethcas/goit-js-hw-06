const texto = document.querySelector("#name-input");
const nombre = document.querySelector("#name-output");
console.log(texto);
console.log(nombre);

texto.addEventListener("input", (e) => {
    const nuevoTexto = e.target.value;
    nombre.textContent = `${nuevoTexto}`;

});
