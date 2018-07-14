<?php
header("Access-Control-Allow-Origin: *");

require 'mysql_connect.php';

$inputID = $_GET['data'];

$output = [
	'success'=> false,
	'errors'=>[]
];

$query = "SELECT `id`,`name`, `location_mountain` AS 'location', `description`, `type`, `pitches`, `difficulty`, `stars`, `star_votes`, `image` FROM `routes` WHERE `id` = $inputID";

$result = mysqli_query($conn, $query);

if (empty($result)) {
	$output['errors'][] = 'database error';
} else {
	if ($result) {
		$output['success'] = true;
        $output['data']=[];
        while( $row = mysqli_fetch_assoc($result)){
            $output['data'][] = $row;
        };
	} else {
		$output['errors'][] = 'no data';
	};
};

$outputJSON = json_encode($output);
print_r($outputJSON);