<?php session_start(); ?>
<html>
	<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Aprendo en casa - Administración</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.js"></script> 
		<script src="js/valida_login.js"></script>
	</head>
	<body>
<div class="container">
<div class="row">
    <div class="col-md-3"></div>
<div class="col-md-6">
    <div class="text-center">
    <div class="p-2 border-logo"><img class ="logo" src="img/titulo.png" alt="logo Caja de Herramientas"></div><br>
    </div>
        <div class="text-center">
		<h2>Administración</h2>
        </div>
		<form role="form" name="login" action="" method="post">
		  <div class="form-group">
		    <label for="username">Usuario</label>
		    <input type="text" class="form-control" id="username" name="username" placeholder="Nombre de usuario">
		  </div>
		  <div class="form-group">
		    <label for="password">Contrase&ntilde;a</label>
		    <input type="password" class="form-control" id="password" name="password" placeholder="Contrase&ntilde;a">
		  </div>

		  <button type="button" id="btn_entrar" class="btn btn-success">Entrar</button>
		</form>
</div>
<div class="col-md-3"></div>
</div>
</div>
	
	</body>
</html>