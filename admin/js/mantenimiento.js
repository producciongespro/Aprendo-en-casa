var idTemp;
$(document).ready(function () {
    console.log("Js de edición");
    obtenerPoblaciones();
    obtenerCategorias();
    obtenerTipos();
    $('[data-toggle="tooltip"]').tooltip();
    // saveSession();
    realizaProceso();
    $(document).on('click', '.btn-edit', function(){
        idTemp = $(this).attr("id");
        $("#nombre").val($(this).attr("nombre"));
        $("#horario").val($(this).attr("horario"));
        $("#poblacion").val($(this).attr("poblacion"));
        $("#tipo").val($(this).attr("tipo"));
        $("#categoria").val($(this).attr("categoria"));
        $("#link").val($(this).attr("link"));
      $('#dataModal').modal('show'); 
    });
    $(document).on('click', '.btn-del', function(){
      $("#elimina-a").text("¿Está seguro que desea eliminar este elemento?");
      idTemp = $(this).attr("id");
      $('#mi-modal').modal('show'); 
    });
    $("#modal-btn-si").click(function (e) { 
      e.preventDefault();
      eliminarMenu(idTemp,"menu");
      $('#mi-modal').modal('hide');
    });
    $("#btn-actualizar").click(function (e) { 
      e.preventDefault();
      editarMenu(idTemp,"menu");
      $('#dataModal').modal('hide');
    });
 
});

function obtenerPoblaciones() {
    $.getJSON("obtener_poblaciones.php", function(data){
        $.each(data, function(i, valor){
            $("#poblacion").append("<option value=" + valor.id  + ">" +valor.poblacion + "</option>");
        });
    });
}
function obtenerCategorias() {
    $.getJSON("obtener_categorias.php", function(data){

      $.each(data, function(i, valor){
          $("#categoria").append("<option value=" + valor.id  + ">" +valor.categoria + "</option>");
      });
    });
}

function obtenerTipos() {
    $.getJSON("obtener_tipos.php", function(data){    
      $.each(data, function(i, valor){
          $("#tipo").append("<option value=" + valor.id  + ">" +valor.tipo + "</option>");
      });
    });
}

function editarMenu(id,tabla) {
  console.log("Editando a "+tabla);
  data= new FormData();
  data.append("id",id);
  data.append("nombre",$("#nombre").val());
  data.append("descripcion",$("#horario").val());
  data.append("id_poblacion",$("#poblacion").val());
  data.append("id_tipo",$("#tipo").val());
  data.append("id_categoria",$("#categoria").val());
  data.append("link",$("#link").val());
  $.ajax({
    url: "actualizar_menu.php?tabla="+tabla,
    type: 'POST',
    data: data,
    //dataType:'json',
    cache: false,
    contentType: false,
    processData: false,
    beforeSend: function(){
    console.log("En proceso");    
    }, success: function(response){
      console.log("Enviado satisfactoriamente");
      console.log(response);
      realizaProceso();
    }, error: function(response){
      console.log("Error al enviar");
        console.log(response.error);
        console.log(response.msj);     
    }
  });
}

function eliminarMenu(id,tabla) {
  console.log("Borrando a "+tabla);
  data= new FormData();
  data.append("id",id);
  data.append("tabla",tabla);
  $.ajax({
    url: "eliminar_registro.php",
    type: 'POST',
    data: data,
    //dataType:'json',
    cache: false,
    contentType: false,
    processData: false,
    beforeSend: function(){
    console.log("En proceso");    
    }, success: function(response){
      console.log("Enviado satisfactoriamente");
      console.log(response);
      realizaProceso();
    }, error: function(response){
      console.log("Error al enviar");
        console.log(response.error);
        console.log(response.msj);     
    }
  });
}

// function saveSession() {
//   let tipo = sessionStorage.getItem("tipo");
//   correoUser = sessionStorage.getItem("correo"); 
//   // $("#divInicio").html('<a href="../server/login/logout.php"><i class="fas fa-sign-out-alt"></i> Cerrar sesión</a>')
//   // $("#divUsuario").html('<i class="fas fa-user-alt"></i> '+correoUser)
//   $("#divInfo").html('<a id="btnInicio" href="index.php" alt="Inicio"><i class= "fas fa-home"></i></a>&nbsp;&nbsp;&nbsp;&nbsp; <a href="#" class="acerca-de" data-toggle="tooltip" title="Acerca de"> <i class="fas fa-info-circle"></i></a>');
//   $("#divUsuario").html('<i class="fas fa-user-alt"></i><span class="usuario"> </span>'+correoUser);
//   $("#divSalir").html('<a href="../server/login/logout.php" data-toggle="tooltip" title="Cerrar sesión"><i class="fas fa-sign-out-alt"></i></a>');
//   cargaModalAcercaDe();  
// }

function realizaProceso(){

const data = new FormData();
 url= 'obtener_menu.php';
 fetch( url)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        dibujarTabla (myJson, '#visor');
       
    })
  }  


  function dibujarTabla (array, visor) {
    console.log(array);
    // moment.locale('es'); 
       $(visor).empty();
   
       var limite = array.length, row,
       htmlTable = $(
         "<table  id='tblReportes' class='table table-striped'>" +
         "<thead>" +
         "<tr>" +
           "<th scope='col'>#</th>" +
           "<th class='text-center' scope='col'>Nombre</th>" +
           "<th class='text-center' scope='col'>Población</th>" +
           "<th scope='text-center' >Categoría</th>" +
           "<th scope='text-center' >Tipo</th>" +
           "<th scope='text-center'>Horario</th>" +
           "<th scope='text-center'>Enlace</th>" +
           "<th scope='text-center'>Editar</th>" +
           "<th scope='text-center'>Eliminar</th>" +
         "</tr>" +
         "</thead>" +
         "</table>"
       ), tBody = $("<tbody></tbody>");
   
               for (let index = 0; index < limite; index++) {
                 let fowNumb = index + 1;
                 
                 row = $(
                   "<tr>" +
                   "<td class='text-center'>"+(index + 1)+"</td>" +
                   "<td class='text-center'>" +
                      array[index].nombre +
                   "</td>" +
                     "<td class='text-center'>" +
                       array[index].poblacion +
                     "</td>" +
                     "<td >" +
                       array[index].categoria +
                     "</td>" +
                     "<td>" +
                       array[index].tipo +
                     "</td>" +
                     "<td>" +
                     array[index].descripcion +
                   "</td>" +
                   "<td>" +
                   array[index].link +
                 "</td>" +
                     "<td class='btn-edit-del'>" +
                     "<i id='"+ array[index].id +"'link='"+ array[index].link +"'tipo='"+ array[index].id_tipo +"'categoria='"+ array[index].id_categoria +"'poblacion='"+ array[index].id_poblacion +"'nombre='"+ array[index].nombre +"'horario='"+ array[index].descripcion +"'class='fas fa-edit btn-edit'>" +
                   "</td>" +
                   "<td class='btn-edit-del'>" +
                       "<i id='"+array[index].id +"' class='fas fa-trash-alt btn-del'></i>" +
                   "</td>"  +
                   "</tr>"
               );
                 $(tBody).append(row);
             }
       $(htmlTable).append(tBody);
        $(visor).html(htmlTable);
        cambiarClases();
    //    loadDataTable();
     }

    function loadDataTable() {
        var table = $('#tblReportes').DataTable({
          dom: 'Blfrtip',
          buttons: [
              {extend: 'copy',text: '<i class="far fa-copy"></i> Copiar'},
              {extend: 'excel',text: '<i class="far fa-file-excel"></i> Exportar a Excel'},
              {extend: 'pdf',text: '<i class="far fa-file-pdf"></i> Exportar como PDF'},
              {extend: 'print',text: '<i class="fas fa-print"></i> Imprimir'}
          ],
          "language": {
            "emptyTable":			"No hay datos disponibles en la tabla.",
            "info":		   			"Del _START_ al _END_ de _TOTAL_ ",
            "infoEmpty":			"Mostrando 0 registros de un total de 0.",
            "infoFiltered":			"(filtrados de un total de _MAX_ registros)",
            "infoPostFix":			"(actualizados)",
            "lengthMenu":			"Mostrar _MENU_ registros",
            "loadingRecords":		"Cargando...",
            "processing":			"Procesando...",
            "search":				"Buscar:",
            "searchPlaceholder":	"Dato para buscar",
            "zeroRecords":			"No se han encontrado coincidencias.",
            "paginate": {
                "first":			"Primera",
                "last":				"Última",
                "next":				"Siguiente",
                "previous":			"Anterior"
            },
            "aria": {
                "sortAscending":	"Ordenación ascendente",
                "sortDescending":	"Ordenación descendente"
            }
        },
        "lengthMenu":				[[5, 10, 20, 25, 50, -1], [5, 10, 20, 25, 50, "Todos"]],
            "lengthMenu": [ [10, 25, 50, -1], [10, 25, 50, "Todas"] ]
     
        });
       
        $('#tblReportes tfoot th').each( function () {
          var title = $(this).text();
          $(this).html( '<input type="text" placeholder="Buscar '+title+'" />' );
      } );

        // Apply the search
        table.columns().every( function () {
            var that = this;
     
            $( 'input', this.footer() ).on( 'keyup change', function () {
                if ( that.search() !== this.value ) {
                    that
                        .search( this.value )
                        .draw();
                }
                
            } );
        } );
     
    }
    
        
       function cambiarClases(){
        if (sessionStorage.getItem("tipo")==6){
            $( ".lnk-ico" ).removeClass( "btn-edit btn-del" ).addClass( "btn-inactivo" );
            console.log("Usuario asesor");
        }
       }
    