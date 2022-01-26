<?php

header("Acces-Control-Allow-Origin: *");
header("Acces-Control-Allow-Headers: access");
header("Acces-Control-Allow-Methods: GET, POST");
header("Control-Type: aplication/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// conecta a la base de datos con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "solicitud";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);

// consulta datos y recepciona una clave para consultar datos con dicha clave
if (isset($_GET["consulta"])) {
    $sqlEmpleados = mysqli_query($conexionBD, "SELECT * FROM solicitud WHERE id=".$GET["consulta"]);
    if (mysqli_num_rows($sqlEmpleados) > 0) {
        $empleados = mysqli_fetch_all($sqlEmpleados, MYSQLI_ASSOC);
        echo json_encode($empleados);
        exit();
    } 
    else{ echo json_encode(["success" => 0]);}
}

//borrar pero se le debe de enviar una clave (para borrado)
if (isset($_GET["borrar"])) {
    $sqlEmpleados = mysqli_query($conexionBD, "DELETE FROM solicitud WHERE id=".$_GET["borrar"]);
    if ($sqlEmpleados) {
        echo json_encode(["success" => 1]);
        exit();
    } 
    else{ echo json_encode(["success" => 0]);}
}

// Insertar un nuevo registro y recepcion en Metodo POST los datos de nombre y correo
if (isset($_GET["insertar"])) {
    $data = json_decode(file_get_contents("php://input"));
    $solicitud = $data->solicitud;
    $cantidad = $data->cantidad;
    $nombre_muestra = $data->nombre_muestra;
    $geologica = $data->geologica;
    $agua = $data->agua;
    $suelo = $data->suelo;
    $polvo = $data->polvo;
    $otro_muestra = $data->otro_muestra;
    
    $estado1 = $data->estado1;
    $municipio1 = $data->municipio1;
    $parroquia1 = $data->parroquia1;
    
    $petrografia = $data->petrografia;
    $drx = $data->drx;
    $meb = $data->meb;
    $frx = $data->frx;
    $icp = $data->icp;
    $quimico = $data->quimico;
    $elemento_quimico = $data->elemento_quimico;
    $otro_analisis = $data->otro_analisis;
    
    $observaciones = $data->observaciones;

    if (($solicitud != "") && ($cantidad != "") && ($nombre_muestra != "") && ($geologica != "")  && ($agua != "") && ($suelo != "") && ($polvo != "") && ($otro_muestra != "") &&
            ($estado1 != "") && ($municipio1 != "") && ($parroquia1 != "") &&
            ($petrografia != "") && ($drx != "") && ($meb != "") && ($frx != "") && ($icp != "") && ($quimico != "") && ($elemento_quimico != "") && ($otro_analisis != "") && ($observaciones != "")) {
        $sqlEmpleados = mysqli_query($conexionBD, "INSERT INTO solicitud(solicitud, cantidad, nombre_muestra, geologica, agua, suelo, polvo, otro_muestra, estado1, municipio1, parroquia1, petrografia, drx, meb, frx, icp, quimico, elemento_quimico, otro_analisis, observaciones) VALUES('$solicitud', '$cantidad', '$nombre_muestra', '$geologica', '$agua', '$suelo', '$polvo', '$otro_muestra', '$estado1', '$municipio1', '$parroquia1', '$petrografia', '$drx', '$meb', '$frx', '$icp', '$quimico', '$elemento_quimico', '$otro_analisis', '$observaciones')");
        echo json_encode(["success" => 1]);
    }
    exit();
}

// Actualizar datos, pero recepciona datos de nombre, correo y una clave para realizar la actualizacion
if (isset($_GET["actualizar"])) {
    $data = json_decode(file_get_contents("php://input"));
    $id = (isset($data->id)) ? $data->id : $_GET["actualizar"];
    $solicitud = $data->solicitud;
    $cantidad = $data->cantidad;
    $nombre_muestra = $data->nombre_muestra;
    
    $estado1 = $data->estado1;
    $municipio1 = $data->municipio1;
    $parroquia1 = $data->parroquia1;
    
    $geologica = $data->geologica;
    $agua = $data->agua;
    $suelo = $data->suelo;
    $polvo = $data->polvo;
    $otro_muestra = $data->otro_muestra;    
    $petrografia = $data->petrografia;
    $drx = $data->drx;
    $meb = $data->meb;
    $frx = $data->frx;
    $icp = $data->icp;
    $quimico = $data->quimico;
    $elemento_quimico = $data->elemento_quimico;
    $otro_analisis = $data->otro_analisis;
    
    $observaciones = $data->observaciones;

    $sqlEmpleados = mysqli_query($conexionBD, "UPDATE solicitud SET solicitud = '$solicitud', cantidad = '$cantidad', nombre_muestra = '$nombre_muestra', geologica = '$geologica', agua = '$agua', suelo = '$suelo', polvo = '$polvo', otro_muestra = '$otro_muestra', estado1 = '$estado1', municipio1 = '$municipio1', parroquia1 = '$parroquia1', petrografia = '$petrografia', drx = '$drx', meb = '$meb', frx = '$frx', icp = '$icp', quimico = '$quimico', elemento_quimico = '$elemento_quimico', otro_analisis = '$otro_analisis', observaciones = '$observaciones'  WHERE id='$id'");
    echo json_encode(["success" => 1]);
    exit();
}

// Consulta todo los registros de la tabla empleados
$sqlEmpleados = mysqli_query($conexionBD, "SELECT * FROM solicitud");
if (mysqli_num_rows($sqlEmpleados) > 0) {
    $empleados = mysqli_fetch_all($sqlEmpleados, MYSQLI_ASSOC);
    echo json_encode($empleados);
} 
else{     echo json_encode([["success" => 0]]); }



?>