$(document).ready(function () {
    $("#btn_entrar").click(function (e) { 
        e.preventDefault();
        enviarDatos();
    });
});

function enviarDatos() {  
    var usuario = $("#username").val();
    var clave = $("#password").val();
//     const url = 'login.php';

//        $.ajax({
//         url: url,
//         type: "POST",
//         // dataType:'json',
//         data: "usuario="+usuario+"&clave="+clave,
//         success: function(resp){
//             console.log(resp);
//             $(location).attr('href','admin.php');
//         },
//         error: function (response) {
//                         console.log(response);
//         }
// });
            
	
        const datos = {
            usuario: usuario,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
              },
            clave : clave
        }
        const url = './login.php';		
				axios.post(url, datos)
				//   .then(function (response) {
                    .then(response => {
                    console.log(response);
                    console.log("Redireccionando");
                    $(location).attr('href','admin.php');
				  })
				  .catch(function (error) {
					console.log(error);
				  });
           
            
}