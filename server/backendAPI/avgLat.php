<?php
require "mysql_connect.php";

$query = "SELECT `locationID`, AVG(`latitude`) AS 'avgLat' FROM	`routes` GROUP BY `locationID`";
$result = mysqli_query($conn,$query);
$latitudes = [];

if ( mysqli_num_rows($result) > 0 ) {
    while ( $row = mysqli_fetch_assoc($result) ) {
        $latitudes[] = $row;
    }
}
echo '<pre>';
print_r($latitudes);
echo '</pre>';

for( $i = 0; $i < count($latitudes); $i++ ){
    $query = "UPDATE `locations` SET `avgLat`={$latitudes[$i]['avgLat']} WHERE `ID`={$latitudes[$i]['locationID']}";
    $result = mysqli_query($conn,$query);
}



?>