<?php

$bd = "Alumnos";

include 'conexion.php';

global $conexion;

$sql = "SELECT count(*) as total FROM usuarios";

$result = $conexion->query($sql);

if($result){

    $data = $result->fetch_assoc();
}

echo json_encode($data['total']);