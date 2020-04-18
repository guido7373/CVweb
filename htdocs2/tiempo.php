<?php
// Formateamos la salida de la variable.
date_default_timezone_set('America/Argentina/Buenos_Aires');

 $fech1 = substr(date('l'), 0, 3);
 $fech22 =  substr(date('jS'), 0, 2);

 $intt = (int)$fech22;
 
 if ($fech1 =="Mon")
{
	 $fecha_argentina = date('H:i:s');
     echo "Lunes ".$intt." (".$fecha_argentina.") <span class='glyphicon glyphicon-calendar'>";
}

if ($fech1 =="Tue")
{
	$fecha_argentina = date('H:i:s');
     echo "Martes ".$intt." (".$fecha_argentina.") <span class='glyphicon glyphicon-calendar'>";
}

if ($fech1 =="Wed")
{
	$fecha_argentina = date('H:i:s');
     echo "Miercoles ".$intt." (".$fecha_argentina.") <span class='glyphicon glyphicon-calendar'>";
}

if ($fech1 =="Thu")
{
	$fecha_argentina = date('H:i:s');
     echo "Jueves ".$intt." (".$fecha_argentina.") <span class='glyphicon glyphicon-calendar'>";
}

if ($fech1 =="Fri")
{
	$fecha_argentina = date('H:i:s');
     echo "Viernes ".$intt." (".$fecha_argentina.") <span class='glyphicon glyphicon-calendar'>";
}

if ($fech1 =="Sat")
{
	$fecha_argentina = date('H:i:s');
     echo "Sabado ".$intt." (".$fecha_argentina.") <span class='glyphicon glyphicon-calendar'>";
}

if ($fech1 =="Sun")
{
	$fecha_argentina = date('H:i:s');
     echo "Domingo ".$intt." (".$fecha_argentina.") <span class='glyphicon glyphicon-calendar'>";
}
?>
 

