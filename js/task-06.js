const input = document.querySelector("#validation-input");

input.addEventListener("blur", (e) => {
  console.log("escribiendo...");

  e.target.value.length < 6
    ? input.classList.add("invalid")
    : input.classList.add("valid");
  if (e.target.value.length > 6 && input.classList.contains("invalid")) {
    input.classList.remove("invalid");
  }

 
  
});
