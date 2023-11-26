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
    $codice = mysqli_real_escape_string($conn,$_POST["codice_spedizione"]);
    mysqli_query($conn,"UPDATE drone_detail AS det
    JOIN spedizioni AS sped ON sped.Drone_Spedizione = det.titolo
    SET det.quantita_prenotati = det.quantita_prenotati - 1, det.quantita_disponibili = det.quantita_disponibili + 1
    WHERE sped.codice_spedizione = $codice
    LIMIT 1;");
    mysqli_close($conn);
}

?>