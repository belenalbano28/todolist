<?php 
include_once 'database.php';
$database = new Database();
$db = $database->getConnection();
$conn = $db;
$estado=$_POST['estado'];
$idtarea=$_POST['idtarea'];
$estado=htmlspecialchars(strip_tags($estado));
    $stmt = $conn->prepare("UPDATE `tareas` SET `estado`='?' WHERE id_tarea=?;"); 
    //en un caso real, utilizaria stored procedures. En este caso particular, priorizo agilidad.
    $stmt->bindValue(1, $estado);
    $stmt->bindValue(1, $idtarea);
    echo $stmt->execute();
 
?>