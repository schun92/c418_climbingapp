<?php
 header("Access-Control-Allow-Origin: *");
$locationID = $_GET['data'];


$conn = mysqli_connect("localhost", "root", "root", "mountainproject");


$output = [
    "success" => false,
    "error" => []
];


$query = "SELECT `id`, `name`, `type`, `difficulty` FROM `routes` WHERE `locationID` = {$locationID}";
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

?>