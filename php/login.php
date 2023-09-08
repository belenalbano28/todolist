<?php session_start();
include_once 'database.php';
$database = new Database();
$db = $database->getConnection();
$conn = $db;
$mail=htmlspecialchars(strip_tags($_POST['email']));
$contrasena=htmlspecialchars(strip_tags($_POST['password']));
    $stmt = $conn->prepare("SELECT * FROM `usuario` WHERE mail=?"); 
    $stmt->bindValue(1, $mail);
    
    if($stmt->execute()){
     /* echo count ($registro);
      echo 'separador';
      echo sizeOf($registro);
      */
      $registro=$stmt->fetch(PDO::FETCH_ASSOC);
      if(isset($registro['contrasena'])){
       while($registro){

           if(password_verify($contrasena,$registro['contrasena'])){
                 
                  $_SESSION['idusuario']=$registro['id_usuario'];
                  
                  ?>
                  <script>
                   localStorage.setItem("status", 1);
                   location.href ='../board.html';
                  </script>
                  <?php
              }else{
                  
                  ?>
                  <script>
                   localStorage.setItem("status", 0);
                     location.href ='../index.html';
                  </script>
                  <?php
                
              }
             
       } 
          
      }else{
            ?>
                  <script>
                   localStorage.setItem("status", 0);
                     location.href ='../index.html';
                  </script>
                  <?php
      }
      
       
      
    }else{
        
      ?>
      <script>
       localStorage.setItem("status", 0);
         location.href ='../index.html';
      </script>
      <?php
      
    }
    
    
        


?>