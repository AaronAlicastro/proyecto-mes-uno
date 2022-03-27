const mesasTomar = document.querySelectorAll(".mesasTomar");
const cajaSecundaria = document.querySelector("#cajaSecundaria");
const containerFichaMesa = document.querySelector("#containerFichaMesa");
const valoresPersonaMesa = document.querySelectorAll(".valoresPersonaMesa");
const confirmar = document.querySelector("#confirmar");

var nombrePersonaReservo = [], mesaReservada = [], conteo = -1;
var mesaOcupada = [], mesaSeleccionadaActual = -1; 
for (var i = 0; i < 9; i++) {
    mesaOcupada[i] = false;
}

mesasTomar[0].addEventListener("click", (e)=>{
    if (!mesaOcupada[0]) {
        mesaSeleccionadaActual = 0;
        containerFichaMesa.style.display = "block";
        containerFichaMesa.style.position = "absolute";
        containerFichaMesa.style.width = "21em";
        containerFichaMesa.style.heigth = "14em";
        containerFichaMesa.style.top = "18em";
        containerFichaMesa.style.left = "18em";
        valoresPersonaMesa[0].innerText = "Mesa uno";
    }else alert("Mesa reservada");
});
mesasTomar[1].addEventListener("click", (e)=>{
    if (!mesaOcupada[1]) {
        mesaSeleccionadaActual = 1;
        containerFichaMesa.style.display = "block";
        containerFichaMesa.style.position = "absolute";
        containerFichaMesa.style.width = "21em";
        containerFichaMesa.style.heigth = "14em";
        containerFichaMesa.style.top = "18em";
        containerFichaMesa.style.left = "18em";
        valoresPersonaMesa[0].innerText = "Mesa dos";
    }else alert("Mesa reservada");
});
mesasTomar[2].addEventListener("click", (e)=>{
    if (!mesaOcupada[2]) {
        mesaSeleccionadaActual = 2;
        containerFichaMesa.style.display = "block";
        containerFichaMesa.style.position = "absolute";
        containerFichaMesa.style.width = "21em";
        containerFichaMesa.style.heigth = "14em";
        containerFichaMesa.style.top = "18em";
        containerFichaMesa.style.left = "18em";
        valoresPersonaMesa[0].innerText = "Mesa tres";
    }else alert("Mesa reservada");
});
mesasTomar[3].addEventListener("click", (e)=>{
    if (!mesaOcupada[3]) {
        mesaSeleccionadaActual = 3;
        containerFichaMesa.style.display = "block";
        containerFichaMesa.style.position = "absolute";
        containerFichaMesa.style.width = "21em";
        containerFichaMesa.style.heigth = "14em";
        containerFichaMesa.style.top = "18em";
        containerFichaMesa.style.left = "18em";
        valoresPersonaMesa[0].innerText = "Mesa cuatro";
    }else alert("Mesa reservada");
});
mesasTomar[4].addEventListener("click", (e)=>{
    if (!mesaOcupada[4]) {
        mesaSeleccionadaActual = 4;
        containerFichaMesa.style.display = "block";
        containerFichaMesa.style.position = "absolute";
        containerFichaMesa.style.width = "21em";
        containerFichaMesa.style.heigth = "14em";
        containerFichaMesa.style.top = "18em";
        containerFichaMesa.style.left = "18em";
        valoresPersonaMesa[0].innerText = "Mesa cinco";
    }else alert("Mesa reservada");
});
mesasTomar[5].addEventListener("click", (e)=>{
    if (!mesaOcupada[5]) {
        mesaSeleccionadaActual = 5;
        containerFichaMesa.style.display = "block";
        containerFichaMesa.style.position = "absolute";
        containerFichaMesa.style.width = "21em";
        containerFichaMesa.style.heigth = "14em";
        containerFichaMesa.style.top = "18em";
        containerFichaMesa.style.left = "18em";
        valoresPersonaMesa[0].innerText = "Mesa seis";
    }else alert("Mesa reservada");
});
mesasTomar[6].addEventListener("click", (e)=>{
    if (!mesaOcupada[6]) {
        mesaSeleccionadaActual = 6;
        containerFichaMesa.style.display = "block";
        containerFichaMesa.style.position = "absolute";
        containerFichaMesa.style.width = "21em";
        containerFichaMesa.style.heigth = "14em";
        containerFichaMesa.style.top = "18em";
        containerFichaMesa.style.left = "18em";
        valoresPersonaMesa[0].innerText = "Mesa siete";
    }else alert("Mesa reservada");
});
mesasTomar[7].addEventListener("click", (e)=>{
    if (!mesaOcupada[7]) {
        mesaSeleccionadaActual = 7;
        containerFichaMesa.style.display = "block";
        containerFichaMesa.style.position = "absolute";
        containerFichaMesa.style.width = "21em";
        containerFichaMesa.style.heigth = "14em";
        containerFichaMesa.style.top = "18em";
        containerFichaMesa.style.left = "18em";
        valoresPersonaMesa[0].innerText = "Mesa ocho";
    }else alert("Mesa reservada");
});
mesasTomar[8].addEventListener("click", (e)=>{
    if (!mesaOcupada[8]) {
        mesaSeleccionadaActual = 8;
        containerFichaMesa.style.display = "block";
        containerFichaMesa.style.position = "absolute";
        containerFichaMesa.style.width = "21em";
        containerFichaMesa.style.heigth = "14em";
        containerFichaMesa.style.top = "18em";
        containerFichaMesa.style.left = "18em";
        valoresPersonaMesa[0].innerText = "Mesa nueve";
    }else alert("Mesa reservada");
});

valoresPersonaMesa[2].addEventListener("click", (e)=>{
    if (valoresPersonaMesa[1].value != "") deshabilitarMesa(valoresPersonaMesa[1].value, mesaSeleccionadaActual);
    else alert("Debes de llenar los campos");
});
valoresPersonaMesa[3].addEventListener("click", (e)=>{
    containerFichaMesa.style.display = "none";
});
confirmar.addEventListener("click", (e)=>{
    alert("hola");
});

function deshabilitarMesa(nombre, mesa){
    conteo++;
    nombrePersonaReservo[conteo] = nombre;
    mesaReservada[conteo] = mesa;
    mesasTomar[mesa].style.background = "red";
    mesaOcupada[mesa] = true;
    valoresPersonaMesa[1].value = "";
    containerFichaMesa.style.display = "none";
    llenarDatosReserva();
}
function llenarDatosReserva(){
    cajaSecundaria.innerHTML = "<h4>Reservas</h4> <br>";
    for (let i = 0; i < mesaReservada.length; i++) {
        cajaSecundaria.innerText += nombrePersonaReservo[i]+" reservo "+(mesaReservada[i]+1)+"\n";
    }
    confirmar.style.display = "block";
    confirmar.style.position = "absolute";
    confirmar.style.width = "120px";
    confirmar.style.height = "50px";
    confirmar.style.bottom = "4em";
}