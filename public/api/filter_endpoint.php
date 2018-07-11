<?php

$conn = mysqli_connect("localhost", "root", "root", "mountainproject");

$regex = [];

$output = [
    'success' => false,
    'error' => []
];


$rock = $_GET['rock'];
$traditional = $_GET['traditional'];
$topRope = $_GET['toprope'];
$sport = $_GET['sport'];
$aid = $_GET['aid'];
$boulder = $_GET['boulder'];
$ice = $_GET['ice'];
$snow = $_GET['snow'];
$rockDiffMin = $_GET['rockDiffStart'];
$rockDiffMax = $_GET['rockDiffEnd'];
$boulderDiffMin = $_GET['boulderDiffStart'];
$boulderDiffMax = $_GET['boulderDiffEnd'];


if($sport) {
    $regex[] = 'sport';
}

if($traditional) {
    $regex[] = 'trad';
}

if($topRope) {
    $regex[] = 'tr';
}

if($rock) {
    $regex[] = 'rock';
}

if($aid) {
    $regex[] = 'aid';
}

if($boulder) {
    $regex[] = 'boulder';
}

if($ice) {
    $regex[] = 'ice';
}

if($snow) {
    $regex[] = 'snow';
}


$regexString = join("|", $regex);


$query = "SELECT `locations`.`ID` AS 'Location ID', `locations`.`name`, `locations`.`avgLat`, `locations`.`avgLong`, COUNT(`routes`.`locationID`) AS 'Total Number of Routes With Filter', `routes`.`id` AS 'Route IDs'
    FROM `locations`
    JOIN `routes` ON `locations`.`ID` = `routes`.`locationID`
    WHERE LOWER(`type`) REGEXP {$regexString} AND
	`routes`.`rock_difficulty` BETWEEN {$rockDiffMin} AND {$rockDiffMax} AND
    `routes`.`boulder_difficulty` BETWEEN {$boulderDiffMin} AND {$boulderDiffMax}
    GROUP BY `routes`.`ID`";
$result = mysqli_query($conn, $query);

if(empty($result)) {
    $output['error'] = 'Database Error';
} else {
    if(mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
            $areaID = $row['Location ID'];
            if(isset($output['data'][$areaID])) {
                $output['data'][$areaID]['Route IDs'] .= ',' . $row['Route IDs'];
            } else {
                $output['data'][$areaID] = [
                    'name' => $row['name'],
                    'avgLat' => $row['avgLat'],
                    'avgLong' => $row['avgLong'],
                    'Total Number of Routes With Filter' => $row['Total Number of Routes With Filter'],
                    'Route IDs' => $row['Route IDs']
                ];
            }
        }
    } else {
        $output['error'] = 'No Data';
    }
}

?>