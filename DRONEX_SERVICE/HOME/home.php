<?php
session_start(); 
if(!isset($_SESSION['Dronex_Service_username'])){ 
    header('Location: ../LOGIN/login.php');
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
        <title>DronexService</title>                                                                              
        <link rel='stylesheet' href= 'home.css'> 
        <script src = "home.js" defer></script>
        <meta name="viewport" content = "width=device-width, initial-scale = 1">  
        <meta charset = "utf-8">  
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">  
        <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@300;500&display=swap" rel="stylesheet">                                 
    </head>                                                                                     
                                       
    <body>
        
            <nav> 
            <h2 id='utente'><?php echo $_SESSION['Dronex_Service_username']; ?></h2>
            <a class='nav_a' href='home.php'>Home</a>
            <a class='nav_a' href='SHIPMENTS_MADE_PAGE/visualizzaSpedizioni.php'> Le mie spedizioni </a>
            <a class='nav_a' href='SHIPPING_REQUEST_PAGE/effettuaSpedizioni.php'> Effettua una spedizione </a>
            <a class='nav_a' href='HOME_FUNCTIONS/logout.php'>esci </a>
            </nav>

            <header> 
                <div id="Overlay"></div>  
                <h1> DronexService </h1>
            </header>

            <section id='presentazione'> 
                       
                        <!--Presentazione implementata tramite PHP-->

                        <div id='div_meteo'>

                                <div class=info_meteo>
                                    <h1 class='title_info_meteo'>Sfrutta i nostri servizi!</h1>
                                    <p class='paragrafo_info_meteo'>Con la spedizione tramite drone le condizioni climatiche sono importanti! <br> Scopri subito le condizioni meteo del tuo comune prima di effettuare una spedizione!</p>
                                </div>

                                <form id='form2'>
                                    Selezionare un comune :
                                    <select name='comune' id='comune'>
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
                                    </select>

                                    <input type='submit' id='submit1' value='Cerca'>
                                </form>
                                <section id='visualizza_meteo'>
                                    <!--implementata dinamicamente-->
                                </section>

                        </div>
            </section>

            <section id = "question-name">
                <h1 class = 'titolo'>scopri subito tutti i nostri Droni !</h1>
            </section>
            
            <section class= "preferiti hidden">
                <h1>PREFERITI</h1>
               <!--implementato dinamicamente-->
            </section>

            <section id = "ricerca">
                <h1>TUTTI I DRONI:</h1>
                <p> ricerca</p>
                <input id="cerca" type='text'>
            </section>

            <section id="griglia">
                <!--implementata dinamicamente-->
            </section>

            <main id='main_val'>
            <h1 class='titolo_valutazione'>Valutazione degli utenti</h1>
            <section id='valutazioni'>
                <!--Implementato dinamicamente-->
            </section>
            </main>            
            <footer> 
                <address>Developed by Cirasa Salvatore  <br>   O46001676</address>
        </footer>

    </body>
</html>