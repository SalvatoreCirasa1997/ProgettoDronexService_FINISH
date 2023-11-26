<?php
session_start(); 

if(!isset($_SESSION['Dronex_Service_username'])){ 
    header('Location: ../../../LOGIN/login.php');
    exit;
}
if(isset($_SESSION['Dronex_Service_username'])){ 
    if($_SESSION['Dronex_Service_username']!='admin'){
        header('Location: ../../home.php');
        exit;
        }
}
?>


<html>
    <head>
        <title>DronexService</title>                                                                              
        <link rel='stylesheet' href= 'gestione_disponibilita.css'> 
        <script src = "gestione_disponibilita.js" defer></script>
        <meta name="viewport" content = "width=device-width, initial-scale = 1">  
        <meta charset = "utf-8">  
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">  
        <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@300;500&display=swap" rel="stylesheet">

    </head>

    <body>
        <nav> 
            <h2 id='utente'> ADMINISTRATOR </h2>
            <a class='nav_a' href='../home_admin.php'>home</a>
            <a class='nav_a' href='../../HOME_FUNCTIONS/logout.php'>esci </a>
        </nav>
           
            <header> 
                <div id="Overlay"></div>  
                <h1> DronexService </h1>
            </header>

            <h2 class='panel-title'>GESTIONE DISPONIBILITA' DRONI</h2>

            <section id="griglia">
                <!--implementata dinamicamente-->
            </section>
                                       
          
            <footer> 
                <address>Developed by Cirasa Salvatore  <br>   O46001676</address>
            </footer>

    </body>
</html>