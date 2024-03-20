<?php

$hostName = "localhost";
$dbUser = "root";
$dbPassword = "merai";
$dbName = "usersauth";
$conn = mysqli_connect($hostName, $dbUser, $dbPassword, $dbName);
if (!$conn) {
    die("Something went wrong;");
}

?>