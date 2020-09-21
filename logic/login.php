<?php

$bd = "Alumnos";

include 'conexion.php';

global $conexion;

$alum = $_REQUEST['alum'];

$sql = $conexion -> prepare("SELECT * FROM usuarios WHERE id = ?");

$sql -> bind_param("i",$alum);

if ($sql->execute()){

    $result = $sql->get_result();

    $data =  $result->fetch_assoc();
}

echo json_encode($data);