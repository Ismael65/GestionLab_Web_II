<?php

header("Acces-Control-Allow-Origin: *");
header("Acces-Control-Allow-Headers: access");
header("Acces-Control-Allow-Methods: GET, POST");
header("Control-Type: aplication/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// conecta a la base de datos con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "clientes";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);

// consulta datos y recepciona una clave para consultar datos con dicha clave
if (isset($_GET["consulta"])) {
    $sqlClientes = mysqli_query($conexionBD, "SELECT * FROM clientes WHERE id=".$GET["consulta"]);
    if (mysqli_num_rows($sqlClientes) > 0) {
        $clientes = mysqli_fetch_all($sqlClientes, MYSQLI_ASSOC);
        echo json_encode($clientes);
        exit();
    } 
    else{ echo json_encode(["success" => 0]);}
}

//borrar pero se le debe de enviar una clave (para borrado)
if (isset($_GET["borrar"])) {
    $sqlClientes = mysqli_query($conexionBD, "DELETE FROM clientes WHERE id=".$_GET["borrar"]);
    if ($sqlClientes) {
        echo json_encode(["success" => 1]);
        exit();
    } 
    else{ echo json_encode(["success" => 0]);}
}

// Insertar un nuevo registro y recepcion en Metodo POST los datos de nombre y correo
if (isset($_GET["insertar"])) {
    $data = json_decode(file_get_contents("php://input"));
    $fecha = $data->fecha;
    $cedula = $data->cedula;
    $nombre = $data->nombre;
    $apellido = $data->apellido;
    $telf_celular = $data->telf_celular;
    $telf_fijo = $data->telf_fijo;    
    $correo = $data->correo;
    $solicitud = $data->solicitud;

    if (($fecha != "") && ($cedula != "")  && ($nombre != "")  && ($apellido != "")  && ($telf_celular != "")  && ($telf_fijo != "")  && ($correo != "")  && ($solicitud != "")) {
        $sqlClientes = mysqli_query($conexionBD, "INSERT INTO clientes(fecha, cedula, nombre, apellido, telf_celular, telf_fijo, correo, solicitud) VALUES('$fecha', '$cedula', '$nombre', '$apellido', '$telf_celular', '$telf_fijo', '$correo', '$solicitud')");
        echo json_encode(["success" => 1]);
    }
    exit();
}

// Actualizar datos, pero recepciona datos de nombre, correo y una clave para realizar la actualizacion
if (isset($_GET["actualizar"])) {
    $data = json_decode(file_get_contents("php://input"));
    $id = (isset($data->id)) ? $data->id : $_GET["actualizar"];
    $fecha = $data->fecha;
    $cedula = $data->cedula;
    $nombre = $data->nombre;
    $apellido = $data->apellido;
    $telf_celular = $data->telf_celular;
    $telf_fijo = $data->telf_fijo;    
    $correo = $data->correo;
    $solicitud = $data->solicitud;

    $sqlClientes = mysqli_query($conexionBD, "UPDATE clientes SET fecha = '$fecha', cedula = '$cedula', nombre = '$nombre', apellido = '$apellido', telf_celular = '$telf_celular', telf_fijo = '$telf_fijo', correo = '$correo', solicitud = '$solicitud' WHERE id='$id'");
    echo json_encode(["success" => 1]);
    exit();
}

// Consulta todo los registros de la tabla empleados
$sqlClientes = mysqli_query($conexionBD, "SELECT * FROM clientes");
if (mysqli_num_rows($sqlClientes) > 0) {
    $clientes = mysqli_fetch_all($sqlClientes, MYSQLI_ASSOC);
    echo json_encode($clientes);
} 
else{     echo json_encode([["success" => 0]]); }



?>