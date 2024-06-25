//capturamos el destino de los numeritos CANTIDAD
let cantidad = document.getElementById("cantidad");
let btnrestar = document.getElementById("restar");
let btnsumar = document.getElementById("sumar");
let subTotal = document.getElementById("subtotal")
let precioUnit = document.querySelector(".puntuResto")
let unit = 1890
precioUnit.innerText = `$  ${unit}`

let cant = 1;
cantidad.innerText = cant;
btnrestar.innerText = "block";
btnrestar.style.color = "gray";
btnrestar.style.cursor = "unset";

function restar() {
  if (cant > 1) {
    btnsumar.innerText = "add";
    btnrestar.innerText = "remove";
    cant = cant - 1;
    cantidad.innerText = cant;
    
  }
  if (cant === 1) {
    btnrestar.innerText = "block";
    btnrestar.style.color = "gray";
    alert("vas a pedir 0 en serio? raja de acá");
  }
}
function sumar() {
  if (cant < 10) {
    btnrestar.innerText = "remove";
    cant = cant + 1;
    cantidad.innerText = cant;
  }
  if (cant === 10) {
    btnsumar.innerText = "block";
    alert("No te parece suficiente 15 unidades");
  }
}


let carrito = document.querySelector(".btnAgregar")

carrito.addEventListener("click", function () {
  console.log("BOTON CARRITO AGREGADO")

}); 




