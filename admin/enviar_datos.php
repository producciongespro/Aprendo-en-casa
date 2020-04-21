<?php
header("Content-type:text/html;charset=utf-8");
include('conectar.php');
sleep(2);
$conexion=conectarDB();
if ($_POST) {
  $poblacion= utf8_decode($_POST['poblaciones']);
  $categoria= utf8_decode($_POST['categorias']);
  $tipo = 1;
  $nombre= utf8_decode($_POST['nombre']);
  $url= utf8_decode($_POST['url']);
  $horario = utf8_decode($_POST['horario']);

 
       $insercion = "INSERT INTO `menu`(`id_poblacion`, `id_categoria`, `id_tipo`, `nombre`, `descripcion`, `link`) VALUES ('$poblacion','$categoria','$tipo','$nombre','$horario','$url')";
        // mysqli_query($conexion,$insercion);
        if ($conexion->query($insercion) === TRUE) {
            echo json_encode(array('error'=>'false','msj'=>'Recurso agregado satisfactoriamente'));
            } else {
                echo json_encode(array('error'=>'true','msj'=>$conexion->error)); 
            }
            mysqli_close($conexion);
  }
   

