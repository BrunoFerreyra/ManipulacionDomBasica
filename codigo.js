const primerInput = document.querySelector("#uno");
const segundoInput = document.querySelector("#dos");
const result = document.querySelector("#resultado");
const btn =document.querySelector("#boton");
const form = document.querySelector("#form");

form.addEventListener("submit", botonCalculo);

function botonCalculo(event){
    event.preventDefault(); //Cancela el default, en este caso el form recargando la pagina
    const sumaInputs = primerInput.value + segundoInput.value;
    result.innerText = "El resultado es: " + sumaInputs;
} 

