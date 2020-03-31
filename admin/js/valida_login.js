$(document).ready(function () {
    $("#btn_entrar").click(function (e) { 
        e.preventDefault();
        enviarDatos();
    });
});

function enviarDatos() {  
    var usuario = $("#username").val();
    var clave = $("#password").val();
        const datos = {
            "usuario": usuario,
            "clave" : clave
        }
        const url = 'login.php';

        // request options
        const opciones = {
            method: 'POST',
            dataType: 'json',
            body: JSON.stringify(datos),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
        }
       // send POST request
        fetch(url, opciones)
            .then(res => res.json())
            .then(res => {
                if (res.error===false){
                    console.log("Redireccionando");
                    $(location).attr('href','admin.php');
                }
            });
           
            
}