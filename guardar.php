<?php
session_start();
include_once 'database.php';
$database = new Database();
$db = $database->getConnection();
$conn = $db;

    
    $nombre=htmlspecialchars(strip_tags($_POST['name_r']));
    $mail=htmlspecialchars(strip_tags($_POST['email_r']));
    $pass=htmlspecialchars(strip_tags($_POST['password_r']));

    $pass_hush=password_hash($pass,PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO `usuario`(`usuario`, `mail`, `contrasena`) VALUES (?,?,?);"); 
    //en un caso real, utilizaria stored procedures. En este caso particular, priorizo agilidad.
    $stmt->bindValue(1, $nombre);
    $stmt->bindValue(2, $mail);
    $stmt->bindValue(3, $pass_hush);
   if(!$stmt->execute()){
       print_r($stmt->errorInfo());
   }else{
       $stmt = $conn->prepare("SELECT `id_usuario` FROM `usuario` WHERE mail=? AND usuario=?;"); 
       $stmt->bindValue(1, $mail);
       $stmt->bindValue(2, $nombre);
     $stmt->execute();
        
        if (false !== ($row = $stmt->fetchColumn()))
        {
            $_SESSION['idusuario']=$row;
        }
       
   }
      

?>