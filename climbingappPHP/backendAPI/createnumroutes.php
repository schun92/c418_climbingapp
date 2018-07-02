<?php
$conn = mysqli_connect("localhost", "root", "root", "mountainproject");

$query = "SELECT MIN(ID), MAX(ID) FROM `locations`";

$result = mysqli_query($conn, $query);

$row = mysqli_fetch_assoc($result);
$min = $row['MIN(ID)'];
$max = $row['MAX(ID)'];

for ($locCount = $min; $locCount <= $max; ++$locCount) {
    $query = "SELECT COUNT(*) FROM `routes` WHERE locationID = $locCount";
    $result = mysqli_query($conn, $query);
    
    $row = mysqli_fetch_assoc($result);
    $numCount = $row['COUNT(*)'];

    $query = "UPDATE `locations` SET `numRoutes` = $numCount WHERE `ID` = $locCount";
    $result = mysqli_query($conn, $query);

    if (empty($result)) {
        $output['errors'][] = 'database error';
    } else {
        if (mysqli_affected_rows($conn) > 0 ) {
            $output['success'] = true;
        } else {
            $output['errors'][] = 'no data';
        };
    };
    
    $outputJSON = json_encode($output);
    print($outputJSON);
};
?>