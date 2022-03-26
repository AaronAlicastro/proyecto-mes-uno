var m1 = document.querySelector('.m1');
var m2 = document.querySelector('.m2');
var mesa1 = document.querySelector('.mesa1');
var mesa2 = document.querySelector('.mesa2');
var EstadoMesa;
var EstadoMesa1;
var form = document.querySelector('#form');
var cerrar = document.querySelector("#cerrar");
var boton = document.querySelector("#submit");
var nombre = document.querySelector("#nombre")
var modal = localStorage.getItem('EstadoMesa');
var apellido = document.querySelector('#apellido');

var cajaSecundaria = document.querySelector('#cajaSecundaria');
o();
validacion2();
function validacion2() {
    nombre.addEventListener('input', () => {
        if (nombre.value == '') {
            nombre.style.border = "solid 1px red";
        } else {
            nombre.style.border = "solid 1px green";
        }
    });
    apellido.addEventListener('input', () => {
        if (apellido.value == '') {
            apellido.style.border = "solid 1px red";
        } else {
            apellido.style.border = "solid 1px green";
        }
    });
}

if (modal == 'false') {
    mesa1.style.background = '#FEECEA';
    m1.style.color = 'rgb(128, 128, 128)';
    mesa2.style.background = '#FEECEA';
    m2.style.color = 'rgb(128, 128, 128)';
}
mesa1.addEventListener('click', () => {
    var mesa1 = true;
    mesa1 = localStorage.getItem('EstadoMesa');

    datosPersona(mesa1, 'mesa1');
    limpiar();
})
mesa2.addEventListener('click', () => {
    var mesa2 = true;
    mesa2 = localStorage.getItem('EstadoMesa1');
    // console.log(mesa2);
    datosPersona(mesa2, 'mesa2');
    limpiar();
})
var personas = [];
var nombres2 = [];
function datosPersona(mesa, seleccions) {

    if (mesa == null) {
        form.classList.remove('form1');
        form.classList.add('form2');
        cerrar.addEventListener('click', () => {
            form.classList.remove('form2');
            form.classList.add('form1');
        });
        boton.addEventListener('click', () => {
            if (nombre.value == '' || apellido.value == '') {
                alert("Datos incompletos");
                if (nombre.value == '') {
                    nombre.style.border = "solid 1px red";
                }
                if (apellido.value == '') {
                    apellido.style.border = "solid 1px red";
                }

            } else {

                // form.classList.remove('form2');
                // form.classList.add('form1');
                // console.log(seleccions.value)
                if (seleccions == 'mesa1') {
                    // cajaSecundaria.appendChild(p2);
                    console.log('es mesa1')
                    EstadoMesa = false;
                    mesa1.classList.remove('desocupada');
                    mesa1.classList.add('ocupada');
                    localStorage.setItem('EstadoMesa', EstadoMesa);
                    form.classList.remove('form2');
                    form.classList.add('form1');
                    // var numero = Math.random() * 1000000
                    // console.log(parseInt(numero));
                    // var nombreA = nombre.value;
                    // var apellidoB = apellido.value;
                    // persona += nombreA;
                    // persona += apellidoB;
                    // personas += persona
                    // localStorage.setItem('personas',personas);
                    var nombres = nombre.value + apellido.value;

                    nombres2.push(nombres)
                    // personas.push(nombres2)
                    localStorage.setItem('apellidos', nombres2);

                    // nombres2 += (nombres)
                    // personas2()
                    // var p = document.createElement('p');
                    // p.innerHTML = localStorage.getItem('apellidos');
                    // cajaSecundaria.appendChild(p);
                    // var p = document.createElement('p');
                    // p.innerHTML = localStorage.getItem('apellidos');
                    // cajaSecundaria.appendChild(p);

                }
                if (seleccions == 'mesa2') {
                    mesa2.classList.remove('desocupada');
                    mesa2.classList.add('ocupada');
                    EstadoMesa1 = false;
                    localStorage.setItem('EstadoMesa1', EstadoMesa1);
                    form.classList.remove('form2');
                    form.classList.add('form1');
                    // personas2() 
                    // var p = document.createElement('p');
                    // p.innerHTML = localStorage.getItem('apellidos');
                    // cajaSecundaria.appendChild(p);
                    nombres2.push(nombres)
                    localStorage.setItem('apellidos', nombres2);
                    // var p = document.createElement('p');
                    // p.innerHTML = localStorage.getItem('apellidos');
                    // cajaSecundaria.appendChild(p);
                }

            }
            // EstadoMesa = true;
        });
    } else {
        alert('Se ecnuentra temporalmente ocupado');
    }
};
function limpiar() {
    nombre.value = '';
}



// var p = document.createElement('p');
// // var p2 = document.createElement('p');
// var otro = localStorage.getItem('apellidos');
// console.log(otro);
// p.innerHTML = otro;
// // p2.innerHTML = apellido.value;
// cajaSecundaria.appendChild(p);
function o() {
    var p = document.createElement('p');
    p.innerHTML = localStorage.getItem('apellidos');
    cajaSecundaria.appendChild(p);
}
