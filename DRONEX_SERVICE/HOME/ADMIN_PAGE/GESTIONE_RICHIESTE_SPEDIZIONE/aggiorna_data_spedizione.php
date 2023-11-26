<?php
session_start(); 
if(!isset($_SESSION['Dronex_Service_username'])){ 
    header('Location: ../../LOGIN/login.php');
    exit;
}

    //verifica dati POST
if(isset($_POST["codice_spedizione"])){
    //connessione al db
    $conn = mysqli_connect("localhost","root","","DronexService");
    //Aggiungi evento al DB
    $codice_spedizione = mysqli_real_escape_string($conn,$_POST["codice_spedizione"]);
    mysqli_query($conn,"UPDATE spedizioni SET data_spedizione=DATE_FORMAT(NOW(),'%d-%m-%Y') where codice_spedizione = '$codice_spedizione'");
    mysqli_close($conn);
}

?>