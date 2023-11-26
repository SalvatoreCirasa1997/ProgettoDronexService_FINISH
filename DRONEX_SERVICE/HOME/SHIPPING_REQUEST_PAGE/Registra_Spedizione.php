<?php
session_start(); 
if(!isset($_SESSION['Dronex_Service_username'])){ 
    header('Location: ../../LOGIN/login.php');
    exit;
}


    //connessione al db
    $conn = mysqli_connect("localhost","root","","DronexService");
    //Aggiungi evento al DB
    $nome_dest = mysqli_real_escape_string($conn,$_POST["nome_dest"]);
    $cognome_dest = mysqli_real_escape_string($conn,$_POST["cognome_dest"]);
    $città_dest = mysqli_real_escape_string($conn,$_POST["città_dest"]);
    $indirizzo_dest = mysqli_real_escape_string($conn,$_POST["indirizzo_dest"]);
    $drone_spedizione = mysqli_real_escape_string($conn,$_POST["drone_spedizione"]);
    $latitudine = mysqli_real_escape_string($conn,$_POST["latitudine"]);
    $longitudine = mysqli_real_escape_string($conn,$_POST["longitudine"]);
    $data_spedizione = mysqli_real_escape_string($conn,$_POST["data_spedizione"]);
    $stato = mysqli_real_escape_string($conn,$_POST["stato"]);
    $user = $_SESSION['Dronex_Service_user_ID'];
    
    mysqli_query($conn,"INSERT INTO spedizioni(id_mittente,nome_dest,cognome_dest,città_dest,indirizzo_dest,drone_Spedizione,latitudine,longitudine,data_spedizione,stato)VALUES('$user','$nome_dest','$cognome_dest','$città_dest','$indirizzo_dest','$drone_spedizione','$latitudine','$longitudine','$data_spedizione','$stato')");
    mysqli_close($conn);


?>