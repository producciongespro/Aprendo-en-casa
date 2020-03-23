    // var poblaciones=[];
    // var categorias=[];
    $(document).ready(function() {
        $("#categorias").select(0);
       obtenerPoblaciones();
       obtenerCategorias();
       $("#horarios_tv").hide();
       $("#btnEnviarRecurso").click(function (e) { 
           e.preventDefault();
           formularioCovid();
       });
       $("#btnEnviar").click(function (e) { 
           e.preventDefault();
           formularioRecursos();
       });
       $("#categorias").change(function (e) { 
           e.preventDefault();
           if ($("#categorias").val()==="1"){
            $("#horarios_tv").show();
               
           } else {
            $("#horarios_tv").hide();
           }
       });
});

function formularioRecursos() {   
          $.ajax({
            type: 'POST',
            dataType: 'json',
            url: "enviar_datos.php",
            data: $('#formulario').serialize(),
            success: function(response){
                console.log(response.msj); 
                $('#formulario')[0].reset(); 
                $("#resultado").html("<p>"+response.msj+ "</p>")  
                $("#divMensaje").addClass("show");
            },
            error: function(response){
                console.log(response.msj);
                $("#resultado").html("<p>"+response.msj+ "</p>")  
                $("#divMensaje").addClass("show");
            }
        });
}

function formularioCovid() { 
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: "enviar_recursos.php",
            data: $("#formulario2").serialize(),
            success: function(response){
                console.log(response.msj); 
                $('#formulario2')[0].reset(); 
                $("#resultado").html("<p>"+response.msj+ "</p>")  
                $("#divMensaje").addClass("show");
            },
            error: function(response){
                console.log(response.msj);
                $("#resultado").html("<p>"+response.msj+ "</p>")  
                $("#divMensaje").addClass("show");
            }
        });
}


    
function obtenerCategorias() {
      $.getJSON("obtener_categorias.php", function(data){
        console.log(data);
        $.each(data, function(i, valor){
            $("#categorias").append("<option value=" + valor.id  + ">" +valor.categoria + "</option>");
        });
      });
}

function obtenerPoblaciones() {
    $.getJSON("obtener_poblaciones.php", function(data){
        console.log(data);
        $.each(data, function(i, valor){
            $("#poblaciones").append("<option value=" + valor.id  + ">" +valor.poblacion + "</option>");
        });
    });
}