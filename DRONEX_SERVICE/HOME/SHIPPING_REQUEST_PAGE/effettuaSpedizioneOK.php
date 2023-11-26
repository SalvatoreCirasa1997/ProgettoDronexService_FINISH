<?php
session_start(); 

if(!isset($_SESSION['Dronex_Service_username'])){ 
    header('Location: ../../LOGIN/login.php');
    exit;
}
if(isset($_SESSION['Dronex_Service_username'])){ 
    if($_SESSION['Dronex_Service_username']=='admin'){
        header('Location: ADMIN_PAGE/home_admin.php');
        exit;
        }
}
?>


<html>
    <head>
        <link rel='stylesheet' href='effettuaSpedizioneOK.css'>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="utf-8">
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">  
        <title>DronexService Spedizioni OK</title>

    </head>

    <body>
          <header> 
          <div id="Overlay"></div>  
          <h1> DronexService</h1>
          
          </header>
          <div id='container'>
          <div id='link'>
            <h2>Richiesta di spedizione effettuata con successo.</h2>
            <a href=../home.php>Torna alla Home </a>  
          </div>
          </div>

          <footer> 
                <address>Studente: Cirasa Salvatore  <br>   Matricola: O46001676</address>
        </footer>
    </body>

</html>