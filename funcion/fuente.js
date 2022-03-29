const mesasTomar = document.querySelectorAll(".mesasTomar");
const cajaSecundaria = document.querySelector("#cajaSecundaria");
const conatinerPreguntasReservas = document.querySelector("#conatinerPreguntasReservas");
const nombrePersonaReservoStayle = document.querySelectorAll(".nombrePersonaReservoStayle");

var mesaReservada = [], conteo = -1, mesaOcupada = [];
function resetearMesas(){
    for (var i = 0; i < 9; i++) {
        mesaOcupada[i] = false;
    }
}
function cargarMesasReservadas(){
    let mesasReservadasPersona = localStorage.getItem("mesasReservoPersona").split(",");
    for(let i = 0; i < (mesasReservadasPersona.length - 1); i++){
        mesaReservada[i] = mesasReservadasPersona[i];
    }
    deshabilitarMesa();
}cargarMesasReservadas();

mesasTomar[0].addEventListener("click", (e)=>{
    let banda = true;
    for (let i = 0; i < mesaReservada.length; i++){
        if (mesaReservada[i] == 0) banda = false;
    }
    if (!mesaOcupada[0]) {
        if (banda) { 
            llenarDatosReserva(0);
        }else alert("Ya eligió esta mesa");
    }else alert("Mesa reservada");
});
mesasTomar[1].addEventListener("click", (e)=>{
    let banda = true;
    for (let i = 0; i < mesaReservada.length; i++){
        if (mesaReservada[i] == 1) banda = false;
    }
    if (!mesaOcupada[1]) {
        if (banda) { 
            llenarDatosReserva(1);
        }else alert("Ya eligió esta mesa");
    }else alert("Mesa reservada");
});
mesasTomar[2].addEventListener("click", (e)=>{
    let banda = true;
    for (let i = 0; i < mesaReservada.length; i++){
        if (mesaReservada[i] == 2) banda = false;
    }
    if (!mesaOcupada[2]) {
        if (banda) { 
            llenarDatosReserva(2);
        }else alert("Ya eligió esta mesa");
    }else alert("Mesa reservada");
});
mesasTomar[3].addEventListener("click", (e)=>{
    let banda = true;
    for (let i = 0; i < mesaReservada.length; i++){
        if (mesaReservada[i] == 3) banda = false;
    }
    if (!mesaOcupada[3]) {
        if (banda) { 
            llenarDatosReserva(3);
        }else alert("Ya eligió esta mesa");
    }else alert("Mesa reservada");
});
mesasTomar[4].addEventListener("click", (e)=>{
    let banda = true;
    for (let i = 0; i < mesaReservada.length; i++){
        if (mesaReservada[i] == 4) banda = false;
    }
    if (!mesaOcupada[4]) {
        if (banda) { 
            llenarDatosReserva(4);
        }else alert("Ya eligió esta mesa");
    }else alert("Mesa reservada");
});
mesasTomar[5].addEventListener("click", (e)=>{
    let banda = true;
    for (let i = 0; i < mesaReservada.length; i++){
        if (mesaReservada[i] == 5) banda = false;
    }
    if (!mesaOcupada[5]) {
        if (banda) { 
            llenarDatosReserva(5);
        }else alert("Ya eligió esta mesa");
    }else alert("Mesa reservada");
});
mesasTomar[6].addEventListener("click", (e)=>{
    let banda = true;
    for (let i = 0; i < mesaReservada.length; i++){
        if (mesaReservada[i] == 6) banda = false;
    }
    if (!mesaOcupada[6]) {
        if (banda) { 
            llenarDatosReserva(6);
        }else alert("Ya eligió esta mesa");
    }else alert("Mesa reservada");
});
mesasTomar[7].addEventListener("click", (e)=>{
    let banda = true;
    for (let i = 0; i < mesaReservada.length; i++){
        if (mesaReservada[i] == 7) banda = false;
    }
    if (!mesaOcupada[7]) {
        if (banda) { 
            llenarDatosReserva(7);
        }else alert("Ya eligió esta mesa");
    }else alert("Mesa reservada");
});
mesasTomar[8].addEventListener("click", (e)=>{
    let banda = true;
    for (let i = 0; i < mesaReservada.length; i++){
        if (mesaReservada[i] == 8) banda = false;
    }
    if (!mesaOcupada[8]) {
        if (banda) { 
            llenarDatosReserva(8);
        }else alert("Ya eligió esta mesa");
    }else alert("Mesa reservada");
});

nombrePersonaReservoStayle[2].addEventListener("click", (e)=>{
    resetearMesas(); 
    for (var i = (mesaReservada.length - 1); i >= 0; i--) {
        mesaReservada.pop();
    } conteo = -1;
    conatinerPreguntasReservas.style.display = "none";
    alert("Ha cancelado la reserva");
});
nombrePersonaReservoStayle[3].addEventListener("click", (e)=>{
    if (nombrePersonaReservoStayle[0].value.trim() != "") {
        let nombrePersonaReservo = nombrePersonaReservoStayle[0].value.trim();
        let mesasReservadasPersona = "";
        for (var i = 0; i < mesaReservada.length; i++) {
            mesasReservadasPersona += mesaReservada[i]+",";
        }
        localStorage.setItem("nombrePersonaReservo",nombrePersonaReservo);
        localStorage.setItem("mesasReservoPersona",mesasReservadasPersona);
        deshabilitarMesa();

    }else alert("Debe ingresar su nombre");
});

function llenarDatosReserva(mesa){
    conatinerPreguntasReservas.style.display = "flex"; conteo++;
    conatinerPreguntasReservas.style.flexFlow = "column wrap";
    mesaReservada[conteo] = mesa;
    nombrePersonaReservoStayle[1].value = "¿Deseas reservar las mesas? \n \n";
    for (let i = 0; i < mesaReservada.length; i++){
        nombrePersonaReservoStayle[1].value += "Mesa n° "+(mesaReservada[i]+1)+"\n";
    }
}
function deshabilitarMesa(){
    for (var i = 0; i < mesaReservada.length; i++) {
        mesasTomar[mesaReservada[i]].style.background = "red";
        mesaOcupada[mesaReservada[i]] = true;
    }
}