const botnIniciar = document.querySelector("#botnIniciar");
const containerbienvenida = document.querySelector("#containerbienvenida");
////////////// animacion bienvenida ////////////////////////
const containerAnimacionBienvenida = document.querySelector("#containerAnimacionBienvenida");
const frase1Animacion = document.querySelector("#frase1Animacion");
const frase2Animacion = document.querySelector("#frase2Animacion");
const fuegoExplosion = document.querySelectorAll(".fuegoExplosion");

botnIniciar.addEventListener("click", (e)=>{
	containerbienvenida.style.display = "none";
	containerAnimacionBienvenida.style.display = "block";
	containerAnimacionBienvenida.style.width = "100%";
	containerAnimacionBienvenida.style.height = "100vh";
	containerAnimacionBienvenida.style.position = "relative";
	frase1Animacion.style.animation = "movimientoFrase1 3s forwards";
	frase2Animacion.style.animation = "movimientoFrase2 3s forwards";
	setTimeout((e)=>{
		fuegoExplosion[0].style.color = "red";
		fuegoExplosion[1].style.color = "red";
		frase1Animacion.style.animation = "explosionFrase1 1s forwards";
		frase2Animacion.style.animation = "explosionFrase2 1s forwards";
		setTimeout(desparecerAnimacionBienvenida, 1000);
	}, 2900);
});

function desparecerAnimacionBienvenida(){
	containerAnimacionBienvenida.style.display = "none";
}