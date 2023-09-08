<?php
session_start();
include_once 'database.php';
$database = new Database();
$db = $database->getConnection();
$conn = $db;

    $idusuario=$_SESSION['idusuario'];
    $relevancia=$_POST['relevancia'];
    $nombre=htmlspecialchars(strip_tags($_POST['nombre']));

    //crear tarea
    $stmt = $conn->prepare("INSERT INTO `tareas`(`nombre`, `relevancia`, `estado`, `idusuario`) VALUES (?,?,0,?);"); 
    //en un caso real, utilizaria stored procedures. En este caso particular, priorizo agilidad.
    $stmt->bindValue(1, $nombre);
    $stmt->bindValue(2, $relevancia);
    $stmt->bindValue(3, $idusuario);
   if(!$stmt->execute()){
    echo false;
              
   }else{
    echo true;
   }
      

?>