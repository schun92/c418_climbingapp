<?php
$conn = mysqli_connect("localhost", "root", "root", "mountainproject");

require('../backendAPI/google_places_curl.php');

$output = [
	'success'=> false,
	'errors'=>[]
];

// $query = "SELECT `ID`, `name`, `avgLat`, `avgLong`, `numRoutes` FROM locations WHERE (avgLat BETWEEN 33.6163 AND 33.8512) AND (avgLong BETWEEN -117.9008 AND -117.5991)";
$query = "SELECT `ID`, `name`, `avgLat`, `avgLong`, `numRoutes` FROM locations";

$result = mysqli_query($conn, $query);

if (empty($result)) {
	$output['errors'][] = 'database error';
} else {
	if ($result) {
		$output['success'] = true;
        $output['data']=[];
        while( $row = mysqli_fetch_assoc($result)){
            $output['data']['locations'][] = $row;
        };
	} else {
		$output['errors'][] = 'no data';
	};
};

$output['data']['mapCenterLat'] = $lat;
$output['data']['mapCenterLon'] = $lon;

$outputJSON = json_encode($output);
print_r($outputJSON);