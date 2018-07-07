<?php

require "mysql_connect.php";

$result = null;

$query = "SELECT locationID, AVG(longitude) AS avgLon FROM routes GROUP BY locationID";

$result = mysqli_query($conn, $query);
$longitude = [];


if(mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $longitude[] = $row;
    }
}

echo '<pre>';
print_r($longitude);
echo '</pre>';

for($i = 0; $i < count($longitude); $i++) {
    $insertQuery = "UPDATE locations SET avgLong = {$longitude[$i]['avgLon']} WHERE ID = {$longitude[$i]['locationID']}";
    $result2 = mysqli_query($conn, $insertQuery);
}

?>