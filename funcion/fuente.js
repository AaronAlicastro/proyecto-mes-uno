var m1 = document.querySelector('.m1');
var mesa1 = document.querySelector('.mesa1');
var EstadoMesa;
var form = document.querySelector('#form');
var cerrar = document.querySelector("#cerrar");
var boton = document.querySelector("#submit");
var nombre = document.querySelector("#nombre")
var modal = localStorage.getItem('EstadoMesa');

// if(nombre.value == ''){
validacion2();
function validacion2(){
    nombre.addEventListener('input',()=>{
        if(nombre.value == ''){
            nombre.style.border = "solid 1px red";
        }else{
            nombre.style.border = "solid 1px green";
        }
    }); 
    apellido.addEventListener('input',()=>{
        if(apellido.value == ''){
            apellido.style.border = "solid 1px red";
        }else{
            apellido.style.border = "solid 1px green";
        }
    }); 
}
        // nombre.classList.remove('.borde1')
        // nombre.classList.add('.borde1');
        // nombre.style.border = "solid 1px red"
    // });
// }else{
    // nombre.addEventListener('blur',()=>{
        // alert("lleno");
        // nombre.classList.remove('.borde1');
        // nombre.classList.add('.borde2');
        // nombre.style.border = "solid 1px green"
    // });
// }
if(modal == 'false'){
    mesa1.style.background = 'red';
    m1.style.color = 'white';
}
mesa1.addEventListener('click', () => {
    var mesa2 = true;

    mesa2 = localStorage.getItem('EstadoMesa');
    datosPersona(mesa2);
    
})

// console.log(typeof mesa2)
// console.log(mesa2)

function datosPersona(mesa2){
    
    if(mesa2 == null){
        form.classList.remove('form1');
        form.classList.add('form2');
        cerrar.addEventListener('click',()=>{
            form.classList.remove('form2');
            form.classList.add('form1');
        });
        boton.addEventListener('click',()=>{
            if(nombre.value == '' || apellido.value == ''){
                // nombre.style.border = "solid 1px red";
                alert("Datos incompletos");
                if(nombre.value == ''){
                    nombre.style.border = "solid 1px red";
                }
                if(apellido.value == ''){
                    apellido.style.border = "solid 1px red";
                }
                
            }else{
                form.classList.remove('form2');
                form.classList.add('form1');
                mesa1.classList.remove('desocupada');
                mesa1.classList.add('ocupada');
                EstadoMesa = false; 
                localStorage.setItem('EstadoMesa', EstadoMesa);
            }
        });
    }else{
        alert('Se ecnuentra temporalmente ocupado');
    }
};
// function validacion(){
//     if(nombre.value == ''){
//         nombre.addEventListener('active',()=>{
//             // nombre.style.border = 'solid 1px red';
//             nombre.classList.add('.borde1')
//             nombre.classList.remove('.borde2')
            
//         });
//     }else{
//         nombre.addEventListener('active',()=>{
//             // nombre.style.border = 'solid 1px green';
//             nombre.classList.add('.borde2')
//             nombre.classList.remove('.borde1')
            
//         });
//     }
    
// }
// validacion();