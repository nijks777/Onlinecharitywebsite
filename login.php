<?php
$email = $_POST['email'];
$password = $_POST['password'];
$con = new mysqli("localhost","root","","credentials");
if($con->connect_error){
    die("Failed to connect :".$con->connect_error);
}else{
    $stmt = $con->prepare("SELECT * FROM loginpage where Email_ID = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt_result = $stmt->get_result();
    if($stmt_result->num_rows > 0){
        $data = $stmt_result->fetch_assoc();
        if($data['Password'] === $password){
            echo "login successful";
        }else{
            echo "unseccessful login";
        }
    }else{
        echo "unsuccessful login";
    }
}
?>