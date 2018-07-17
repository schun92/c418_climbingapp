<?php
header("Access-Control-Allow-Origin: *");
require 'mysql_connect.php';

require('../../server/backendAPI/google_places_curl.php');

$output = [
	'success'=> false,
	'errors'=>[]
];

$radius = 50;

// $query = "SELECT `ID`, `name`, `avgLat`, `avgLong`, `numRoutes` FROM locations WHERE (avgLat BETWEEN 33.6163 AND 33.8512) AND (avgLong BETWEEN -117.9008 AND -117.5991)";
$query = "SELECT `ID`, `name`, `avgLat`, `avgLong`, `numRoutes`, SQRT( POW(69.1 * (`avgLat` - {$lat}), 2) + POW(69.1 * ({$lon} - `avgLong`) * COS(`avgLat` / 57.3), 2)) AS distance FROM locations
  HAVING distance < {$radius}";


$result = mysqli_query($conn, $query);

if (empty($result)) {
	$output['errors'][] = 'Database Error';
} else {
	if (mysqli_num_rows($result) > 0) {
		$output['success'] = true;
        $output['data']=[];
        while( $row = mysqli_fetch_assoc($result)){
            $output['data']['locations'][] = $row;
        };
	} else {
		$output['errors'][] = 'No Data';
	};
};

$output['data']['mapCenterLat'] = $lat;
$output['data']['mapCenterLon'] = $lon;

$outputJSON = json_encode($output);
print_r($outputJSON);

?>