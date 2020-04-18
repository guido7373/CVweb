<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<?php
		
	$destino="guidofacio91@gmail.com,guido_73@live.com.ar";
	$nombre =$_POST["nombre"];
	$correo = "From:".$_POST["email"];
	$mensaje = $_POST["consulta"];
	$hidden = $_POST["hidden"];

	$contenido= "Nombre: ".$nombre." \n Correo: ".$correo." \n Mensaje: ".$mensaje;

	if ($hidden==true)
	{
	 mail($destino,"Consulta desde la Web",$contenido,$correo);
	 header("Location:/");
	}
	else{
		  header("Location:lala.html");
		}
	?>

	<h1><?php echo $hidden; ?></h1>

</body>
</html>