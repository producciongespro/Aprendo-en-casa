    // var poblaciones=[];
    // var categorias=[];
    $(document).ready(function() {
        $("#categorias select").val("0");
       obtenerPoblaciones2();
       obtenerCategorias2();
       $("#banner").attr("src","img/encabezado_ch_aprendoencasa.png");
       $("#horarios_tv").hide();
       $("#covid").hide();
       $("#op-aprendo").addClass("menu-activo");
       $("#btnEnviarRecurso").click(function (e) { 
           e.preventDefault();
           formularioCovid();
       });
       $("#btnEnviar").click(function (e) { 
           e.preventDefault();
           formularioRecursos();
       });
       $("#op-aprendo").click(function (e) { 
        e.preventDefault();
        $("#banner").attr("src","img/encabezado_ch_aprendoencasa.png");
        $("#aprendo").show();
        $("#covid").hide();
        $("#op-covid").removeClass("menu-activo");
        $("#op-aprendo").addClass("menu-activo");
    });
       $("#op-covid").click(function (e) { 
        e.preventDefault();
        $("#banner").attr("src","img/encabezado_ch_recursos_covid19.png");
        $("#covid").show();
        $("#aprendo").hide();
        $("#op-aprendo").removeClass("menu-activo");
        $("#op-covid").addClass("menu-activo");
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
            url: "../webservices/enviar_datos.php",
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
            url: "../webservices/enviar_recursos.php",
            data: $("#formulario2").serialize(),
            success: function(response){
                console.log(response.msj); 
                $('#formulario2')[0].reset(); 
                $("#resultado2").html("<p>"+response.msj+ "</p>")  
                $("#divMensaje2").addClass("show");
            },
            error: function(response){
                console.log(response.msj);
                $("#resultado2").html("<p>"+response.msj+ "</p>")  
                $("#divMensaje2").addClass("show");
            }
        });
}


    
function obtenerCategorias2() {
      $.getJSON("../webservices/obtener_categorias.php", function(data){
        console.log(data);
        $.each(data, function(i, valor){
            $("#categorias").append("<option value=" + valor.id  + ">" +valor.categoria + "</option>");
        });
      });
}

function obtenerPoblaciones2() {
    $.getJSON("../webservices/obtener_poblaciones.php", function(data){
        console.log(data);
        $.each(data, function(i, valor){
            $("#poblaciones").append("<option value=" + valor.id  + ">" +valor.poblacion + "</option>");
        });
    });
}