<?php
        session_start(); 
        if(!isset($_SESSION['Dronex_Service_username'])){ 
            header('Location: ../../LOGIN/login.php');
            exit;
        }

        $conn=mysqli_connect('localhost','root','','DronexService');
        $response=array();
        $i=0;
        $query = "SELECT * FROM drone_detail";
        $res= mysqli_query($conn,$query);

        while($row = mysqli_fetch_assoc($res)){
            $response[$i]['preferiti'] = $row['preferiti'];
            $response[$i]['titolo'] = $row['titolo'];
            $response[$i]['immagine'] = $row['immagine'];
            $response[$i]['descrizione'] = $row['descrizione'];

            $i++;
        }

        mysqli_free_result($res);
        mysqli_close($conn);
        echo json_encode($response);
?>