<?php session_start();
include_once 'database.php';
$database = new Database();
$db = $database->getConnection();
$conn = $db;
$idusuario=$_SESSION['idusuario'];

    $stmt = $conn->prepare("SELECT * FROM `tareas` WHERE idusuario=42;"); 
    //en un caso real, utilizaria stored procedures. En este caso particular, priorizo agilidad.
    $stmt->bindValue(1, $idusuario);
    $stmt->execute();
    $result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
    echo json_encode($result);
        exit();
?>