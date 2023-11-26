<?php
        session_start(); 
        if(!isset($_SESSION['Dronex_Service_username'])){ 
            header('Location: ../../LOGIN/login.php');
            exit;
        }

        $conn=mysqli_connect('localhost','root','','DronexService');
        $response=array();
        $i=0;
        $query = "SELECT * FROM control_panel";
        $res= mysqli_query($conn,$query);

        while($row = mysqli_fetch_assoc($res)){
            $response[$i]['titolo'] = $row['titolo'];
            $response[$i]['immagine'] = $row['immagine'];
            $response[$i]['link'] = $row['link']; 
            $response[$i]['href'] = $row['href'];
            $i++;
        }

        mysqli_free_result($res);
        mysqli_close($conn);
        echo json_encode($response);
?>