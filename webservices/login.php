<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
    include "conectar.php";
    $mysqli = conectarDB();
    //sleep(1);	
	// $JSONData = file_get_contents("php://input");
	// $dataObject = json_decode($JSONData);    
    session_start();    
    $mysqli->set_charset('utf8');
    $usuario = $_POST['usuario'];
    $clave = $_POST['clave']; 
	// $usuario = $dataObject-> usuario;
	// $pas =	$dataObject-> clave;
    
  if ($nueva_consulta = $mysqli->prepare("SELECT 
  usuarios.nombre, usuarios.clave, usuarios.apellido1, usuarios.apellido2, usuarios.usuario, usuarios.idTipoUsuario, usuarios.id, usuarios.departamento, tipo_usuario.etiquetaTipoUsuario, tipo_usuario.descripcionTipoUsuario 
  FROM usuarios 
  INNER JOIN tipo_usuario ON usuarios.idTipoUsuario = tipo_usuario.idTipoUsuario
  WHERE usuario = ?")) {
        $nueva_consulta->bind_param('s', $usuario);
        $nueva_consulta->execute();
        $resultado = $nueva_consulta->get_result();
        if ($resultado->num_rows == 1) {
            $datos = $resultado->fetch_assoc();
             $encriptado_db = $datos['clave'];
            if (password_verify($pas, $encriptado_db))
            {
                $_SESSION['usuario'] = $datos['usuario'];
                // echo json_encode(array('error'=>false,'usuario'=>$datos['usuario'], 'nombre'=>$datos['nombre'],  'apellido1'=>$datos['apellido1'],  'apellido2'=>$datos['apellido2'], 'id'=>$datos['id'], 'idTipoUsuario'=>$datos['idTipoUsuario'], 'etiquetaTipoUsuario'=>$datos['etiquetaTipoUsuario']  ) );
                
                header("Location: admin.php");
                echo "<script>console.log('Correcto')</script>";
              }

               else {
                echo "<script>console.log('InCorrecto')</script>";
                //  echo json_encode(array('error'=>true, 'error_msg' => 'La clave es incorrecta, vuelva a intentarlo.'));
                    }
        }
        else {
          echo "<script>console.log('InCorrecto2')</script>";
              // echo json_encode(array('error'=>true, 'error_msg' => 'El usuario no existe.'));
        }
        $nueva_consulta->close();
      }
 // }
$mysqli->close();
?>