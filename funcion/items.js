const botonAgregar = document.querySelectorAll(".agregar");
const inputCantidadProducto = document.querySelectorAll(".cantidad");
const cajaSecundaria = document.querySelector("#cajaSecundaria");
const buttons = document.querySelectorAll(".buttons");
const containerGeneralPestanaItem = document.querySelector("#containerGeneralPestanaItem");
const containerGeneralpestanaPago = document.querySelector("#containerGeneralpestanaPago");
var nombreComida = [],
    cantidadComida = [],
    precioComida = [],
    conteo = -1;
var precioTotal = 0;

buttons[0].addEventListener("click", (e) => {
    if (nombreComida.length < 1) alert("Debe agregar productos para realizar el pago");
    else {
        var opcion = confirm("¿Desea confirmar su pedido?");
        if (opcion == true) {
            agregarProductosLocalStorage();
            containerGeneralPestanaItem.style.display = "none";
            containerGeneralpestanaPago.style.display = "block";
        }
    }
});
buttons[1].addEventListener("click", (e) => {
    if (nombreComida.length < 1) alert("No ingresaste ningún producto");
    else cajaSecundaria.innerHTML += `<h4>Valor total: ${precioTotal}$</h4>`;
});
buttons[2].addEventListener("click", (e) => {
    nombreComida.pop();
    precioTotal -= (cantidadComida.pop() * precioComida.pop());
    mostrarNuevosValores();
    if (conteo >= 0) conteo--;
    else alert("No hay productos que eliminar");
});

botonAgregar[0].addEventListener("click", (e) => {
    agregarProductoLista("Pizza", parseFloat(inputCantidadProducto[0].value), 40000, 0);
});
botonAgregar[1].addEventListener("click", (e) => {
    agregarProductoLista("Lasagna", parseFloat(inputCantidadProducto[1].value), 35000, 1);
});
botonAgregar[2].addEventListener("click", (e) => {
    agregarProductoLista("Tiramisu", parseFloat(inputCantidadProducto[2].value), 30000, 2);
});
botonAgregar[3].addEventListener("click", (e) => {
    agregarProductoLista("Pasta", parseFloat(inputCantidadProducto[3].value), 36000, 3);
});
botonAgregar[4].addEventListener("click", (e) => {
    agregarProductoLista("Calzone", parseFloat(inputCantidadProducto[4].value), 38000, 4);
});

function agregarProductoLista(nombre, cantidad, precio, index) {
    conteo++;
    nombreComida[conteo] = nombre;
    cantidadComida[conteo] = cantidad;
    precioComida[conteo] = precio;
    mostrarTotal(nombreComida[conteo], cantidadComida[conteo], precioComida[conteo], index);
}

function mostrarTotal(nombreActual, cantidadActual, precioActual, index) {
    precioTotal += (cantidadActual * precioActual);
    cajaSecundaria.innerHTML += `<li>${nombreActual} <b>x${cantidadActual}$</b> ${precioActual}</li> \n <br>`;

    inputCantidadProducto[index].value = '1';
}

function mostrarNuevosValores() {
    cajaSecundaria.innerHTML = "<h4>Productos agregados</h4> <br>";
    for (var i = 0; i < nombreComida.length; i++) {
        cajaSecundaria.innerHTML += `<li>${nombreComida[i]} <b>x${cantidadComida[i]}$</b> ${precioComida[i]}</li> \n <br>`;
    }
}

function agregarProductosLocalStorage(){
    let comida_nombre = "";
    let comidad_cantidad = "";
    let comida_precio = "";
    for (let i = 0; i < nombreComida.length; i++) {
        comida_nombre += nombreComida[i]+",";
        comidad_cantidad += cantidadComida[i]+",";
        comida_precio += precioComida[i]+",";
    }

    localStorage.setItem("nombresProductos", comida_nombre);
    localStorage.setItem("cantidadProductos", comidad_cantidad);
    localStorage.setItem("preciosProductos", comida_precio);
    localStorage.setItem("precioTotalComida", precioTotal);
}