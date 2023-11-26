<?php
    session_start();
    session_destroy();

    header('Location: /DRONEX_SERVICE/LOGIN/login.php');
    exit;
?>