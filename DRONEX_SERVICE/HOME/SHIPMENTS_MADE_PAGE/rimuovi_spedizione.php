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
    $user = $_SESSION['Dronex_Service_user_ID'];
    mysqli_query($conn,"DELETE FROM spedizioni WHERE id_mittente = '$user' AND codice_spedizione = '$codice_spedizione'");
    mysqli_close($conn);
}

?>