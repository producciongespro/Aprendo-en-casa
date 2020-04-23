<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: index.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>   
    <!-- <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script> -->
    <!-- Latest compiled and minified CSS -->
    <!-- <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script> -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script> -->
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"> -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="css/estilos.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <script src="js/main.js"></script>
    <script src="js/mantenimiento.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz&display=swap" rel="stylesheet">
    <link href="css/estilos.css" rel="stylesheet">
    <title>Nuevos recursos APRENDO EN CASA</title>
</head>

<body>
    <div class="row text-center">
        <div class="col-12">
             <img id="banner" class="img img-fluid" src="" alt="">
        </div>
    </div>
    <div class="row">
    <!-- <div class="col-sm-4"></div> -->
        <div class="col-sm-4 text-center"></div> 
          <div class="col-sm-8 text-right">
          <form action='../webservices/cerrar_sesion.php'>
           Bienvenido <?php echo $_SESSION["username"]?> <input id="btn_cerrar" type="submit" name="sesionDestroy" value="Cerrar sesion"/>
          </form><br>
      </div> 
     
    </div>

    <div class="row text-center">
       <div class="col-sm-12">
           <span class="menu" id="op-aprendo">APRENDO EN CASA</span> <span id="op-covid" class="menu">ENLACES COVID-19</span>
       </div>
   </div>
    <section id="aprendo" style="margin-top: 25px;">
    <div class="row text-center">
        <div class="col-12">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
 Agregar nuevo
</button>
        </div>
    </div>
<br>
    <div id="dataModal" class="modal fade">  
      <div class="modal-dialog">  
           <div class="modal-content">  
                <div class="modal-header">  
                     <button type="button" class="close" data-dismiss="modal">&times;</button>  
                     <h4 class="modal-title">Detalles de elemento</h4>  
                </div>  
                <div class="modal-body" id="employee_detail">  
                    <label for="nombre">Nombre:</label>
                    <input type="text" name="nombre" id="nombre"></input><br>
                    <label for="nombre">Categoría</label>
                    <select name="categoria" id="categoria">
                    </select><br>
                    <label for="poblacion">Población</label>
                    <select name="poblacion" id="poblacion">
                    </select><br>
                    <label for="tipo">Tipo</label>
                    <select name="tipo" id="tipo">
                    </select><br>
                    <label for="horario">Horario:</label>
                    <input type="text" name="horario" id="horario"></input><br>
                    <label for="link">Enlace:</label>
                    <input type="text" name="link" id="link"></input><br>
                </div>  
                <div class="modal-footer">  
                <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button> 
                <button id="btn-actualizar" type="button" class="btn btn-success">Actualizar</button>  
                </div>  
           </div>  
      </div>  
 </div> 
 <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" id="mi-modal">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Confirmar</h4>
      </div>
        <div class="modal-body" id="">
            <span id="elimina-a"></span>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" id="modal-btn-si">Si</button>
        <button type="button" class="btn btn-primary" id="modal-btn-no" data-dismiss="modal">No</button>
      </div>
    </div>
  </div>
</div>


        <div class="row">
            <div class="col-12" id="visor">

            </div>
        </div>
     <!-- The Modal -->
<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Agregar recurso</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
      <div class="container" id="contenedor">
            <h3>Nuevo recurso/enlace</h3>
            <form id="formulario" action="">
                <div class="form-group">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="selector-tipos">
                                <label for="poblaciones">Seleccione la población</label>
                                <select class="form-control" name="poblaciones" id="poblaciones">
                                    <option value="Seleccione población" selected disabled></option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="selector-tipos">
                                <label for="categorias">Seleccione la categoría</label>
                                <select class="form-control" name="categorias" id="categorias">
                                    <option value="Seleccione una categoría" selected disabled></option>
                                </select>
                            </div>
                        </div>

                        <br>
                        <div class="col-sm-12">
                            <div class="selector-tipos">
                                <label for="categorias">Ingrese el nombre del recurso</label><br>
                                <input  type="text"  class="form-control" name="nombre" id="nombre"></input>
                            </div>
                        </div>
                        <br>
                        <div class="col-sm-12">
                            <div class="selector-tipos oculto" id="horarios_tv">
                                <label for="categorias">Ingrese el horario (en caso de oferta televisiva)</label><br>
                                <input  type="text"  class="form-control" name="horario" id="horario"></input>
                            </div>
                        </div>
                        <br>
                        <div class="col-sm-12">
                            <div class="selector-tipos">
                                <label for="categorias">Ingrese la url</label><br>
                                <input type="text" class=" form-control" name="url" id="url"></input>
                            </div>
                        </div>
                        <br>
                        <!-- <div class="col-sm-12">
                            <div class="selector-tipos">
                                <label for="categorias">Ingrese clave</label><br>
                                <input type="password" class=" form-control" name="clave" id="clave"></input>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="row text-center">
                            
                            <div class="col-12 text-center"><br>
                            <button name="btnEnviar" class="btn btn-success" id="btnEnviar" type="submit">Enviar recurso</button>
                            </div>
                        </div>
            </form><br>
            <div id="divMensaje" class="alert alert-warning alert-dismissible fade" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
    <span id="resultado"></span>
</div>
        </div>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
      </div>

    </div>
  </div>
</div>   
    </section>

    <section id="covid" style="margin-top: 25px;">
        <div class="container" id="contenedor">
            <h3>Nuevo recurso/enlace</h3>
            <form id="formulario2" action="">
                <div class="form-group">
                    <div class="row">
                        <br>
                        <div class="col-sm-12">
                            <div class="selector-tipos">
                                <label for="categorias">Ingrese el nombre del recurso</label><br>
                                <input  type="text"  class="form-control" name="nombre" id="nombre"></input>
                            </div>
                        </div>
                        <br>
                        <div class="col-sm-12">
                            <div class="selector-tipos">
                                <label for="categorias">Ingrese la descripción del recurso</label><br>
                                <input  type="text"  class="form-control" name="descriptivo" id="descriptivo"></input>
                            </div>
                        </div>
                        <br>
                        <div class="col-sm-12">
                            <div class="selector-tipos">
                                <label for="categorias">Ingrese la url del recurso</label><br>
                                <input type="text" class=" form-control" name="url" id="url"></input>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="selector-tipos">
                                <label for="categorias">Ingrese la url de la imagen</label><br>
                                <input type="text" class=" form-control" name="urlImagen" id="urlImagen"></input>
                            </div>
                        </div>
                        <br>
                        <!-- <div class="col-sm-12">
                            <div class="selector-tipos">
                                <label for="categorias">Ingrese clave</label><br>
                                <input type="password" class=" form-control" name="clave" id="clave"></input>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="row text-center">
                            
                            <div class="col-12 text-center"><br>
                            <button name="btnEnviarRecurso" class="btn btn-success" id="btnEnviarRecurso" type="submit">Enviar enlace</button>
                                <!-- <input  type="submit" class="btn btn-success" value="Enviar"> -->
                            </div>
                        </div>
            </form><br>
            <div id="divMensaje2" class="alert alert-warning alert-dismissible fade" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
    <span id="resultado2"></span>
</div>
        </div>
    </section>
</body>

</html>