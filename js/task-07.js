const slider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

//evento oninput cambia el elemento aun con el mouse presionado
slider.oninput =()=>{
    console.log(text.style.fontSize = slider.value +"px");
      
}
