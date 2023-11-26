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

    //controllare la presenza di tutti i campi in maniera corretta 
    if(!empty($_POST['nome_dest']) && !empty($_POST['cognome_dest']) &&
     !empty($_POST['città_dest']) && !empty($_POST['drone_spedizione']) && !empty($_POST['indirizzo_dest']) && !empty($_POST['acconsento'])){

         $error=array();

         $conn = mysqli_connect('localhost','root','','DronexService');

         #Controllo generale dei dati:
         $nome_dest = mysqli_real_escape_string($conn,$_POST['nome_dest']);
         $cognome_dest = mysqli_real_escape_string($conn,$_POST['cognome_dest']);
         $città_dest = mysqli_real_escape_string($conn,$_POST['città_dest']);
         $indirizzo_dest = mysqli_real_escape_string($conn,$_POST['indirizzo_dest']);
         $drone_spedizione = mysqli_real_escape_string($conn,$_POST['drone_spedizione']);
         $data_spedizione=date("d-m-Y");
         $ID_mittente=$_SESSION['Dronex_Service_user_ID'];


         #controllo lunghezza nome
         if(strlen($nome_dest)>15){
            $error[]="Nome utente troppo lungo";}

         if(strlen($nome_dest)<2){
            $error[]="Nome troppo corto o non presente";}

         #controllo lunghezza cognome
         if(strlen($cognome_dest)>15){
            $error[]="Cognome troppo lungo";}

         if(strlen($cognome_dest)<2){
            $error[]="Cognome troppo corto o non presente";}

         #controllo lunghezza città
         if(strlen($città_dest)>30){
            $error[]="Città non valida";}

         if(strlen($città_dest)<2){
            $error[]="Città errata o non presente";}

        #controllo lunghezza indirizzo
        if(strlen($indirizzo_dest)>40){
            $error[]="Indirizzo non valido";}
        
        if(strlen($indirizzo_dest)<5){
            $error[]="Indirizzo errato o non presente";}

     }
?>


<html>
    <head>
        <link rel='stylesheet' href='effettuaSpedizioni.css'>
        <script src='effettuaSpedizioni.js' defer></script>

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="utf-8">
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">  
        <title>DronexService Spedizioni</title>

    </head>

    <body>
        <nav> 
            <h2 id='utente'><?php echo $_SESSION['Dronex_Service_username']; ?></h2>
            <a class='nav_a' href='../home.php'>Home</a>
            <a class='nav_a' href='../SHIPMENTS_MADE_PAGE/visualizzaSpedizioni.php'> Le mie spedizioni </a>
            <a class='nav_a' href='effettuaSpedizioni.php'> Effettua una spedizione </a>
            <a class='nav_a' href='../HOME_FUNCTIONS/logout.php'>esci </a>

            
                <div id="menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>

       <header> 
          <div id="Overlay"></div>  
          <h1> DronexService</h1>
      </header>
      <h3 class='Titolo'>Spedizione</h3>
        <main>
                <section class="spedizione">
                
                <form name='spedizione' method='post'>

                <div class="nome_dest">
                        
                        <div><label>Nome Destinatario<input type='text' name='nome_dest' <?php if(isset($_POST["nome_dest"])){echo "value = ".$_POST["nome_dest"];} ?> ></label> </div>
                        <span></span>
                </div>

                <div class="cognome_dest">
                        
                        <div><label>Cognome Destinatario<input type='text' name='cognome_dest' <?php if(isset($_POST["cognome_dest"])){echo "value = ".$_POST["cognome_dest"];} ?> ></label> </div>
                        <span></span>
                </div>
                
                <div class="città_dest">     
                    <div><label>Comune destinatario
                            <select name='città_dest' id='comune'> 
                            <option value="Aci Bonaccorsi">Aci Bonaccorsi</option>
                                        <option value="Aci Castello">Aci Castello</option>
                                        <option value="Aci Catena">Aci Catena</option>
                                        <option value="Aci Sant'Antonio">Aci Sant'Antonio</option>
                                        <option value="Acireale">Acireale</option>
                                        <option value="Adrano">Adrano</option>
                                        <option value="Belpasso">Belpasso</option>
                                        <option value="Biancavilla">Biancavilla</option>
                                        <option value="Bronte">Bronte</option>
                                        <option value="Calatabiano">Calatabiano</option>
                                        <option value="Caltagirone">Caltagirone</option>
                                        <option value="Camporotondo Etneo">Camporotondo Etneo</option>
                                        <option value="Castel di Iudica">Castel di Iudica</option>
                                        <option value="Castiglione di Sicilia">Castiglione di Sicilia</option>
                                        <option value="Catania">Catania</option>
                                        <option value="Fiumefreddo di Sicilia">Fiumefreddo di Sicilia</option>
                                        <option value="Catania">Giarre</option>
                                        <option value="Grammichele">Grammichele</option>
                                        <option value="Gravina di Catania">Gravina di Catania</option>
                                        <option value="Licodia Eubea">Licodia Eubea</option>
                                        <option value="Linguaglossa">Linguaglossa</option>
                                        <option value="Maletto">Maletto</option>
                                        <option value="Maniace">Maniace</option>
                                        <option value="Mascali">Mascali</option>
                                        <option value="Mascalucia">Mascalucia</option>
                                        <option value="Mazzarrone">Mazzarrone</option>
                                        <option value="Militello in Val di C.">Militello in Val di C.</option>
                                        <option value="Milo">Milo</option>
                                        <option value="Mineo">Mineo</option>
                                        <option value="Mirabella Imbaccari">Mirabella Imbaccari</option>
                                        <option value="Misterbianco">Misterbianco</option>
                                        <option value="Motta Sant'Anastasia">Motta Sant'Anastasia</option>
                                        <option value="Nicolosi">Nicolosi</option>
                                        <option value="Palagonia">Palagonia</option>
                                        <option value="Paternò">Paternò</option>
                                        <option value="Pedara">Pedara</option>  
                                        <option value="Piedimonte Etneo">Piedimonte Etneo</option>
                                        <option value="Raddusa">Raddusa</option>
                                        <option value="Ragalna">Ragalna</option>
                                        <option value="Ramacca">Ramacca</option>
                                        <option value="Randazzo">Randazzo</option>
                                        <option value="Riposto">Riposto</option>
                                        <option value="San Cono">San Cono</option>
                                        <option value="San Giovanni la Punta">San Giovanni la Punta</option>
                                        <option value="San Gregorio di Catania">San Gregorio di Catania</option>
                                        <option value="San Michele di Ganzaria">San Michele di Ganzaria</option>
                                        <option value="San Pietro Clarenza">San Pietro Clarenza</option>
                                        <option value="Sant'Agata li Battiati">Sant'Agata li Battiati</option>
                                        <option value="Sant'Alfio">Sant'Alfio</option>
                                        <option value="Santa Maria di Licodia">Santa Maria di Licodia</option>
                                        <option value="Santa Venerina">Santa Venerina</option>
                                        <option value="Scordia">Scordia</option>
                                        <option value="Trecastagni">Trecastagni</option>
                                        <option value="Tremestieri Etneo">Tremestieri Etneo</option>
                                        <option value="Valverde">Valverde</option>
                                        <option value="Viagrande">Viagrande</option>
                                        <option value="Vizzini">Vizzini</option>
                                        <option value="Zafferana Etnea">Zafferana Etnea</option>
                                <?php if(isset($_POST["città_dest"])){echo "value = ".$_POST["città_dest"];} ?> 
                            </select>
                        </label> 
                    </div>
                </div>
                

                <div class="indirizzo_dest">
                        
                        <div><label>Indirizzo Destinatario<input type='text' name='indirizzo_dest' <?php if(isset($_POST["indirizzo_dest"])){echo "value = ".$_POST["indirizzo_dest"];} ?> ></label> </div>
                        <span></span>
                </div>

                <div class="drone_spedizione">
                        
                        <div><label>Drone<select name="drone_spedizione" class="drone"> 
                        <option value="DJI INSPIRE 2"> DJI INSPIRE 2 </option> 
                        <option value="DJI MAVIC PRO 2"> DJI MAVIC PRO 2 </option>
                        <option value="DJI PHANTOM 4"> DJI PHANTOM 4  </option> 
                        <option value="FreeX mcfx"> FREEX MCFX </option>
                        <option value="Parrot Anafi"> PARROT ANAFI </option> 
                        <option value="U PAIR 2"> U PAIR 2 </option>
                        <?php if (isset($_POST["drone_spedizione"])){echo "value = ".$_POST["drone_spedizione"];} ?> </select> </label> </div>
                </div>


                <div class="acconsento">
                        <div><label>Confermo la correttezza dei dati inseriti.<input type='checkbox' name='acconsento' value='1' <?php if (isset($_POST["acconsento"])){echo "value = ".$_POST["acconsento"];} ?> ></label> </div>      
                </div>

                <div class="submit">
                        <div><input type='submit' id='submit' value='Conferma Ordine'></div>
                </div>

                </form>
                
                <div class="errore hidden">Compilare tutti i campi correttamente.</div>

            </section>
        </main>
        <footer> 
                <address>Developed by Cirasa Salvatore  <br>   O46001676</address>
        </footer>
    </body>
</html>