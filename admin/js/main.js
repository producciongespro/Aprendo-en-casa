    var poblaciones=[];
    var categorias=[];
    $(document).ready(function() {
       obtenerPoblaciones();
       obtenerCategorias();
       $('#formulario').submit(function(event){
    
        event.preventDefault();

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: "enviar_datos.php",
            data: $(this).serialize(),
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
    })
});
    
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