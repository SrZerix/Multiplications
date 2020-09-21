<?php

$bd = "multiplicaciones";

include 'conexion.php';

global $conexion;

$user = $_REQUEST['user'];

$number = $_REQUEST['number'];

$note = $_REQUEST['note'];

$contNice = $_REQUEST['contNice'];

$contError = $_REQUEST['contError'];

$sql = "INSERT INTO respuesta VALUES (null,'$user','$number','$note','$contNice','$contError')";

if(!$conexion -> query($sql)){
    echo ('Error');
}

echo ('Nice');