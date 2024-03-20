<?php
$hostname = "localhost";
$username = "root";
$password = "merai"; // Your database password here
$dbname = "usersauth";
$port = "3306";

// Create connection
$connection = mysqli_connect($hostname, $username, $password, $dbname, $port);

// Check connection
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
