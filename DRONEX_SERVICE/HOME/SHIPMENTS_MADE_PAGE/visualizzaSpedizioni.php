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
        <link rel='stylesheet' href='visualizzaSpedizioni.css'>
        <script src='visualizzaSpedizioni.js' defer></script>

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="utf-8">
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">  
        <title>DronexService visualizza Spedizioni</title>

    </head>

    <body>
        <nav> 
            <h2 id='utente'><?php echo $_SESSION['Dronex_Service_username']; ?></h2>
            <a class='nav_a' href='../home.php'>Home</a>
            <a class='nav_a' href='visualizzaSpedizioni.php'> Le mie spedizioni </a>
            <a class='nav_a' href='../SHIPPING_REQUEST_PAGE/effettuaSpedizioni.php'> Effettua una spedizione </a>
            <a class='nav_a' href='../HOME_FUNCTIONS/logout.php'>esci </a>
            </nav>

       <header> 
          <div id="Overlay"></div>  
          <h1> DronexService</h1>
      </header>
      <h3 class='Titolo'>Le mie Spedizioni</h3>
       
         <main>
                <section id='Spedizioni_effettuate'>
                <!--caricamento dinamico da DB-->
                </section>
         </main>
       
         <footer> 
                <address>Developed by Cirasa Salvatore  <br>   O46001676</address>
        </footer>
    </body>
</html>