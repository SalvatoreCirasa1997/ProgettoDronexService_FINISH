<?php
        session_start(); 
        if(!isset($_SESSION['Dronex_Service_username'])){ 
            header('Location: ../../LOGIN/login.php');
            exit;
        }


        $conn=mysqli_connect('localhost','root','','DronexService');
        $response=array();
        $i=0;
        $error = false;
        $user = $_SESSION['Dronex_Service_user_ID'];
        $query = "SELECT * FROM spedizioni WHERE id_mittente = '$user' ";
        $res= mysqli_query($conn,$query);
         
        while($row = mysqli_fetch_assoc($res)){
            $response[$i]['codice_spedizione'] = $row['codice_spedizione'];
            $response[$i]['nome_dest'] = $row['nome_dest'];
            $response[$i]['cognome_dest'] = $row['cognome_dest'];
            $response[$i]['città_dest'] = $row['città_dest'];
            $response[$i]['data_spedizione'] = $row['data_spedizione'];
            $response[$i]['stato'] = $row['stato'];
            $response[$i]['drone_Spedizione'] = $row['drone_Spedizione'];
            $i++;
        }

        if($i > 0){
        echo json_encode($response);
        mysqli_free_result($res);
        mysqli_close($conn);
        exit;
        }

        else{
        mysqli_close($conn);
        echo json_encode($error);
        }
?>