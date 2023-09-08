<?php
session_start();
session_unset();
?>
<script>
    localStorage.removeItem("status"); 
    location.href ='../index.html';
</script>