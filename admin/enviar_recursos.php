<?php
header("Content-type:text/html;charset=utf-8");
include('conectar.php');
sleep(2);
$conexion=conectarDB();
if ($_POST) {
  $nombre= utf8_decode($_POST['nombre']);
  $descriptivo= utf8_decode($_POST['descriptivo']);
  $url= utf8_decode($_POST['url']);
  $urlImagen = utf8_decode($_POST['urlImagen']);


       $insercion = "INSERT INTO `enlaces`(`nombre`, `descriptivo`, `url`, `urlImagen`) VALUES ('$nombre','$descriptivo','$url','$urlImagen')";
        // mysqli_query($conexion,$insercion);
        if ($conexion->query($insercion) === TRUE) {
            echo json_encode(array('error'=>'false','msj'=>'Recurso agregado satisfactoriamente'));
            } else {
                echo json_encode(array('error'=>'true','msj'=>$conexion->error)); 
            }
            mysqli_close($conexion);
  }
   