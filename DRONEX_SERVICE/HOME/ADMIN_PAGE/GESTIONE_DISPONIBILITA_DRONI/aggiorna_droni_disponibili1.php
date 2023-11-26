<?php
session_start(); 
if(!isset($_SESSION['Dronex_Service_username'])){ 
    header('Location: ../../LOGIN/login.php');
    exit;
}

    //verifica dati POST
if(isset($_POST["drone"])){
    //connessione al db
    $conn = mysqli_connect("localhost","root","","DronexService");
    //Aggiungi evento al DB
    $drone = mysqli_real_escape_string($conn,$_POST["drone"]);
    mysqli_query($conn,"UPDATE drone_detail SET quantita_disponibili = quantita_disponibili+1 WHERE titolo = '$drone'");
    mysqli_close($conn);
}

?>