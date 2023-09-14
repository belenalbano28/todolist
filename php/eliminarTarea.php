<?php 
include_once 'database.php';
$database = new Database();
$db = $database->getConnection();
$conn = $db;
$idtarea=$_POST['idtarea'];
    $stmt = $conn->prepare("DELETE FROM `tareas` WHERE id_tarea=?;"); 
    //en un caso real, utilizaria stored procedures. En este caso particular, priorizo agilidad.
    $stmt->bindValue(1, $idtarea);
    echo $stmt->execute();
 
?>