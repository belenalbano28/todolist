<?php session_start();
include_once 'database.php';
$database = new Database();
$db = $database->getConnection();
$conn = $db;
$mail=htmlspecialchars(strip_tags($_POST['email']));
$contrasena=htmlspecialchars(strip_tags($_POST['password']));
    $stmt = $conn->prepare("SELECT * FROM `usuario` WHERE mail=?"); 
    $stmt->bindValue(1, $mail);
    $stmt->execute();
     while($registro=$stmt->fetch(PDO::FETCH_ASSOC)){
         if(password_verify($contrasena,$registro['contrasena'])){
                
                $_SESSION['idusuario']=$registro['id_usuario'];
              header("Location: board.html");
            }else{
                echo '<div class="alert alert-danger" role="alert">
                Password incorrect!
              </div>';
              //embeber lo anterior en la index antes
              header("Location: index.html");
            }
     }
        
       
       
   
      

?>