<?php
$username = $_POST['username'];
$password = $_POST['password'];
$success = false;
$db_fullname = $db_phone = $db_birthday = $db_age = "";

include('database.php');
$db = getDB();
if($db) {
    $query = "SELECT * FROM tested WHERE username = '$username'";
    $result = pg_query($query);

    if($result) {
        $db_password = pg_result($result, 0, "password");
        $db_fullname = pg_result($result, 0, "fullname");
        $db_phone = pg_result($result, 0, "phone");
        $db_birthday = pg_result($result, 0, "birthday");
        $db_age = pg_result($result, 0, "age");

        // Decrypt the password and then compare.
        if(password_verify($password, $db_password)) {
            $success = true;
        }
    }
}

echo json_encode(array('success' => $success,
                       'fullname' => $db_fullname,
                       'phone' => $db_phone,
                       'birthday' => $db_birthday,
                       'age' => $db_age));
?>