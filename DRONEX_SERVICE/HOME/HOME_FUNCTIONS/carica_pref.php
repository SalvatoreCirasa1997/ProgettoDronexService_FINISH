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
        $query = "SELECT * FROM preferiti WHERE id = '$user'";
        $res= mysqli_query($conn,$query);
         
        while($row = mysqli_fetch_assoc($res)){
            $response[$i]['id_box'] = $row['id_box'];
            $response[$i]['img'] = $row['img'];
            $response[$i]['title'] = $row['title'];

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