$(document).ready(function () {
    $("body").fadeIn(1000);
    $('#boton1').click(function(){
        var opcion = confirm("¿Desea confirmar su pedido?");
        if(opcion = true){
            location.href="index.html"
        }
    })


})

