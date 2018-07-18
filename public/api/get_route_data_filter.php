<?php
//Request from frontend is
//routeList=106070976,105903225,105870999
header("Access-Control-Allow-Origin: *");
$routeList = $_GET['routeList'];
require 'mysql_connect.php';

$output = [
    "success" => false,
    "error" => []
];


$query = "SELECT `id`, `name`, `type`, `difficulty` FROM `routes` WHERE `id` IN ({$routeList})";
$result = mysqli_query($conn, $query);

if(empty($result)) {
    $output['data'][] = 'Database Error';
} else {
    if(mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
            $output['data']['routes'][] = $row;
        }
        $output['success'] = true;
    } else {
        $output['success'] = 'No Data';
    }
}

$outputJSON = json_encode($output);
print_r($outputJSON);