const body = document.querySelector("body");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");

boton1.addEventListener('click', function(){
    body.style.background = "green"
});
boton2.addEventListener('click', function(){
    body.style.background = "red"
});
boton3.addEventListener('click', function(){
    body.style.background = "blue"
});

