<?php
session_start(); 
if(!isset($_SESSION['Dronex_Service_username'])){ 
    header('Location: ../../LOGIN/login.php');
    exit;
}

    //verifica dati POST
if(isset($_POST["title"])){
    //connessione al db
    $conn = mysqli_connect("localhost","root","","DronexService");
    //Aggiungi evento al DB
    $user = $_SESSION['Dronex_Service_user_ID'];
    $title = mysqli_real_escape_string($conn,$_POST["title"]);
    
    mysqli_query($conn,"DELETE FROM preferiti WHERE id = $user AND title = '$title'");
    mysqli_close($conn);
    exit;
    }
    mysqli_close($conn);
?>