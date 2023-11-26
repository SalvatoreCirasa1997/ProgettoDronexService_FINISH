<?php

session_start(); //avvia la sessione

//verifichiamo se abbiamo già effettuato l'accesso.
if(isset($_SESSION['Dronex_Service_username'])){

   if($_SESSION['Dronex_Service_username']!='admin'){
   header('Location: ../HOME/home.php');
   exit;
   }

   else{
       header('Location: ../HOME/ADMIN_PAGE/home_admin.php');
       exit;
   }
}

    //controllare la presenza di tutti i campi in maniera corretta ed inserisci i dati nel DB in caso affermativo
    if(!empty($_POST['nome_utente']) && !empty($_POST['cognome_utente']) && !empty($_POST['username']) &&
     !empty($_POST['password']) && !empty($_POST['e_mail']) && !empty($_POST['acconsento'])){

         $error=array();
         $conn = mysqli_connect('localhost','root','','DronexService');

         #Controllo generale dei dati:
         $username = mysqli_real_escape_string($conn,$_POST['username']);
         $nome = mysqli_real_escape_string($conn,$_POST['nome_utente']);
         $cognome = mysqli_real_escape_string($conn,$_POST['cognome_utente']);
         $password = mysqli_real_escape_string($conn,$_POST['password']);
         $email = mysqli_real_escape_string($conn,$_POST['e_mail']);

         #controllo username
         $query="SELECT username FROM users WHERE username = '$username'";
         $res= mysqli_query($conn,$query);
         if(mysqli_num_rows($res)>0){
            $error[]="Username già utilizzato";}

         if(strlen($_POST['username'])>10){
            $error[]="Username troppo lungo";}

         if(strlen($_POST['username'])<3){
            $error[]="Username troppo corto o non inserito";}

         if(strlen($_POST['username'])==0){
            $error[]="Username non inserito";}

         #controllo lunghezza nome
         if(strlen($nome)>15){
            $error[]="Nome inserito troppo lungo";}

         if(strlen($nome)<2){
            $error[]="Nome inserito troppo corto";}

         if(strlen($nome)==0){
            $error[]="Nome non inserito";}

         #controllo lunghezza cognome
         if(strlen($cognome)>15){
            $error[]="Cognome inserito troppo lungo";}

         if(strlen($cognome)<2){
            $error[]="Cognome inserito troppo corto";}
          
         if(strlen($cognome)==0){
            $error[]="Cognome non inserito";}

         #controllo password
         if(strlen($password)>15){
            $error[]="Password inserita troppo lunga";}

         if(strlen($password)<5){
            $error[]="Password inserita troppo corta ";}

         if(strlen($password)==0){
            $error[]="Password non inserita";}

         #controllo E-mail
         $query="SELECT e_mail FROM users WHERE e_mail = '$email'";
         $res= mysqli_query($conn,$query);
         if(mysqli_num_rows($res)>0){
            $error[]="E-mail già in uso ";}

         if(strlen($_POST['e_mail'])<7){
            $error[]="E-mail inserita troppo corta";}

         if(strlen($_POST['e_mail'])==0){
            $error[]="E-mail non inserita";}   

         if(strlen($_POST['e_mail'])>30){
            $error[]="E-mail inserita troppo lunga";}

         #aggiungo i dati inseriti all'interno del DB
         if(count($error)==0){
            $pass_hash = password_hash($password,PASSWORD_BCRYPT);
            $password = mysqli_real_escape_string($conn,$pass_hash);
            $query="INSERT INTO users(nome_utente,cognome_utente,username,password,e_mail)VALUES('$nome','$cognome','$username','$password','$email')";
            $res=mysqli_query($conn,$query);
            $_SESSION['Dronex_Service_username'] = $_POST['username']; #salva l'username e associo l'username alla sessione.
            $_SESSION['Dronex_Service_user_ID'] = mysqli_insert_id($conn); #salva l'ultimo ID inserito nel database e lo associo alla sessione.
            header("Location: ../HOME/home.php");
            mysqli_close($conn);
            exit(); 
        }
        else{
            $error[] = "Errore di connessione al DB";
        }
     }
?>





<html>
    <head>
        <link rel='stylesheet' href='registration.css'>
        <script src='registration.js' defer></script>

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="utf-8">
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">  
        <title>DronexService Registrazione</title>

    </head>

    <body>
       <header> 
          <div id="Overlay"></div>  
          <h1> DronexService</h1>
      </header>

      <h3 class='Titolo'>Registrazione</h3>
        <main>
            <section class="subscribe">
                <form name='signup' method='post'>

                    <div class="names">
                        <div class="nome_utente">
                           <div><label>Nome<input type='text' name='nome_utente' <?php if(isset($_POST["nome_utente"])){echo "value = ".$_POST["nome_utente"];} ?> ></label> </div>
                           <span></span>
                        </div>

                        <div class="cognome_utente">
                           <div><label>Cognome<input type='text' name='cognome_utente' <?php if(isset($_POST["cognome_utente"])){echo "value = ".$_POST["cognome_utente"];} ?> ></label> </div>
                           <span></span>
                        </div>
                     </div>

                     <div class="username">
                        <div><label>Username<input type='text' name='username' <?php if(isset($_POST["username"])){echo "value = ".$_POST["username"];} ?> ></label> </div>
                        <span></span>
                     </div>


                     <div class="password">
                        <div><label>Password<input type='password' name='password' <?php if(isset($_POST["password"])){echo "value = ".$_POST["password"];} ?> ></label> </div>
                        <span></span>
                     </div>

                     <div class="e_mail">
                        <div><label>E-mail<input type='text' name='e_mail' <?php if(isset($_POST["e-mail"])){echo "value = ".$_POST["e-mail"];} ?> ></label> </div>
                        <span></span>
                     </div>

                     <div class="acconsento">
                        <div><label>Acconsento al trattamento dei miei dati.<input type='checkbox' name='acconsento' value='1' <?php if (isset($_POST["acconsento"])){echo "value = ".$_POST["acconsento"];} ?> ></label> </div>      
                     </div>

                     <div class="submit">
                        <div><input type='submit' id='submit' value='Registrati'></div>
                     </div>

                </form>
                
                <div class="errore hidden">Compilare tutti i campi correttamente.</div>
                <div class="login">Hai gia' un account? <a href="../LOGIN/login.php">Accedi</a> </div>
            </section>
        </main>

        <footer> 
                <address>Developed by Cirasa Salvatore  <br>   O46001676</address>
        </footer>
    </body>
</html>