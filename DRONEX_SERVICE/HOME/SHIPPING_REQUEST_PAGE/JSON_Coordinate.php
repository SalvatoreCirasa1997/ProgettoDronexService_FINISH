<?php
  session_start(); 
  if(!isset($_SESSION['Dronex_Service_username'])){ 
      header('Location: ../../LOGIN/login.php');
      exit;
  }
$client_secret ='e3855540179d83e238b776684f4fa0a9';
$comune = $_POST['comune'];
$indirizzo = $_POST['indirizzo_dest'];
$url = "http://api.positionstack.com/v1/forward?access_key=". $client_secret .  "&query=" . urlencode($indirizzo) . " " . urlencode($comune) . " Catania&limit=1";
$response = file_get_contents($url);
echo $response;
?>