<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
// $JSONData = file_get_contents("php://input");
// $dataObject = json_decode($JSONData);  
$tabla = $_GET['tabla'];
require 'conectar.php';
$id = $_POST['id'];
$conexion = conectarDB();
$id_poblacion = $_POST['id_poblacion'];
$id_categoria = $_POST['id_categoria'];
$id_tipo = $_POST['id_tipo'];
$descripcion = utf8_decode($_POST['descripcion']);
$nombre = utf8_decode($_POST['nombre']);
$link = utf8_decode($_POST['link']);

// $usuario =  utf8_decode($dataObject-> id_usuario);
   $actualizacion = "UPDATE `menu` SET `id`='$id',`id_poblacion`='$id_poblacion',`id_categoria`='$id_categoria',`id_tipo`='$id_tipo',`nombre`='$nombre',`descripcion`='$descripcion',`link`='$link' WHERE `id`='$id'";

   $resultadoActualizacion = mysqli_query($conexion, $actualizacion); 

   if($resultadoActualizacion)
   {
   //  registrar_bitacora($conexion, $usuario,$id,'Edita','Recursos');
    echo json_encode(array('error'=>'false','msj'=>'Datos actualizados correctamente'));
   }
   else
   {
    echo json_encode(array('error'=>'true','msj'=>$conexion->error)); 
   }
?>