<?php
$conn = mysqli_connect("localhost", "root", "root", "mountainproject");

$query = "SELECT COUNT(*) FROM `locations`";

$result = mysqli_query($conn, $query);

$row = mysqli_fetch_assoc($result);
$numOfLocations = $row['COUNT(*)'];

for ($locCount = 0; $locCount <= $numOfLocations; ++$locCount) {
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