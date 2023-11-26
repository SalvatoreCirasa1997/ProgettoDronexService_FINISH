<?php
session_start(); 
if(!isset($_SESSION['Dronex_Service_username'])){ 
    header('Location: ../../LOGIN/login.php');
    exit;
}
if(isset($_SESSION['Dronex_Service_username'])){ 
    if($_SESSION['Dronex_Service_username']!='admin'){
        header('Location: ../home.php');
        exit;
        }
}
?>


<html>   

    <head>         
        <title>DronexService</title>                                                                              
        <link rel='stylesheet' href= 'home_admin.css'> 
        <script src = "home_admin.js" defer></script>
        <meta name="viewport" content = "width=device-width, initial-scale = 1">  
        <meta charset = "utf-8">  
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">  
        <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@300;500&display=swap" rel="stylesheet">                                 
    </head>                                                                                     
                                       
    <body>
        
            <nav> 
            <h2 id='utente'> ADMINISTRATOR </h2>
            <a class='nav_a' href='../HOME_FUNCTIONS/logout.php'>esci </a>
            </nav>

            <header> 
                <div id="Overlay"></div>  
                <h1> DronexService </h1>
            </header>

            <section id='control-panel'> 
                     <h2 class='panel-title'>PANNELLO DI CONTROLLO</h2>
                      <!--Pannello implementato dinamicamente-->                     
            </section>
          
            <footer> 
                <address>Developed by Cirasa Salvatore  <br>   O46001676</address>
            </footer>

    </body>
</html>