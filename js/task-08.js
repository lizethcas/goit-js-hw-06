const submit = document.querySelector("button");
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const form = document.querySelector(".login-form");
console.log(password.value.length);
const user = [];
submit.addEventListener("click", (event) => {
  if (password.value.length != 0 && email.value.length != 0) {
    if (email.value.indexOf(" ") > 0 || password.value.indexOf(" ") > 0) {
      alert("Todos los espacios deben ser rellenados.");
    } else {
      const elements = {
        email: email.value,
        password: password.value,
      };
      user.push(elements);
    }
  } else {
    alert("Todos los campos son requeridos");
  }

  console.log(user);
  event.preventDefault();
  limpiar();
});

function limpiar() {
  form.reset();
}

/* email.oninput = (e) =>{
    if(!e.target.value.charAt(" ")){
        console.log('true')
    }else{
        console.log('false')
    }
} */
/* email.addEventListener('input',(e)=>{
    
}) */
