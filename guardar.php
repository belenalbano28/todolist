<?php
include_once 'database.php';
$database = new Database();
$db = $database->getConnection();
$conn = $db;

if (isset($_POST['email_r'])&& isset($_POST['nombre_r'])&&isset($_POST['password_r'])&&isset($_POST['confirmpassword_r'])) {
    
    $nombre=htmlspecialchars(strip_tags($_POST['name_r']));
    $mail=htmlspecialchars(strip_tags($_POST['email_r']));
    $pass=htmlspecialchars(strip_tags($_POST['password_r']));

    $pass_hush=password_hash($pass,PASSWORD_DEFAULT);

    $stmt = $this->conn->prepare("INSERT INTO `usuario`(`usuario`, `mail`, `contrasena`) VALUES (?,?,?);"); 
    //en un caso real, utilizaria stored procedures. En este caso particular, priorizo agilidad.
    $stmt->bindValue(1, $nombre);
    $stmt->bindValue(2, $mail);
    $stmt->bindValue(3, $pass_hush);

    if($stmt->execute()){
        return true;
        
     }else{
       return false;
       
     }

}
?>