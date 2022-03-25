const validarpago = document.querySelector("#validarpago");
const contenedorFactura = document.querySelector("#contenedorFactura");
const containerAnimacionFactura = document.querySelector("#containerAnimacionFactura");
const persona = document.querySelectorAll(".persona");
const pedir = document.querySelectorAll(".pedir");
const barraInfo_info = document.querySelectorAll(".barraInfo_info");
const barraDescripcion_descripcion = document.querySelectorAll(".barraDescripcion_descripcion");
const barraTotal_total = document.querySelectorAll(".barraTotal_total");

var datosAja = [1,2,3,4,5,6,7,8,9,10,21,432,5,57,79,4,23,4456];

validarpago.addEventListener("click", (e)=>{
	contenedorFactura.style.display = "block";
	contenedorFactura.style.animation = "aparecerContainerFactura 3s forwards";
	setTimeout((e)=>{
		containerAnimacionFactura.style.display = "block";
		containerAnimacionFactura.style.overflow = "auto";
		containerAnimacionFactura.style.animation = "aparecerContainerFacturaAnimation 3.5s forwards";
		setTimeout((e)=>{ containerAnimacionFactura.style.overflow = "hidden";}, 3501);
	}, 3001);

	for(let i = 0; i < 6; i++){
		pedir[i].value = "";
	}
	agregarDatosFactura();
});

function agregarDatosFactura() {
	barraDescripcion_descripcion[0].value = "Producto \n";
	barraDescripcion_descripcion[1].value = "Cantidad \n";
	barraDescripcion_descripcion[2].value = "Precio \n";
	let numeroFactura = Math.floor(Math.random()*8000000 + 500);
	const fecha = new Date();
	barraInfo_info[0].innerText = `n° factura: ${numeroFactura}`;
	barraInfo_info[1].innerText = `Nombre: ${persona[0].value}`;
	barraInfo_info[3].innerText = `Fecha: ${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`;
	barraInfo_info[2].innerText = `Mail: ${persona[1].value}`;
	for (let i = 0; i < datosAja.length; i++) {
		barraDescripcion_descripcion[0].value += "\n"+datosAja[i]+"\n"+"––––––––––––––––––––––––– \n"
		barraDescripcion_descripcion[1].value += "\n"+datosAja[i]+"\n"+"––––––––––––––––––––––––– \n"
		barraDescripcion_descripcion[2].value += "\n"+datosAja[i]+"\n"+"––––––––––––––––––––––––– \n";
	}
	barraTotal_total[0].value = "Total  –> ";
	barraTotal_total[1].value = "Aqui va el total";
}