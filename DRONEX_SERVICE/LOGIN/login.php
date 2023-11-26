<?php
//Controllo della presenza dell'utente nel database 

    session_start(); //avvia la sessione

    //verifichiamo se abbiamo già effettuato l'accesso come utente
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

    if(!empty($_POST["username"]) && !empty($_POST["password"])){  //se i campi username e password non sono vuoti
     $conn = mysqli_connect('localhost','root','','DronexService');
     $username = mysqli_real_escape_string($conn,$_POST["username"]);
     $password = mysqli_real_escape_string($conn,$_POST["password"]);

     $query = "SELECT id,username,password FROM users WHERE username = '$username' ";
     $res= mysqli_query($conn,$query);
    if(mysqli_num_rows($res) > 0 ){ //se il nome utente è presente
       $entry = mysqli_fetch_assoc($res); //ritorna una sola riga

            if(password_verify($password , $entry['password'])){ 

                mysqli_free_result($res);
                mysqli_close($conn);
                $_SESSION['Dronex_Service_username'] = $entry['username']; #crea una sessione ricordando l'username.
                $_SESSION['Dronex_Service_user_ID'] = $entry['id']; #crea una sessione ricordando l'ID.

            //reindirizzamento utente o admin
            if($username != 'admin'){
                header("Location: ../HOME/home.php");
                mysqli_close($conn);
                exit;
            }

            else {
                header("Location: ../HOME/ADMIN_PAGE/home_admin.php");
            }
            }
        }
        $error = "Username o password errati";
    }
    
?>

<html>
    <head>
        <link rel='stylesheet' href='login.css'>

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="utf-8">
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">  
        <title>DronexService Accedi</title>
    </head>

    <body>
       <header> 
          <div id="Overlay"></div>  
          <h1> DronexService</h1>
       </header>

       <h3 class='Titolo'>Accedi</h3>
        <main class ="login">
            <section>
                    <?php
                    if(isset($error)){
                        echo"<span class='error'> $error </span>";
                    }
                    ?>
                <form name='login' method='post'>
                <div class="username">
                        
                        <div><label>Username<input type='text' name='username'<?php if (isset($_POST["username"])){echo "value = ".$_POST["username"];} ?>></label> </div>
                        
                </div>

                <div class="password">
                        
                        <div><label>Password<input type='password' name='password' ></label> </div>
                        
                </div>

                <div class="submit">
                        <div><input type='submit' id='submit' value='Accedi'></div>
                </div>
                </form>

                <div class="registrati">Non hai ancora un account? <a href="../REGISTRATION/registration.php">Registrati</a> </div>
            </section>
        </main>

        <footer> 
                <address>Developed by Cirasa Salvatore  <br>   O46001676</address>
        </footer>
    </body>
</html>