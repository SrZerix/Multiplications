<?php

$bd = "multiplicaciones";

include 'conexion.php';

global $conexion;

$alum = $_REQUEST['alum'];

$tables = 1;

$sql ="SELECT * FROM respuesta WHERE id_user = $alum";

$result = $conexion->query($sql);

if ($result){

    while ($data = $result->fetch_assoc()){

        if ($data['nota'] > 8){

            $tables++;
        }

    }
}

echo json_encode($tables);